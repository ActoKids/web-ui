import React, { Component } from 'react'

class SignUp extends Component {
    constructor(props){
        super(props);

        this.state = {
            isLoading: false,
            email: '',
            password: '',
            password_confirmation: '',
            firstName: '',
            lastName: '',
            organization: '',
            location:'',
            newUser: null
        };
    }

    validateForm(){
        return (
        
            this.state.lastName.length > 0 &&
            this.state.firstName.length > 0 &&
            this.state.location.length > 0 && 
            this.state.email.length > 0 && 
            this.state.password.length > 0 &&
            this.state.password === this.password_confirmation
        );
    }

  

    handleChange = (e) => {
        this.setState({
            // targets the id and its value
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        // shows whatever the user has typed into the form
        console.log(this.state);
        //validating User
        //Take the input data from state
       this.setState({ isLoading: true});
       this.setState({ newUser: "test"});
       this.setState({isLoading: false});

    }

  

    render() {
        return (
            <div className="container">
               
                <form onSubmit={this.handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign Up</h5>

                <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" name="firstName" onChange={this.handleChange} required/>
                </div>
                <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" name="lastName" onChange={this.handleChange} required/>
                </div>

                <div className="input-field">
                        <label htmlFor="organization">Organization</label>
                        <input type="text" id="organization" name="organization" onChange={this.handleChange} required/>
                </div>

                <div className="input-field">
                        <label htmlFor="email">Location</label>
                        <input type="text" id="location" name="location" onChange={this.handleChange} value={this.state.location} required/>
                </div>


                <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" onChange={this.handleChange} value={this.state.email} required/>
                </div>


                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" onChange={this.handleChange} value={this.state.password} required/>
                    </div>
                    
                    <div className="input-field">
                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" id="confirmPassword" name="password_confirmation" onChange={this.handleChange} value={this.state.password_confirmation} required/>
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1">Sign Up</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp