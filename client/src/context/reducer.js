import { GET_TUTORS_BEGIN,GET_TUTORS_SUCCESS, GET_TUTOR_BEGIN, GET_TUTOR_SUCCESS } from "./actions"

const reducer = (state, action) => {
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
    throw new Error(`no such action :${action.type}`)
  }
  export default reducer