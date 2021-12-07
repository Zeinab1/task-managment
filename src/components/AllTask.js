import React , {useEffect}  from 'react';
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
//call property and method by redux
import { useDispatch , useSelector} from 'react-redux';
import { fetchTodos} from '../redux/actions/taskActions';



const useStyles = makeStyles(styles);

const AllTask = () => {

    const classes = useStyles();

    const dispatch = useDispatch();

   useEffect(() => {
    fetchTodos(dispatch)
   }, [])

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
