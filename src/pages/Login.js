import React from 'react';
import { useForm } from "react-hook-form";
import { InputField } from '../resuableComponent/InputField';
//react router dom
import {Link} from 'react-router-dom';
//@mui/material components
import { Button } from '@mui/material';
import {makeStyles} from '@mui/styles';

//yup for validation
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

//style of page
import styles from '../assets/styles/main.js';



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

      const onSubmit = (values) => {
        console.log("Form Submitted", { values });
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
        </div>
    )
}

export default Login
