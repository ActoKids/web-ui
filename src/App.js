import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from './components/layout/Navbar';

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
			<div>
				
					<Navbar handleLogout={this.handleLogout} props={childProps} />
					<Routes childProps={childProps}/>

			</div>
    );
  }
}

export default withRouter(App);
