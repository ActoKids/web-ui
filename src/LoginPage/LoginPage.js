
import React, { Component} from 'react';
import './LoginPage.css';
import { userService } from '../services';

import RegisterPage from '../RegisterPage/RegisterPage';



export default class LoginPage extends Component{
    constructor(props){
        super(props);

        userService.logout();

        this.state = {
            username: '',
            password: '',
            submitted: false,
            loading: false,
            error: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateForm(){
        return this.state.email.length > 0 && this.state.password.length > 0;
    }


    handleChange (e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }


    handleSubmit (e){
        e.preventDefault();

        this.setState({submitted: true});
        const {username, password, returnUrl} = this.state;

        // stop here if form is invalid
        if (!(username && password)) {
            return;
        }

        this.setState({ loading: true });
        userService.login(username, password)
            .then(
                user => {
                    const { from } = this.props.location.state || { from: { pathname: "/" } };
                    this.props.history.push(from);
                },
                error => this.setState({ error, loading: false })
            );
    }



    render(){
        const { username, password, submitted, loading, error} = this.state;
        return (
            <div className="contaienr login-container">

                <div className="alert alert-info">
                        <p><b>Username:</b> johncena@gmail.com</p>
                        <p><b>Password:</b> johncena</p>
                    </div>

                <form className="form-signin form" onSubmit={this.handleSubmit}>

                    <h1 className="h3 mb-3 font-weight-normal text-dark">Please Login</h1>

                    <label for="inputEmail" htmlFor="username" className="sr-only">Email address</label>
                    <input type="text" className="form-control" name="username" placeholder="Username" value={username} onChange={this.handleChange} required autofocus/>
                    {submitted && !username && <div className="help-block text-dark">Username is required</div>}

                    <label htmlFor="password" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" class="form-control" name="password" placeholder="Password" required value={password} onChange={this.handleChange}/>
                    {submitted && !password &&
                            <div className="help-block text-dark">Password is required</div>
                        }


                    <div className="checkbox mb-3 text-dark"> 
                            <label>
                                <input type="checkbox" value="remember-me" />Remember me
                            </label> 
                    </div> 

                    <div className="form-group">
                        <button class="btn btn-lg btn-block signin-button" disabled={loading}>Login</button>
                        {loading}
                    </div>

                {error &&
                        <div className={'alert alert-danger'}>{error}</div>
                    }

                </form>

                {/* <div className="form-group">
                <button class="btn btn-lg btn-block register-button" onClick={RegisterPage}>Register</button> 

                </div> */}
                <p class="mt-5 mb-3 text-muted">&copy; 2019 Actokids</p>
            </div>
        );
    }
}
