
import React, { Component } from 'react';
import { Auth } from 'aws-amplify';


export default class SignIn extends Component {

    constructor(props) {
		super(props);
        //set properties of the state
		this.state = {
			isLoading: false,
			email: 'test@zack.com',
			password: 'password2'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    //vliadate email and password
    validateForm(){
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    //determining the change of the selected target/state
	handleChange = event => {
		this.setState({
            [event.target.id]: event.target.value

		});
	};

    //either when you select Login or Enter, perform this action
	handleSubmit = async event => {
        event.preventDefault();
        //promise is made that async request will not effect load time
        this.setState({ isLoading: true });

        
        //pull credentials from state and checking if authentication is true
		try {
            await Auth.signIn(this.state.email, this.state.password)
            .then( () =>
            console.log("Inside handleSubmit, before this.props"),
            console.log("props: " + this.props.route),
			this.props.userHasAuthenticated(true),
            //now load dashboard to DOM
            this.props.history.push('/dashboard')

            //if auth fails or not possible
        )} catch (e) {
			alert(e.message);
			this.setState({ isLoading: false });
		}
	};

    render() {
        
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" value={this.state.email} onChange={this.handleChange} required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" value={this.state.password} onChange={this.handleChange} required/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1" disabled={!this.validateForm()}>Log in</button>
                    </div>
                </form>
            </div>
        )
    }
}
