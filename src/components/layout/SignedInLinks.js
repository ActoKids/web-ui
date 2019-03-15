import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = (props) => {
    return (
        <ul className="right">
            <li><NavLink to='/create'>Create Event</NavLink></li>
            <li><NavLink to='/'>Sign Out</NavLink></li>
        </ul>
    )
}

export default SignedInLinks
