
import { useController } from "react-hook-form";
//@mui/material components
import { 
  TextField
} from '@mui/material';
import {makeStyles} from '@mui/styles';


const useStyles = makeStyles(()=>({
  textfieldClass: {
    '& .MuiInput-input': {
     '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
       '-webkit-appearance': 'none !important',
       "-moz-appearance":"textfield"
     },
       
    },
   
    "& .css-1x51dt5-MuiInputBase-input-MuiInput-input":{
      color:"#fff",
    },
    "& .MuiInput-underline:before": {
        borderBottom: "2px solid rgba(255,255,255,0.24)"
      },
      "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
        borderBottom: "2px solid rgba(255,255,255,0.24)"
      },
      "& .MuiInput-underline:hover:before": {
        borderBottom: "2px solid rgba(255,255,255,0.24)"
      },
      "& .MuiInput-underline:after": {
        borderBottom: "2px solid rgba(255,255,255,0.24)"
      },
      width:"100%",
   }, 
}))



  export const InputField = ({ error ,register, label , id ,name , ...inputProps}) =>{

    const classes = useStyles();
    
    return (
        <div>
          <label>{label}</label>
            <TextField 
            variant="standard"
              id={id}
              name={name}
              label={label}
              {...register(name)}
              {...inputProps}
              className={classes.textfieldClass}
                autoComplete ='off'
            />
            {error && <p style={{color:"#FFFF00", fontWeight:"400"}}>{error.message}</p>} 
        </div>
    );
}