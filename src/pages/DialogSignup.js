import React from 'react';
//material ui
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
//call property and method by redux
import {useSelector } from 'react-redux';

const DialogSignup = (props) => {
    const message = useSelector( state =>{
        return state.message
      });
      
    return (
        <div>
          <Dialog
              open={props.open}
              keepMounted
              onClose={props.handleClose}
              aria-describedby="alert-dialog-slide-description"
              TransitionProps={{
                style: {
                    transitionDelay: 5000,
                }
            }}
            >
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  {message}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button color="secondary" onClick={props.handleClose} > OK </Button>                
              </DialogActions>
            </Dialog>
        </div>
    )
}

export default DialogSignup
