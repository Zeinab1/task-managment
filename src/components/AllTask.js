import React , {useEffect} from 'react';
import Navbar from '../pages/Navbar';
//style
import styles from '../assets/styles/main';
import {makeStyles} from '@mui/styles';
//call property and method by redux
import { useDispatch , useSelector} from 'react-redux';
import {fetchTodos , addTodo} from '../redux/actions/taskActions';

const useStyles = makeStyles(styles);

const AllTask = () => {

    const classes = useStyles();

    //fetch todos
    const dispatch = useDispatch();
    const todos = useSelector(state =>{
        return     state.todos
    })

    useEffect(() => {
        // fetchTodos(dispatch);
        // addTodo(dispatch)
        console.log(todos)
    }, [])

    return (
        <div className={classes.todosBody}>
            <Navbar/>
            <div className={classes.todosContainer}>
                {todos === [] ? (
                    <>
                    <p>you have not todos</p>
                    </>

                ):(
                    <>
                    <p>show todos</p>
                    {/* <div className={classes.todos}>

                    </div> */}
                    </>
                )
            }

            </div>
        </div>
    )
}

export default AllTask
