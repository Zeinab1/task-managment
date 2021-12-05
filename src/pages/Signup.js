import React  from 'react';
import { useForm } from "react-hook-form";
//resuable input 
import { InputField } from '../resuableComponent/InputField';
//react router dom
import {Link} from 'react-router-dom';
//@mui/material components
import { Button } from '@mui/material';
import {makeStyles} from '@mui/styles';

//yup for validation
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
//call property and method by redux
import { useDispatch} from 'react-redux';
import {registration} from '../redux/actions/taskActions'
//style of page
import styles from '../assets/styles/main.js';
import DialogSignup from './DialogSignup';

const useStyles = makeStyles(styles);


const Signup = () => {

// style and validation
const classes = useStyles();

const validationSchema= Yup.object().shape({
    name: Yup.string().required('name is required'),      
    email: Yup.string().email().required(), 
    password: Yup.string().required('password is required'),  
    age: Yup.string().required('age is required'),      


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

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () =>{
  setOpen(false)

}

//functionality

const dispatch = useDispatch();

    const onSubmit = (values) => {
      const name = values.name;
      const email = values.email;
      const password = values.password;
      const age =  parseInt(values.age);
      registration(dispatch , name , email , password , age)
      handleClickOpen();

    };

    return (
        <div className={classes.container}>
        <div className={classes.wrapLogin}>
          <form onSubmit={handleSubmit(onSubmit)}  >
            <span className={classes.loginFormlogo}>
            <i className="zmdi zmdi-landscape"></i>
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
                <div className={classes.wrapInput}>
                <InputField
                    id="age"
                    name="age"
                    type="number"
                    placeholder="Age"
                    register={register}
                    error={errors.age}
                />
                </div>
              
              <Button type="submit" className={classes.loginFormBtn}> Submit</Button>
              <div className={classes.loginFormAccount}>
                  <p>Already have an account? <Link to="/sign-in" style={{ textDecoration: 'none' }}><span>Sign In</span></Link></p>
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

export default Signup
