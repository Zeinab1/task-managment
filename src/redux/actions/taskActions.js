import axios from 'axios';

import {
    LOGIN_REQUEST ,
    LOGIN_SUCCESS,
    LOGIN_ERROR,

    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_ERROR,

    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_ERROR,
} from '../types/types.js';


export const loginRequest = (dispatch) =>{
    dispatch( {type: LOGIN_REQUEST  })
}
export const loginSuccess = (dispatch) =>{
    dispatch( {type: LOGIN_SUCCESS  })
}
export const loginError = (dispatch , errorMsg) =>{
    dispatch( {type: LOGIN_ERROR , payload : errorMsg  })
}
export const registerRequest = (dispatch) =>{
    dispatch( {type: REGISTER_REQUEST   })
}
export const registerSuccess = (dispatch,successMsg ) =>{
    dispatch( {type:  REGISTER_SUCCESS , payload:  successMsg  })
}
export const registerError = (dispatch,errorMsg) =>{
    dispatch( {type:   REGISTER_ERROR , payload: errorMsg  })
}
export const logoutSuccess = (dispatch) =>{
    dispatch( {type:  LOGOUT_SUCCESS  })
}

export const logIn = (dispatch , email , password , navigate , setOpen) =>{

    
    let data = JSON.stringify({
        "email": email,
        "password": password,
    })
    
    axios({
        method: 'post',
        url: 'https://api-nodejs-todolist.herokuapp.com/user/login',
        headers: { 
        'Content-Type': 'application/json'
        },
        data : data
    })
      .then(response=>{
        loginSuccess(dispatch)
        localStorage.setItem('tokenLogin', response.data.token);
        navigate('/')

      })
      .catch(error=>{
        const errorMsg = "Email not exist"
        loginError(dispatch , errorMsg)
        setOpen(true)
         
      })
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
          localStorage.setItem('token', response.data.token)
      })
      .catch(error=>{
          const errorMsg = "Email already exist"
          registerError(dispatch,errorMsg)
      })
}

export const logOut = (dispatch , navigate) =>{

    const tokenLogin = localStorage.getItem('tokenLogin')

    axios({
        method: 'post',
        url: 'https://api-nodejs-todolist.herokuapp.com/user/logout',
        headers: { 
            'Authorization': `Bearer ${tokenLogin}`
        },
    })
      .then(response=>{
       logoutSuccess(dispatch)
       localStorage.removeItem("tokenLogin")
       navigate('/sign-in')

      })
      .catch(error=>{
        console.log(error)
      })
}