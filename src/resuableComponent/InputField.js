
import { useController } from "react-hook-form";
//@mui/material components
import { 
    FormControl,
    Input
} from '@mui/material';



  export const InputField = ({ error ,register, label , id ,name , ...inputProps}) =>{

// how error appear and disappear with changes of custom input
    


    return (
        <div>
          <label>{label}</label>
            <Input 
              id={id}
              name={name}
              {...register(name)}
              {...inputProps}
            />
            
            {error && <p>{error.message}</p>} 
        </div>
    );
}