import { GET_TUTORS_BEGIN,GET_TUTORS_SUCCESS, GET_TUTOR_BEGIN, GET_TUTOR_SUCCESS,DISPLAY_ALERT,CLEAR_ALERT,
    REGISTER_USER_BEGIN,REGISTER_USER_SUCCESS,REGISTER_USER_ERROR,LOGIN_USER_BEGIN,LOGIN_USER_ERROR,LOGIN_USER_SUCCESS, LOGOUT_USER,ADD_TUTOR_IMAGE } from "./actions"

const reducer = (state, action) => {
    if(action.type=== DISPLAY_ALERT){
        return{
            ...state,
            showAlert:true,
            alertText:action.payload.msg,
            alertType:action.payload.alertType
        }
    }
    if(action.type === CLEAR_ALERT){
        return{
            ...state,
            showAlert:false,
            alertType:'',
            alertText:''
        }
    }
    if(action.type===ADD_TUTOR_IMAGE){
        return{
            ...state,
            imageUrl:action.payload.image
        }
    }
    if(action.type===GET_TUTORS_BEGIN){
        return{ 
            ...state,
            isLoading:true,
            showAlert:false
        }
    }
    if(action.type === GET_TUTORS_SUCCESS){
        return{
            ...state,
            isLoading:false,
            tutors:action.payload.tutors,
        }
    }
    if(action.type===GET_TUTOR_BEGIN){
        return{
            ...state,
            isLoading:true,
            showAlert:false
        }
    }
    if(action.type === GET_TUTOR_SUCCESS){
        return{
            ...state,
            isLoading:false,
            tutor:action.payload.tutor,
        }
    }
    if(action.type === REGISTER_USER_BEGIN){
        return{
            ...state,
            isLoading:true
        }
    }
    if(action.type === REGISTER_USER_SUCCESS){
        return{
            ...state,
            isLoading:false,
            token:action.payload.token,
            user:action.payload.user,
            showAlert:true,
            alertText:'User Created! Redirecting...',
            alertType:'success'
        }
    }
    if(action.type === REGISTER_USER_ERROR){
        return{
            ...state,
            showAlert:true,
            alertText:action.payload.msg,
            alertType:'error',
            isLoading:false
        }
    }
    if(action.type === LOGIN_USER_BEGIN){
        return{
            ...state,
            isLoading:true
        }
    }
    if(action.type === LOGIN_USER_SUCCESS){
        return{
            ...state,
            isLoading:false,
            token:action.payload.token,
            user:action.payload.user,
            showAlert:true,
            alertText:'Login Successful! Redirecting...',
            alertType:'success'
        }
    }
    if(action.type === LOGIN_USER_ERROR){
        return{
            ...state,
            showAlert:true,
            alertText:action.payload.msg,
            alertType:'error',
            isLoading:false
        }
    }
    if(action.type === LOGOUT_USER){
        return{
            ...state,
            token:null,
            user:null
        }
    }
    throw new Error(`no such action :${action.type}`)
  }
  export default reducer