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
import { useDispatch } from 'react-redux';
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
                width:"80%",
                margin:"0 auto",
                paddingTop:"100px",
                paddingBottom:"300px"

            }}>
                <TodoList/>
            </Box>
            <Box
             sx={{
                width:{xs:"73px" ,sm:"80%"},
                margin:{xs:"20px" ,sm:"0 auto"}
            }}>
                <AddTodo/>
            </Box>
        </Box>
    )
}

export default AllTask
