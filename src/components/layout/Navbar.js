import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = (props) => {
    const auth = props.props.isAuthenticated
    const links = auth ? <SignedInLinks /> : <SignedOutLinks />
    return (
        <div className="navbar-fixed">
            <nav className="nav-wrapper red darken-1">
                <div className="container">
                    <Link to='/dashboard' className="brand-logo">ActoKids</Link>
                    { links }
                </div>
            </nav>
        </div>
    )
}

export default Navbar