import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'


const Navbar = (props) => {

    console.log("Navbar props.props.isAuthenticated", props.props.isAuthenticated)

    // const auth = props.props.isAuthenticated

    // const links = auth ? <SignedInLinks /> : <SignedOutLinks />

    return (
        // <div className="navbar-fixed">
        //     <nav className="nav-wrapper red darken-1">
        //         <div className="container">
        //             <Link to='/' className="brand-logo">ActoKids</Link>
        //             {links}
        //         </div>
        //     </nav>
        // </div>


         <div className="navbar-fixed">
            <nav className="nav-wrapper red darken-1">
                <div className="container">
                    {/* <Link to='/' className="brand-logo">ActoKids</Link> */}
                    <a href="#" className="brand-logo">ActoKids</a>
                </div>

                <div className="container right-align">{

					props.props.isAuthenticated ?

                      <ul className="right">
                        <li><NavLink to='/create'>Create Event</NavLink></li>
                        <li><a href="#" onClick={props.handleLogout}>Sign Out</a></li>
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
