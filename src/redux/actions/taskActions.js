import axios from 'axios';

import {
    LOGIN_REQUEST ,
    LOGIN_SUCCESS,
    LOGIN_ERROR,

    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_ERROR
} from '../types/types.js';

export const registerRequest = (dispatch) =>{
    dispatch( {type: REGISTER_REQUEST   })
}
export const registerSuccess = (dispatch,successMsg ) =>{
    dispatch( {type:  REGISTER_SUCCESS , payload:  successMsg  })
}
export const registerError = (dispatch,errorMsg) =>{
    dispatch( {type:   REGISTER_ERROR , payload: errorMsg  })
}

export const registration = (dispatch , name , email , password , age) =>{


    let data = JSON.stringify({
        "name": name,
        "email": email,
        "password": password,
        "age": age
    })
    
    axios({
        method: 'post',
        url: 'https://api-nodejs-todolist.herokuapp.com/user/register',
        headers: { 
        'Content-Type': 'application/json'
        },
        data : data
    })
      .then(response=>{
          const successMsg = 'Registration successful'
          registerSuccess(dispatch,successMsg)
      })
      .catch(error=>{
          const errorMsg = "Email already exist"
          registerError(dispatch,errorMsg)
      })
}