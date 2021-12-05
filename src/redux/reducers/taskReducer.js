import {
    REGISTER_SUCCESS,
    REGISTER_ERROR
} from '../types/types.js'
const intialState = {
    tasks : [],
    successMsg:"",
    errorMsg:""
}

const taskReducer = (state = intialState , action) =>{

    switch (action.type){

        case    REGISTER_SUCCESS:
        return {
            ...state,
            successMsg: action.payload
        }
        case   REGISTER_ERROR:
        return {
            ...state,
            errorMsg: action.payload
        }
       
        default : return state
}
}


export default taskReducer