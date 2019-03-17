import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = (props) => {

    console.log(props)
    console.log(props.props.isAuthenticated)
    const auth = props.props.isAuthenticated
    
    const links = auth ? <SignedInLinks /> : <SignedOutLinks />

    return (
        <div className="navbar-fixed">
            <nav className="nav-wrapper red darken-1">
                <div className="container">
                    <Link to='/' className="brand-logo">ActoKids</Link>
                    {links}
                </div>
            </nav>
        </div>
    )
}

export default Navbar
