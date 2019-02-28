import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import EventDetails from './components/events/EventDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateEvent from './components/events/CreateEvent'
import UpdateEvent from './components/events/UpdateEvent'
import getDetails from './components/events/getDetails'

import GetEvent from './components/events/GetEvent';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={ Dashboard } />
            <Route path='/event/:id' component={ getDetails } />
            <Route path='/signin' component={ SignIn } />
            <Route path='/signup' component={ SignUp } />
            <Route path='/create' component={ CreateEvent } />
            <Route path='/update' component={ UpdateEvent } />
            <Route path = '/get' component={GetEvent} />


          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
