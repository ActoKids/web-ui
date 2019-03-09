import React, {Component } from 'react';


export default class getEvents extends Component{
  state = {
    isLoading: true,
    users: [],
    error: null
  }

componentDidMount() {
    // Where we're fetching data from
    fetch(`https://api.2edusite.com/v1/events`)
    //https://api.2edusite.com/v1/events
    //https://api-zakb.2edusite.com/v1/events
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

              {/* <form>
                  <div class="input-field">
                    <input id="search" type="search" required />
                    <label for="search"><i class="material-icons">search</i></label>
                  </div>
            </form> */}

            {error ? <p>{error.message}</p> : null}
            {!isLoading ? (
                users.map(user => {
                const{event_id, contact_name, description, contact_email, location_address } = user;
        return (
                   
          <div key={event_id}>

              <div className ="row">
              <div className ="col s12">
                <div className ="card blue-grey darken-1">
                  <div className="card-content white-text">
                    <span className="card-title">{contact_name}</span>
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
                  <div className = "preloader-wrapper big active">
                    <div className = "spinner-layer spinner-blue-only">
                        <div className = "circle-clipper left">
                          <div className = "circle"></div>
                        </div>
                        
                        <div className = "gap-patch">
                          <div className = "circle"></div>
                        </div>
                        
                        <div className = "circle-clipper right">
                          <div className = "circle"></div>
                        </div>

                      </div>
                    </div>
              )}
            </React.Fragment>
      </div>
  

    );
  }
}


