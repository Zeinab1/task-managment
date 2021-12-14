import {
    LOGIN_SUCCESS,
    LOGIN_ERROR,

    REGISTER_SUCCESS,
    REGISTER_ERROR,

    LOGOUT_SUCCESS,

    FETCH_TODOS_SUCCESS,


    UPDATE_TODO_STATE_SUCCESS,

    COMPLETED_TODO_SUCCESS


} from '../types/types.js'
const intialState = {
    todos : [],
    completedTodos:[],
    message:"",
    authenticated: false,
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
        case    LOGOUT_SUCCESS:
            return {
                ...state,
                authenticated: false
        }
        case    FETCH_TODOS_SUCCESS:
            return {
                ...state,
                todos: action.payload
        }
        case    UPDATE_TODO_STATE_SUCCESS:
            return {
                ...state,
        }
        case     COMPLETED_TODO_SUCCESS:
            return {
                ...state,
                completedTodos: action.payload
        }
       
        default : return state
}
}


export default taskReducer