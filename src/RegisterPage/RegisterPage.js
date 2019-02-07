
import React, { Component} from 'react';

import './RegisterPage.css';


// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class RegisterPage extends Component{
    constructor(props){
        super(props);
        this.state = {
             firstname: '',
             lastname: '',
             organization: '',
             location: '',
             email: '',
             password: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateForm(){
        var password = document.getElementById("inputConfirmPassword").value;
        var confirmPassword = document.getElementById("inputPassword").value;
        
        if(password != confirmPassword){
            alert("Passwords do not match.");
            return false;
        }
        return true;
    }


    handleChange(e){
        this.setState({value: e.target.value});
    }

    handleSubmit(e){
        alert('Thank you for registering' + this.state.value);
        e.preventDefault();
    }


    render(){
        return (
            <div className="contaienr login-container">

                <form className="form-signin" onSubmit={this.handleSubmit}>

                    <h1 className="h3 mb-3 font-weight-normal text-dark">Register</h1>

                    <input type="text" className="form-control" name="firstname" placeholder="First Name" required />
                    <input type="text" className="form-control" name="lastname" placeholder="Last Name" required/>

                    <input type="text" className="form-control" name="organization" placeholder="Organization" required/>
                    <input type="address" className="form-control" name="location" placeholder="Location" required/>

                    <input type="email" className="form-control" name="email" placeholder="Email" required />

                    <input type="password" className="form-control" id="inputPassword" name="inputPassword" placeholder="Password" required/>
                    <input type="password" id="inputConfirmPassword" class="form-control" name="inputConfirmPassword" placeholder="Confirm Password" required/>
                    
                    <div className="form-group">
                        <button class="btn btn-lg btn-block register-button">Register Now</button>
                    </div>

                </form>
                    <p class="mt-5 mb-3 text-muted"><small>Copyright &copy; 2019 Actokids</small></p>
            </div>

        
        );
    }
}
