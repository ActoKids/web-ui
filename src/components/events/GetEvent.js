import React, {Component } from 'react';


export default class getEvents extends Component{
  state = {
    isLoading: true,
    users: [],
    error: null
  }

componentDidMount() {
    // Where we're fetching data from
    fetch(`https://api-zakb.2edusite.com/v1/v1/events`)
      // We get the API response and receive data in JSON format...
      .then(response => response.json())
      // ...then we update the users state
      .then(data =>
        this.setState({
          users: data.Items,
          isLoading: false,
        })
      )
      // Catch any errors we hit and update the app
      .catch(error => this.setState({ error, isLoading: false }));
  }


render() {
  const { isLoading, users, error } = this.state;
    return (
        <div className="container">
            <React.Fragment>
                <h3>Fetching Data from remote API</h3>
               
            {error ? <p>{error.message}</p> : null}
            {!isLoading ? (
                users.map(user => {
                const{id, contact_name, description, contact_email, location_address } = user;
                return (


                    // <div key={id}>
                    /* <p>Name: {contact_name}</p>
                    <p>Description: {description}</p>
                    <p>Email Address: {contact_email}</p>
                    <hr /> */
                 
          <div key={id}>

              <div class="row">
              <div class="col s12">
                <div class="card blue-grey darken-1">
                  <div class="card-content white-text">
                    <span class="card-title">{contact_name}</span>
                    <p><b>Description:</b> {description}</p>
                    <p><b>Location:</b> {location_address}</p>
                    <p><b>Contact Email:</b> {contact_email}</p>
                  </div>
                  {/* <div class="card-action">
                    <a href="#">This is a link</a>
                    <a href="#">This is a link</a>
                  </div> */}
                </div>
              </div>
              </div>

          </div>
                










                );
                })
            // If there is a delay in data, let's let the user know it's loading
            ) : (
                <h3>Loading...</h3>
            )}

            </React.Fragment>
      </div>

    );
}
}
