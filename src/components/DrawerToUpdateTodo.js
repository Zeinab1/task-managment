import React , {useState} from 'react';
//material ui
import { 
    Grid ,
    Box,
    Drawer,
    TextField,
    Button,
    Snackbar

} from '@mui/material';
//icons
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const DrawerToUpdateTodo = (props) => {

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
    return (
        <React.Fragment >
            <Drawer
                anchor="right"
                open={props.open}
                onClose={props.toggleDrawerUpdate}
            >
                <Box px={3} py={2}>
                    <Grid container spacing={1}>
                    <Grid item xs={12} sm={12}>
                        <TextField
                       
                        />
                        
                    </Grid>
                    
                    </Grid>
                    
                    <Box mt={3}>
                    <Button
                        onClick={props.toggleDrawerUpdate}
                    >
                        Submit
                    </Button>
                    </Box>
                </Box>
            </Drawer>
            <div>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Floor Added"
                action={action}
            />
      </div>
       </React.Fragment>

    )
}

export default DrawerToUpdateTodo
