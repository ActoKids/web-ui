
import React, {Component } from 'react';
import { Link } from 'react-router-dom';

import { userService } from '../services';



export default class HomePage extends Component{
    constructor(props){
        super(props);

        this.state= {
        user:{},
        users: [],
        };
    }


    componentDidMount() {
        this.setState({ 
            user: JSON.parse(localStorage.getItem('user')),
            users: { loading: true }
        });
        userService.getAll().then(users => this.setState({ users }));
    }


    render() {
        const { user, users } = this.state;
        return (
            // <div className="col-md-6 col-md-offset-3 text-dark">
                <div className="text-dark">
                <h1>Hi {user.firstName}!</h1>
                <p>You're logged in.</p>
                <h3>Welcome to ActoKids</h3>
                {users.loading && <em> Organization</em>}
                {users.length &&
                    <ul>
                        {users.map((user, index) =>
                            <li key={user.id}>
                                {user.firstName + ' ' + user.lastName}
                            </li>
                        )}
                    </ul>
                }
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }



}