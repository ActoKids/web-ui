import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = (state) => {
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
