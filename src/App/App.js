import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from '../components';
import {MuiThemeProvider } from 'material-ui/styles';

import LoginPage from '../LoginPage/LoginPage';
import HomePage  from '../HomePage/HomePage';
import RegisterPage from '../RegisterPage/RegisterPage';

import UserForm from '../updateEvent/UserForm';
import AddEventForm from '../AddEvent/AddEventForm';

import getEvents from '../components/getEvents';

import './App.css';

class App extends Component {
  render() {
    return (
          <BrowserRouter>
            <div className="App">

              <switch>
                  <header className="App-header">
                    <Route path="/login" component={LoginPage} />
                  </header>
                  
                      <PrivateRoute exact path="/" component={HomePage} />
                      <Route path="/register" component={RegisterPage} />
                      <Route path="/userform" component={UserForm} />
                      <Route path="/addeventform" component={AddEventForm} />
                      <Route path="/getevents" component={getEvents}/>
                      
                  </switch>
              </div>
          </BrowserRouter>
    );
  }
}

export default App;