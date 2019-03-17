import React from 'react'
import { NavLink, Link } from 'react-router-dom'



const SignedInLinks = (props) => {

    return (
        <ul className="right">
            <li><NavLink to='/create'>Create Event</NavLink></li>
            {/* <li><NavLink to='/'>Sign Out</NavLink></li> */}
            {/* <li><NavLink to='/' onClick={props.handleLogout}>Sign Out</NavLink></li> */}

            <li><a onClick={props.handleLogout}>Sign Out</a></li>
            
        </ul>
    )
}

export default SignedInLinks
