import React , {useState} from 'react';
//material ui
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

//call property and method by redux
import { useDispatch} from 'react-redux';
import {logOut} from '../redux/actions/taskActions'

//react router dom
import { useNavigate } from 'react-router';

const Navbar = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
    const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
      };
    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
      };


    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
        >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={()=>{
       
            handleMenuClose();
            logOut(dispatch, navigate);
            }

        }
        >Log out</MenuItem>
        </Menu>
    );
  
  

    return (
        <Box spacing={2} sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <Typography
            variant="h6"
            edge="start"
            noWrap
            component="div"
            sx={{ flexGrow: 1 }}
          >
            LOGO
          </Typography>
                <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"

            >
                <AccountCircle />
            </IconButton>
      </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
    )
}

export default Navbar
