import React from 'react';
import { useForm } from "react-hook-form";
import { InputField } from '../resuableComponent/InputField';
//@mui/material components
import { Button} from '@mui/material';

//yup for validation
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';


const Login = () => {

    const    validationSchema= Yup.object().shape({
      name: Yup.string().required('Name is required'),
      fullName: Yup.string().required('fullName is required'),

      
    });

    const { 
        register,
         handleSubmit,
         formState: { errors }
        } = useForm({
        mode:'onBlur',
        // defaultValues: {
        //   name: "",
        // },
        resolver: yupResolver(validationSchema)
     
      });

      const onSubmit = (values) => {
        console.log("Form Submitted", { values });
      };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputField
                    id="name"
                    name="name"
                    register={register}
                    error={errors.name}
                />
                 
                <Button type="submit"> Submit</Button>
            </form>
        </div>
    )
}

export default Login
