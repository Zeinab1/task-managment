import { ClassNames } from '@emotion/react';
import React from 'react';
import {makeStyles} from '@mui/styles';
import styles from '../assets/styles/main.js';
import { Typography } from '@mui/material';
//react router dom
import {Link} from 'react-router-dom';


const NotFound = () => {

const useStyles = makeStyles(styles);
const classes = useStyles();

    return (
        <div className={classes.container}>
                <Typography variant="h1">404</Typography>
                <Typography variant="h4">Sorry, but nothing exists here.</Typography>
                <Link to="/" >Go to Log In Page</Link>

        </div>
    )
}

export default NotFound
