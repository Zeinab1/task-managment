import React  from 'react';
import Navbar from '../pages/Navbar';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
//material ui
import { 
   
    Box,

} from '@mui/material';
//style
import styles from '../assets/styles/main';
import {makeStyles} from '@mui/styles';



const useStyles = makeStyles(styles);

const AllTask = () => {

    const classes = useStyles();

   

    return (
        <Box className={classes.todosBody}>
            <Navbar/>
            <Box
             sx={{
                width:"73%",
                margin:"0 auto"
            }}>
                <TodoList/>
                <AddTodo/>
            </Box>
        </Box>
    )
}

export default AllTask
