import React , {useState} from 'react';
//material ui
import { 
    Grid ,
    TextField,
    Button,
    Snackbar

} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
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
    padding:"10px 0",
    borderRadius:"10px",
    "&:hover":{
        backgroundColor:"#555"
    }
    
}

const AddTodo = () => {

    const classes = useStyles();

    // snackbar after add todo
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(true);
      };
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
      
        setOpen(false);
      };
    const action = (
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      );

    //functionality

    const [description , setDescription] = useState('');
    const dispatch = useDispatch();


    const handleChange = (e) =>{
        setDescription(e.target.value);
    }

    const resetValueAfterAddTodo = () =>{
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
                    <Grid  item xs={11} sm={8} >
                        <TextField
                            sx={{
                                ...textfieldStyle,
                                '@media screen and (max-width:300px )': {
                                   
                                   },
                            }}
                            InputProps={{
                                classes:{notchedOutline:classes.noBorder}
                              }}
                            placeholder="Add Todo here"
                            onChange={(e)=>handleChange(e)}
                            value={description}
                        />
                    </Grid>
                    <Grid  item  xs={11} sm={2} container justifyContent="center">
                        <Button
                            color="secondary"
                            variant="outlined"
                            sx={{
                                ...buttonStyle,
                                marginTop:{xs:"20px" , sm:"0"},
                                marginLeft:{xs:"0",sm:"30px"},
                                width:{xs:"100%", sm:"100px"}
                            
                            }}
                            onClick={() => {

                                addTodo(dispatch,description);
                                resetValueAfterAddTodo();
                                handleClick();
                            }}
                        >
                            Add
                        </Button>
                    </Grid>
                    <div>
                    <Snackbar
                        open={open}
                        autoHideDuration={6000}
                        onClose={handleClose}
                        message="New Todo Added"
                        action={action}
                    />
                    </div>
                </Grid>
    )
}

export default AddTodo
