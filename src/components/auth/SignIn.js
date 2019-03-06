import React, { Component } from 'react'


class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
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
                    <h5 className="grey-text text-darken-3">Sign In</h5>

                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} required/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} required/>
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1">Log in</button>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn