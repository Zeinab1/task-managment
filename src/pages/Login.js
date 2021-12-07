import React from 'react';
import { useForm } from "react-hook-form";
import { InputField } from '../resuableComponent/InputField';
//react router dom
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router';
import { Button } from '@mui/material';
import {makeStyles} from '@mui/styles';
//call property and method by redux
import { useDispatch} from 'react-redux';
import {logIn} from '../redux/actions/taskActions'
//yup for validation
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

//style of page
import styles from '../assets/styles/main.js';

import DialogSignup from './DialogSignup';




const useStyles = makeStyles(styles);

const Login = () => {

const classes = useStyles();

    const validationSchema= Yup.object().shape({
      email: Yup.string().email().required(), 
      password: Yup.string().required('password is required'),      

    });

    const { 
        register,
         handleSubmit,
         formState: { errors }
        } = useForm({
        mode:'onBlur',
        resolver: yupResolver(validationSchema)
     
      });
    //Dialog for registraion user

    const [open, setOpen] = React.useState(false);

    const handleClose = () =>{
      setOpen(false)

    }

    //functionality
      const dispatch = useDispatch();

      const navigate = useNavigate();

      const onSubmit = (values) => {
        const email = values.email;
        const password = values.password;
        logIn( dispatch , email , password , navigate , setOpen); 
      };

    return (
        <div className={classes.container}>
           <div className={classes.wrapLogin}>

             <form onSubmit={handleSubmit(onSubmit)}>
              <span className={classes.loginFormlogo}>
              <i class="zmdi zmdi-landscape"></i>
              </span>
              <span className={classes.loginFormTitle} >Log in</span>
                <div className={classes.wrapInput}>
                  <InputField
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      register={register}
                      error={errors.email}
                  />
                  </div>
                  <div className={classes.wrapInput}>
                  <InputField
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Password"
                      register={register}
                      error={errors.password}
                  />
                  </div>
                  <div className={classes.loginFormForget}>
                    <p>Forgot Password?</p>
                  </div>
                <Button type="submit" className={classes.loginFormBtn}> Submit</Button>
                <div className={classes.loginFormAccount}>
                    <p>No account? <Link to="/sign-up" style={{ textDecoration: 'none' }}><span>Sign Up</span></Link></p>
                  </div>
            </form> 
            
          </div>
          <DialogSignup
          open={open}
          handleClose={handleClose}          
          /> 
        </div>
    )
}

export default Login
