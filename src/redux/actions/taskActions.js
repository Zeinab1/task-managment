import axios from 'axios';

import {
    LOGIN_SUCCESS,
    LOGIN_ERROR,

    REGISTER_SUCCESS,
    REGISTER_ERROR,

    LOGOUT_SUCCESS,

    FETCH_TODOS_SUCCESS,

    UPDATE_TODO_STATE_SUCCESS,

    COMPLETED_TODO_SUCCESS
} from '../types/types.js';








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
        dispatch({type: LOGIN_SUCCESS  })
        localStorage.setItem('token', response.data.token);
        navigate('/')

      })
      .catch(error=>{
        const errorMsg = "Email or Password is wrong exist"
        dispatch( {type: LOGIN_ERROR , payload : errorMsg  })
        setOpen(true)
         
      })
}

export const registration = (dispatch , name , email , password , age ,navigate) =>{

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
          dispatch( {type:  REGISTER_SUCCESS , payload:  successMsg  })
          localStorage.setItem('token', response.data.token)
            navigate('/')

      })
      .catch(error=>{
          console.log(error)
          const errorMsg = "Email already exist"
        dispatch( {type:   REGISTER_ERROR , payload: errorMsg  })

      })
}

export const logOut = (dispatch , navigate) =>{

    const token = localStorage.getItem('token')

    axios({
        method: 'post',
        url: 'https://api-nodejs-todolist.herokuapp.com/user/logout',
        headers: { 
            'Authorization': `Bearer ${token}`
        },
    })
      .then(response=>{
        dispatch( {type:  LOGOUT_SUCCESS  })
       localStorage.removeItem("token")
       navigate('/sign-in')

      })
      .catch(error=>{
        console.log(error)
      })
}

export const fetchTodos = (dispatch) => {

    const token = localStorage.getItem('token')

    axios({
        method: 'get',
        url: 'https://api-nodejs-todolist.herokuapp.com/task',
        headers: { 
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    })
      .then(response=>{
        const todos = response.data.data;
        dispatch( {type:   FETCH_TODOS_SUCCESS , payload: todos  })

      })
      .catch(error=>{
        console.log(error)
      })

}

export const addTodo = (dispatch , description) =>{

    const token = localStorage.getItem('token');

    var data = JSON.stringify({
        "description": description
      });
    axios({
        method: 'post',
        url: 'https://api-nodejs-todolist.herokuapp.com/task',
        headers: { 
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        data : data
    })
      .then(response=>{
          fetchTodos(dispatch)
      })
      .catch(error=>{
        console.log(error)
      })
}

export const deleteTodo = (dispatch , id) => {

    const token = localStorage.getItem('token');
    console.log(id)

    axios({
        method: 'delete',
        url: `https://api-nodejs-todolist.herokuapp.com/task/${id}`,
        headers: { 
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    })
      .then(response=>{
          fetchTodos(dispatch)
      })
      .catch(error=>{
        console.log(error)
      })

}

export const updateTodoState = (dispatch,id) => {

    const token = localStorage.getItem('token');

    console.log(id)
    let data = JSON.stringify({
        "completed": true
      });

      axios({
        method: 'put',
        url: `https://api-nodejs-todolist.herokuapp.com/task/${id}`,
        headers: { 
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        data : data
    })
      .then(response=>{
          const completedTodo = response.data.data;
          console.log(completedTodo);
          dispatch({type: UPDATE_TODO_STATE_SUCCESS , payload: completedTodo})
         fetchCompletedTasks(dispatch)
      })
      .catch(error=>{
        console.log(error)
      })

}

export const fetchCompletedTasks = (dispatch)=>{

    const token = localStorage.getItem('token')
    axios({
        method: 'get',
        url: 'https://api-nodejs-todolist.herokuapp.com/task?completed=true',
        headers: { 
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    })
    .then(response=>{
       console.log(response.data.data);
       const completedTodos = response.data.data;
       dispatch({type:  COMPLETED_TODO_SUCCESS , payload: completedTodos})

      })
      .catch(error=>{
        console.log(error)
      })
}

