import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }

    handleChange = (e) => {
        this.setState({
            // targets the id and its value
            [e.target.id]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        // shows whatever the user has typed into the form
        console.log(this.state);
    }

    render() {
        return (
            <div className="container">
               
                <form onSubmit={this.handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign Up</h5>

                <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange} required/>
                </div>
                <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleChange} required/>
                </div>

                <div className="input-field">
                        <label htmlFor="organization">Organization</label>
                        <input type="text" id="organization" onChange={this.handleChange} required/>
                </div>


                

                <div className="input-field">
                        <label htmlFor="email">Location</label>
                        <input type="text" id="location" onChange={this.handleChange} required/>
                </div>


                <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} required/>
                </div>


                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} required/>
                    </div>
                    
                    <div className="input-field">
                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" id="confirmPassword" onChange={this.handleChange} required/>
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