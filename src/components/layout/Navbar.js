import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = (props) => {
    return (
      
         <div className="navbar-fixed">
            <nav className="nav-wrapper red darken-1">    

                        {/**Check whether the user is authenticated
                            If is, link to the dashboard
                            else display link to sign in page */}  
                        <div className="container">{
                                props.props.isAuthenticated ?
                                    <Link to='/dashboard' className="brand-logo">ActoKids2</Link>
                                :
                                <Link to='/' className="brand-logo">ActoKids</Link>
                        }</div>

            
                {/*Check whether isAuthenticated is true: 
                    if it is true then display create and sign out buttons
                    else display sign up and sign in buttons*/}

                <div className="container right-align">{

					props.props.isAuthenticated ?

                      <ul className="right">
                        <li><NavLink to='/create'>Create Event</NavLink></li>
                        <li><a onClick={props.handleLogout}>Sign Out</a></li>
                   
                    </ul>
					:
					<ul className="right">
                        <li><NavLink to='/signup'>Sign Up</NavLink></li>
                        <li><NavLink to='/'>Sign In</NavLink></li>

                     </ul>

                    }
                </div>
            </nav>
		</div>
    )
}

export default Navbar
