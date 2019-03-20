import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";

import Navbar from './components/layout/Navbar';
import ErrorHandler from "./components/error/ErrorHandler";
import Routes from './Routes';

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
		this.props.history.push('/');
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
          <Navbar handleLogout={this.handleLogout} props={childProps} />
          <ErrorHandler>
            <Routes childProps={childProps} />
          </ErrorHandler>
        </div>
      </BrowserRouter>
    );
  }
}

export default withRouter(App);
