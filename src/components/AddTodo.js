import React , {useState} from 'react';
//material ui
import { 
    Grid ,
    TextField,
    Button

} from '@mui/material';
import {makeStyles} from '@mui/styles';
import styles from '../assets/styles/main';
//call property and method by redux
import { useDispatch } from 'react-redux';
import { addTodo} from '../redux/actions/taskActions';

const useStyles = makeStyles(styles);

const textfieldStyle = {
    backgroundColor:"#e4e4e4",
    width:"100%",
    borderRadius:"10px"
}
const buttonStyle = {
    backgroundColor:"#555",
    color:"#fff",
    width:"100px",
    padding:"10px 0",
    borderRadius:"10px",
    marginLeft:"30px",
    "&:hover":{
        backgroundColor:"#555"
    }
    
}

const AddTodo = () => {

    const classes = useStyles();

    //functionality

    const [description , setDescription] = useState('');
    const dispatch = useDispatch();


    const handleChange = (e) =>{
        setDescription(e.target.value);
    }

    const handleClick = () =>{
        setDescription('')
    }
    return (
        <Grid container sx={{
            position:"fixed" ,
             bottom:"0" , 
            alignItems:"center",
            margin:"10px 0"

             }} 
             >
                    <Grid  item xs={7} sm={8} >
                        <TextField
                            sx={{
                                ...textfieldStyle,
                            }}
                            InputProps={{
                                classes:{notchedOutline:classes.noBorder}
                              }}
                            placeholder="Add Todo here"
                            onChange={(e)=>handleChange(e)}
                            value={description}
                        />
                    </Grid>
                    <Grid  item  xs={12} sm={2}>
                        <Button
                            color="secondary"
                            variant="outlined"
                            sx={{
                                ...buttonStyle,
                            }}
                            onClick={() => {

                                addTodo(dispatch,description);
                                handleClick();
                            }}
                        >
                            Add
                        </Button>
                    </Grid>
                </Grid>
    )
}

export default AddTodo
