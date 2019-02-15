import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { PrivateRoute } from '../components';
import HomePage  from '../HomePage/HomePage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';

import UserForm from '../updateEvent/UserForm';

import {MuiThemeProvider } from 'material-ui/styles';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
            <div>
              <header className="App-header">

              <PrivateRoute exact path="/" component={HomePage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
              </header>

                  <MuiThemeProvider>
                    <UserForm />
                  </MuiThemeProvider>
            </div>

          </Router>

      </div>

      
    );
  }
}

export default App;