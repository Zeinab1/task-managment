import React from 'react';
import { useForm } from "react-hook-form";
import { InputField } from '../resuableComponent/InputField';
//react router dom
import {Link} from 'react-router-dom';
//@mui/material components
import { Button, Typography , } from '@mui/material';
import {makeStyles} from '@mui/styles';
//yup for validation
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

//style of page
import styles from '../assets/styles/main.js';

const useStyles = makeStyles(styles);


const Signup = () => {

const classes = useStyles();

const validationSchema= Yup.object().shape({
    name: Yup.string().required('name is required'),      
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
          <form onSubmit={handleSubmit(onSubmit)}  >
            <span className={classes.loginFormlogo}>
            <i class="zmdi zmdi-landscape"></i>
            </span>
            <span className={classes.loginFormTitle} >Sign Up</span>
            <div className={classes.wrapInput}>
                <InputField
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    register={register}
                    error={errors.name}
                />
                </div>
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
              
              <Button type="submit" className={classes.loginFormBtn}> Submit</Button>
              <div className={classes.loginFormAccount}>
                  <p>Already have an account? <Link to="/" style={{ textDecoration: 'none' }}><span>Sign In</span></Link></p>
                </div>
          </form>
        </div>
      </div>
    )
}

export default Signup
