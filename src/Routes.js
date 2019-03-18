import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppliedRoute from './components/AppliedRoute';

import Dashboard from './components/dashboard/Dashboard'
import EventDetails from './components/events/EventDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateEvent from './components/events/CreateEvent'
import UpdateEvent from './components/events/UpdateEvent'
import GetEvent from './components/events/GetEvent';
import NotFound from './components/NotFound';

export default ({ childProps }) => (
	<Switch>
                <AppliedRoute path='/' exact component={ SignIn } props={childProps}/>
                <AppliedRoute path='/event/:id' exact component={ EventDetails } props={childProps}/>
                <AppliedRoute path='/dashboard' exact component={ Dashboard } props={childProps}/>
                <AppliedRoute path='/signup' exact component={ SignUp } props={childProps}/>
                <AppliedRoute path='/create' exact component={ CreateEvent } props={childProps}/>
                <AppliedRoute path='/update' exact component={ UpdateEvent } props={childProps}/>
                <AppliedRoute path = '/get' exact component={GetEvent} props={childProps}/>
                { /* Finally, catch all unmatched routes */ }
                <Route component={NotFound} />
        </Switch>
);