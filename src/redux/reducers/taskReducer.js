import {
    LOGIN_REQUEST ,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    REGISTER_SUCCESS,
    REGISTER_ERROR
} from '../types/types.js'
const intialState = {
    tasks : [],
    message:"",
    authenticated: false
}

const taskReducer = (state = intialState , action) =>{

    switch (action.type){

        case    LOGIN_SUCCESS:
            return {
                ...state,
                authenticated: true
        }
        case    LOGIN_ERROR:
            return {
                ...state,
                message: action.payload,
                authenticated: false
            }
        case    REGISTER_SUCCESS:
        return {
            ...state,
            message: action.payload,
        }
        case   REGISTER_ERROR:
        return {
            ...state,
            message: action.payload,
        }
       
        default : return state
}
}


export default taskReducer