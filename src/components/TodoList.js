import React, {useEffect , useState } from 'react';
//material ui
import { 
    Typography,
    Box,
    Grid,
    Checkbox,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Snackbar

} from '@mui/material';
//icons
import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
//call property and method by redux
import { useDispatch , useSelector} from 'react-redux';
import { deleteTodo , updateTodoState} from '../redux/actions/taskActions';


const typographyStyle = {
    mt:10,
    textAlign:"center"
}

const TodoList = () => {

    //functionality
        const [id , setId] = useState('');
        const [idUpdate , setIdUpdate] = useState('');

        //fetch todos
        const dispatch = useDispatch();
        const todos = useSelector(state =>{
            return     state.todos
        });
        const completedTodos = useSelector(state =>{
            return     state.completedTodos
        });
      console.log(completedTodos)
      useEffect(() => {

        updateTodoState(dispatch,idUpdate)
    }, [idUpdate])

 
     //Dialog for delete todo

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
    setOpen(true);
    };

    const handleClose = () =>{
    setOpen(false)
    }

     // snackbar after delete todo
     const [openSnackbar, setOpenSnackbar] = useState(false);
     const handleClick = () => {
        setOpenSnackbar(true);
       };
       const handleCloseSnackbar = (event, reason) => {
         if (reason === 'clickaway') {
           return;
         }
       
         setOpenSnackbar(false);
       };
     const action = (
         <React.Fragment>
           <IconButton
             size="small"
             aria-label="close"
             color="inherit"
             onClick={handleCloseSnackbar}
           >
             <CloseIcon fontSize="small" />
           </IconButton>
         </React.Fragment>
       );
   
    return (
          <div >
                {todos.length === 0 ? (
                    <Box sx={{
                        ...typographyStyle,
                    }}>
                    <Typography variant="h4">You have not todos</Typography>
                    </Box>

                ):(
                    <>
                    {todos.map(function(todo,index) {
                        return (
                            <Grid container  
                                sx={{
                                    backgroundColor:"#fff",
                                    borderRadius:"10px",
                                    padding:"11px 14px",
                                    margin:"20px 0"
                                }}
                                key={index}
                            >
                                <Grid xs={6} item container alignItems="center" >
                                    <Grid item>
                                    <Checkbox
                                        icon={<CircleUnchecked />}
                                        checkedIcon={<CircleChecked  />}
                                        onClick={()=>{
                                            setIdUpdate(todo._id)
                                        }}
                                        
                                        />
                                    </Grid>
                                    <Grid item  >
                                        <Typography >{todo.description}</Typography>
                                    </Grid>
                                </Grid>
                                <Grid  xs={6} item container justifyContent="flex-end" alignItems="center" >
                                        
                                        <Grid item >
                                            <Button sx={{color:"red"}} onClick={()=> {
                                                setId(todo._id);
                                                handleClickOpen();
                                                }
                                                 }
                                                 >Delete</Button>
                                        </Grid>

                                </Grid>
                            </Grid>
                        )
                    })
                    }
                    
                    </>
                )
            }
            {completedTodos.length === 0 ? (
                   null

                ):(
                    <>
                    <Typography variant="h6" sx={{
                    }}>Completed Tasks</Typography>
                    {completedTodos.map(function(todo,index) {
                        return (
                            <>
                            <Grid container  
                                sx={{
                                    backgroundColor:"#fff",
                                    borderRadius:"10px",
                                    padding:"11px 14px",
                                    margin:"20px 0"
                                }}
                                key={index}
                            >
                                
                                <Grid xs={6} item container alignItems="center" >
                                    <CheckCircleIcon sx={{color:"#9152f8" , marginRight:"10px"}}/>
                                        <del style={{color:"#808080"}} >{todo.description}</del>
                                </Grid>
                                {/* <Grid  xs={6} item container justifyContent="flex-end" alignItems="center" >
                                        
                                            <Button sx={{color:"red"}} onClick={()=> {
                                                setId(todo._id);
                                                handleClickOpen();
                                                }
                                                 }
                                                 >Delete</Button>

                                </Grid> */}
                            </Grid>
                            </>
                        )
                    })
                    }
                    
                    </>
                )
            }
             <div>
    
                <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                >
                <DialogTitle>Delete Task</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                    Are you sure you want to delete task ?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                
                    <Button
                    color="secondary"
                        onClick={() => {
                            deleteTodo(dispatch,id);
                            handleClose();
                            handleClick();
                          
                        }}
                        >
                        yes
                        </Button>
                    
                    <Button onClick={handleClose}>No</Button>
                </DialogActions>
                </Dialog>
                </div>
                <div>
                    <Snackbar
                        open={openSnackbar}
                        autoHideDuration={6000}
                        onClose={handleCloseSnackbar}
                        message="Todo deleted"
                        action={action}
                    />
                    </div>
                    
           </div> 
          
    )
}

export default TodoList
