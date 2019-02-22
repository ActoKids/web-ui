import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import {Tabs, Tab} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';

import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';

import { Link } from 'react-router-dom';
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { red500, red100 } from "material-ui/styles/colors";




const muiTheme = getMuiTheme({
    palette: {
        primary1Color: "#e74c3c",      
        accentColor: red100
    }
  });



const NavBar = (props) => {
    const { auth, profile } = props;
    // const links = auth.uid ? <LoginPage profile={profile} /> : <RegisterPage />;

    return(
        <MuiThemeProvider muiTheme={muiTheme}>
            <AppBar>
            <Toolbar>
                <Typography variant="h6" color="inherit">
                    ActoKids
                </Typography>
                    <Link to ="/userform">
                        <Button color="white">Update Event</Button>
                    </Link>   

                    <Link to ="/addeventform">
                        <Button color="white">Add Event</Button>
                    </Link>

                    
                    <Link to="/getevents">
                        <Button color="white">Get Events</Button>
                    </Link>  

                    <Link to="/login">
                        <Button color="white">Logout</Button>
                    </Link>    
            </Toolbar>
        </AppBar>
        </MuiThemeProvider>
    )
}

export default NavBar;