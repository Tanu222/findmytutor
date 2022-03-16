import React, { useState, useReducer, useContext } from 'react'
import reducer from './reducer';
import { GET_TUTORS_BEGIN,GET_TUTORS_SUCCESS,GET_TUTOR_SUCCESS, GET_TUTOR_BEGIN, 
    CREATE_TUTOR_BEGIN,CREATE_TUTOR_ERROR,CREATE_TUTOR_SUCCESS} from './actions';
import axios from 'axios';

export const initialState = {
  isLoading: false,
  tutorName:'',
  tutorLocation:'',
  skills:[],
  tutorDescription:'',
  imageUrl:'',
  tutors:[],
  tutor:null
}
const AppContext = React.createContext()
const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getTutors = async () => {
        const url = `http://localhost:5000/api/tutors`;
        dispatch({ type: GET_TUTORS_BEGIN });
        try {
            const { data } = await axios.get(url);
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

    const getTutor = async(tutorId) =>{
        //console.log('Inside get Tutor ');
        const url = `http://localhost:5000/api/tutor/${tutorId}`;
        dispatch({ type: GET_TUTOR_BEGIN });
        try {
            const { data } = await axios.get(url);
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
    const createTutor = async(tutor) =>{
        const url = `http://localhost:5000/api/tutor`;
        console.log(tutor);
        try {
            await axios.post(url,tutor);
            // dispatch({
            //     type: CREATE_TUTOR_SUCCESS,
            //     payload: {
            //         tutor
            //     }
            // })
        } catch (err) {
            console.log(err.response);
            //logoutUser();
        }

    }
  return (
    <AppContext.Provider
      value={{
        ...state,getTutors,getTutor,createTutor
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