import { ClassNames } from '@emotion/react';
import React from 'react';
import {makeStyles} from '@mui/styles';
import styles from '../assets/styles/main.js';
import { Typography } from '@mui/material';


const NotFound = () => {

const useStyles = makeStyles(styles);
const classes = useStyles();

    return (
        <div className={classes.container}>
                <Typography variant="h1">404</Typography>
                <Typography variant="h4">Sorry, but nothing exists here.</Typography>

        </div>
    )
}

export default NotFound
