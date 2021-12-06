import React, {useEffect } from 'react';
//material ui
import { 
   
    Typography,
    Box,
    Grid,
    Checkbox,
    Button

} from '@mui/material';
import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
//call property and method by redux
import { useDispatch , useSelector} from 'react-redux';
import {fetchTodos , addTodo} from '../redux/actions/taskActions';


const typographyStyle = {
    mt:10,
    textAlign:"center"
}

const TodoList = () => {

     //fetch todos
     const dispatch = useDispatch();
     const todos = useSelector(state =>{
         return     state.todos
     });
 
     
 
     useEffect(() => {
         fetchTodos(dispatch);
     }, [])
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
                                    margin:"20px"
                                }}
                            >
                                <Grid xs={6} item container alignItems="center" >
                                    <Grid item>
                                    <Checkbox
                                        icon={<CircleUnchecked />}
                                        checkedIcon={<CircleChecked />}
                                        />
                                    </Grid>
                                    <Grid item  >
                                        <Typography >{todo.description}</Typography>
                                    </Grid>
                                </Grid>
                                <Grid  xs={6} item container justifyContent="flex-end" alignItems="center" >
                                        <Grid item >
                                            <Button>Update</Button>
                                        
                                        </Grid>
                                        <Grid item >
                                            <Button sx={{color:"red"}}>Delete</Button>
                                        </Grid>

                                </Grid>
                            </Grid>
                        )
                    })
                    }
                    
                    </>
                )
            }

           </div> 
    )
}

export default TodoList