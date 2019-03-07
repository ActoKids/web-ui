import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
    return (
        <div className="navbar-fixed">
            <nav className="nav-wrapper red darken-1">
                <div className="container">
                    <Link to='/' className="brand-logo">ActoKids</Link>
                    <SignedInLinks />
                    <SignedOutLinks />
                </div>
            </nav>
        </div>
    )
}

export default Navbar