import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

import SignIn from '../auth/SignIn';

import App from '../../App'



const Navbar = (props) => {

//console.log(auth);
// const links = this.state.isAuthenticated ? <SignedInLinks /> : <SignedOutLinks />;

const myAuth= props.isAuthenticated;


// console.log('props: ', App.state.isAuthenticated);

// const links =  props.isAuthenticated ? <SignedInLinks /> : <SignedOutLinks />;

    return (
        <div className="navbar-fixed">
            <nav className="nav-wrapper red darken-1">
                <div className="container">
                    <Link to='/' className="brand-logo">ActoKids</Link>
                    {/* <SignedInLinks />
                    <SignedOutLinks /> */}
                </div>
                <div className="container right-align">{
                    
                    true ?

                     <ul className="right">
                        <li><NavLink to='/signup'>Sign Up</NavLink></li>
                        {/* <li><NavLink to='/signin'>Sign In</NavLink></li> */}
                     </ul>
                     : 

                     <ul className="right">
                        <li><NavLink to='/create'>Create Event</NavLink></li>
                        <li><NavLink to='/'>Sign Out</NavLink></li>
                        <li><NavLink to='/dashboard' className="btn btn-floating pink lighten-1">EN</NavLink></li>
                    </ul>
                    
                    }</div>
            </nav>
        </div>
    )
}

export default Navbar