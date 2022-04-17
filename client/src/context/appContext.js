import React, { useReducer, useContext } from 'react'
import reducer from './reducer';
import {
    GET_TUTORS_BEGIN, GET_TUTORS_SUCCESS, GET_TUTOR_SUCCESS, GET_TUTOR_BEGIN, DISPLAY_ALERT, CLEAR_ALERT,
    REGISTER_USER_BEGIN, REGISTER_USER_SUCCESS, REGISTER_USER_ERROR, LOGIN_USER_BEGIN, LOGIN_USER_ERROR, LOGIN_USER_SUCCESS, LOGOUT_USER,
    ADD_TUTOR_IMAGE
} from './actions';
import axios from 'axios';
import { storage, ref, getDownloadURL } from '../firebase';

const token = localStorage.getItem('token');
const user = localStorage.getItem('user');

export const initialState = {
    isLoading: false,
    tutors: [],
    tutor: null,
    user: user ? JSON.parse(user) : null,
    token: token,
    alertText: '',
    alertType: '',
    showAlert: false,
    imageUrl: ''
}
const AppContext = React.createContext()
const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const authFetch = axios.create({
        baseURL: 'http://localhost:5000/api',
    })
    //request
    authFetch.interceptors.request.use((config) => {
        config.headers.common['Authorization'] = `Bearer ${state.token}`;
        return config;
    }, (error) => {
        return Promise.reject(error);
    })
    //response
    authFetch.interceptors.response.use((response) => {
        return response;
    }, (error) => {
        if (error.response.status === 401) {
            logoutUser();
        }
        return Promise.reject(error);
    })

    const getTutors = async () => {
        const url = `/tutor/get-all`;
        dispatch({ type: GET_TUTORS_BEGIN });
        try {
            const { data } = await authFetch.get(url);
            const tutors = data;

            dispatch({
                type: GET_TUTORS_SUCCESS,
                payload: {
                    tutors
                }
            })
        } catch (err) {
            console.log(err.response);
            //logoutUser();
        }
        //clearAlert();
    }

    const addUserToLocalStorage = ({ user, token }) => {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);
    }
    const removeUserFromLocalStorage = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    }


    const getTutor = async (tutorId) => {
        //console.log('Inside get Tutor ');
        const url = `http://localhost:5000/api/tutor/get/${tutorId}`;
        dispatch({ type: GET_TUTOR_BEGIN });
        try {
            const { data } = await authFetch.get(url);
            const tutor = data;

            dispatch({
                type: GET_TUTOR_SUCCESS,
                payload: {
                    tutor
                }
            })
        } catch (err) {
            console.log(err.response);
            //logoutUser();
        }
        //clearAlert();
    }

    const createTutor = async (tutor) => {
        const url = `http://localhost:5000/api/tutor/add`;
        // console.log(tutor);
        try {
            let res = await authFetch.post(url, tutor);
            console.log(res);
            if(res.data.success==true){
                displayAlert('Tutor Profile Succesfully created!', 'success');
            }
        } catch (err) {
            console.log(err.response);
            logoutUser();
        }

    }

    const registerUser = async (currentUser) => {
        const url = `http://localhost:5000/api/user/register`;
        dispatch({ type: REGISTER_USER_BEGIN })
        try {
            const response = await axios.post(url, currentUser);
            const { user, token } = response.data;
            dispatch({
                type: REGISTER_USER_SUCCESS,
                payload: {
                    user,
                    token
                }
            })
            addUserToLocalStorage({ user, token });
        } catch (err) {
            dispatch({
                type: REGISTER_USER_ERROR,
                payload: {
                    msg: err.response.data.msg
                }
            })
            console.log(err.response);
            clearAlert();
        }
    }
    const loginUser = async (currentUser) => {
        const url = `http://localhost:5000/api/user/login`;
        dispatch({ type: LOGIN_USER_BEGIN })
        try {
            const { data } = await axios.post(url, currentUser);
            const { user, token } = data;
            dispatch({
                type: LOGIN_USER_SUCCESS,
                payload: {
                    user,
                    token
                }
            })
            clearAlert();
            addUserToLocalStorage({ user, token });
        } catch (err) {
            dispatch({
                type: LOGIN_USER_ERROR,
                payload: {
                    msg: err.response.data.msg
                }
            })
            console.log(err.response);
            clearAlert();
        }
    }
    const logoutUser = () => {
        dispatch({ type: LOGOUT_USER });
        removeUserFromLocalStorage();
    }
    const displayAlert = (msg, alertType) => {
        console.log(alertType);
        dispatch({
            type: DISPLAY_ALERT,
            payload: {
                msg: msg,
                alertType: alertType
            }
        });
        clearAlert();
    }
    const clearAlert = () => {
        //console.log("clearAlert");
        setTimeout(() => {
            dispatch({ type: CLEAR_ALERT });
        }, 2000)
    }
    return (
        <AppContext.Provider
            value={{
                ...state, getTutors, getTutor, createTutor, registerUser, displayAlert, clearAlert, loginUser, logoutUser
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
// make sure use
export const useAppContext = () => {
    return useContext(AppContext)
}

export { AppProvider };