import React from "react";
import { Link } from 'react-router-dom'; 

const NotFound = () =>{  

  return(

    <div className="container">
      <div className="not-found-view">
        <h4>404 - Page not found</h4>

        <p>Don’t worry, we’ll help you get where you need to go.
           Try searching again or <Link to="/">go back to home</Link>.</p>
    
    </div>
  </div>
  )

};

  export default NotFound;
