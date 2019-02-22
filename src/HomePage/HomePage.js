
import React, {Component } from 'react';
import { Link } from 'react-router-dom';

import { userService } from '../services';
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { red500, red100 } from "material-ui/styles/colors";

import NavBar from '../components/NavBar';



//change the color of theme
const muiTheme = getMuiTheme({
    palette: {
      primary1Color: "#e74c3c",
      accent1Color: red100
    }
  });

export default class HomePage extends Component{
    constructor(props){
        super(props);
        this.state= {
        user:{},
        users: [],
        };
    }

    componentDidMount() {
        this.setState({ 
            user: JSON.parse(localStorage.getItem('user')),
            users: { loading: true }
        });
        userService.getAll().then(users => this.setState({ users }));
    }


    render() {
        const { user, users } = this.state;
        return (
             <div>
             <NavBar />
             
                <h1>Hi {user.firstName}!</h1>
                <h3>Welcome to ActoKids</h3>
                {users.loading && <em> Organization</em>}
                
              
                {/* {users.length &&
                    <ul>
                        {users.map((user, index) =>
                            <li key={user.id}>
                                {user.firstName + ' ' + user.lastName}
                            </li>
                        )}
                    </ul>
                } */}
              
            </div>   
        );
    }



}