import {
    REGISTER_SUCCESS,
    REGISTER_ERROR
} from '../types/types.js'
const intialState = {
    tasks : [],
    message:"",
}

const taskReducer = (state = intialState , action) =>{

    switch (action.type){

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