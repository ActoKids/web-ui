
import React, { Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class RegisterPage extends Component{
    // constructor(props){
    //     super(props);


    //     this.state = {
    //         username: '',
    //         password: '',
    //         submitted: false,
    //         loading: false,
    //         error: ''
    //     };

      
    // }

  

    render(){
        // const { username, password, submitted, loading, error} = this.state;
        return (
            <div className="contaienr login-container">

                <form className="form-signin form">

                    <h1 className="h3 mb-3 font-weight-normal text-dark">Register</h1>

                    <input type="text" className="form-control" name="username" placeholder="First Name" />
                    <input type="text" className="form-control" name="username" placeholder="Last Name" />

                    <input type="text" className="form-control" name="username" placeholder="Organization" />
                    <input type="text" className="form-control" name="username" placeholder="Location" />

                    <input type="text" className="form-control" name="username" placeholder="Email" />

                    <input type="text" className="form-control" name="username" placeholder="Password" />


                    <input type="password" id="inputPassword" class="form-control" name="password" placeholder="Confirm Password"/>
                    



               

                <div className="form-group">
                    <button class="btn btn-lg btn-block register-button">Register Now</button>

                    

                </div>
            
                    <p class="mt-5 mb-3 text-muted">&copy; 2019 Actokids</p>

                </form>

            </div>
        );
    }
}
