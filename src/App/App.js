import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { PrivateRoute } from '../components';
import HomePage  from '../HomePage/HomePage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <div>
              <PrivateRoute exact path="/" component={HomePage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
            </div>

          </Router>
        </header>

      </div>

      
    );
  }
}

export default App;