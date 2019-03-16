import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, PropsRoute  } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import EventDetails from './components/events/EventDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import UserForm from "./components/events/UserForm";
import UpdateEvent from './components/events/UpdateEvent';


import AppliedRoute from './components/AppliedRoute';
// import for auth using amplify
import { Auth } from 'aws-amplify';

class App extends Component {
  constructor(props) {
		super(props);
    this.props = props;
		this.state = {
			isAuthenticated: false,
			isAuthenticating: true
		};
	}

	//check to validate authentication
	async componentDidMount() {
		try {
			if (await Auth.currentSession()) {
				this.userHasAuthenticated(true);
			}
		} catch (e) {
			if (e !== 'No current user') {
				alert(e);
			}
		}
		//if auth is not possible, return to login page
		this.setState({ isAuthenticating: false });
	}
	//set state to authenticated=true
	userHasAuthenticated = (authenticated) => {
		this.setState({ isAuthenticated: authenticated });
	};

	handleLogout = async event => {
		await Auth.signOut();

		this.userHasAuthenticated(false);
		this.props.history.push('/SignIn');
	};
	render() {
		const childProps = {
			isAuthenticated: this.state.isAuthenticated,
			userHasAuthenticated: this.userHasAuthenticated
    };
    return (
      <BrowserRouter>
			{/* Below we are configuring the login page. You must use AppliedRoute and childProps
			when connecting to AWS Cognito */}
        <div className="App">
          <Navbar />
          <Switch>
            <AppliedRoute exact path='/' component={ SignUp } props={childProps} />
            <AppliedRoute path='/events/:event_id' component={ EventDetails } props={childProps}/>
            <AppliedRoute path='/dashboard' component={ Dashboard } props={childProps}/>
            <AppliedRoute path='/signup' component={ SignIn } props={childProps}/>
            <AppliedRoute path='/create' component={ UserForm } props={childProps}/>
            <AppliedRoute path='/update' component={ UpdateEvent } props={childProps}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
