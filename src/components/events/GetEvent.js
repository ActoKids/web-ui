import React, {Component } from 'react';
import Fuse from 'fuse.js';


export default class getEvents extends Component{
  constructor(props) {

  super(props)
  this.state = {
    isLoading: true,
    users: [],
    filteredUsers: [],
    error: null
  }

  /* This controls the static view of the events on the dashboard
  //  otherwise, the list disappears until something is typed in 
  //  the search bar
  this.viewabilityConfig = {
    waitForInteraction: true,
    viewAreaCoveragePercentThreshold: 95
    
} */

  this.filterFunction = this.filterFunction.bind(this);
  this.pageReload = this.pageReload.bind(this);
}

//this is the pink X below the search bar. It clears any filters that a
//  user has placed, and reloads the events while refreshing data from API
pageReload() {
  window.location.reload();
}
 
//Dashboard filter/search function to scan through events
filterFunction(event) {
  
  //window.location.reload();
  let filter = event.target.value;
  
  //invoke array below only if you revert from fuse to the for loop of the filter()
  //let newArr = [''];

  let users = this.state.users;
  let disabilityTypes;
  var options = {
    
    //these keys are the objects we will scan through. To add a new field
    //  simply add , 'object']. Remember the more items you filter through
    //  the longer it takes, therefore negativly impacting performance
    keys: ['activity_type', 'disability_types']
  };//end filterFunction
  
  //invoke the fuse library
  let fuse = new Fuse(users, options);
  let fuseResult = fuse.search(filter);
 
  //If you prefer NOT to use fuse for your filter you can utilize this for loop
  //  to search through the list of events
   /*  for(let i = 0; i < this.state.users.length; i += 1) {
      if(users[i].disability_types) {
        disabilityTypes = users[i].disability_types;
      }
      if(users[i].max_age >= filter && users[i].min_age <= filter) {
        newArr.push(users[i]);
      } else if(users[i].activity_type.toLowerCase().includes(filter.toLowerCase())) {
        newArr.push(users[i]);
      } else if(users[i].disability_types.includes(filter)) {
        newArr.push(users[i]);
      }
    } */
  this.setState({
    filteredUsers: fuseResult,
  })
}

componentDidMount() {
    // Where we're fetching data from
    fetch(`https://api.2edusite.com/v1/events`)
      // We get the API response and receive data in JSON format...
      .then(response => response.json())
      // ...then we update the users state
      .then(data => {
        console.log(data.Items, typeof data.Items, 'data')
        this.setState({
          users: data.Items,
          filteredUsers: data.Items,
          isLoading: false,
        })
      })
      // Catch any errors we hit and update the app
      .catch(error => this.setState({ error, isLoading: false }));
  }

render() {
  const { isLoading, users, error, filteredUsers } = this.state; 
    return (
        <div className="container">
            <React.Fragment>
                <h3>Events</h3>

              <form>
                  {/* materializecss Search bar */}
                  <div class="input-field">
                    <input id="search" type="search" onChange={(e) => this.filterFunction(e)} />
                    <label for="search"><i class="material-icons">search</i></label>
                  </div>
                  <div class="input-field">
                         <button className="btn pink lighten-1" onClick={this.pageReload}>
                         <i class="material-icons">cancel</i>
                          </button>
                        </div>
            </form>

            {error ? <p>{error.message}</p> : null}
            {!isLoading ? (
                filteredUsers.map(user => {
                const{id, contact_name, description, contact_email, location_address } = user;
        return (
                   
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
                  <div class = "preloader-wrapper big active">
                    <div class = "spinner-layer spinner-blue-only">
                        <div class = "circle-clipper left">
                          <div class = "circle"></div>
                        </div>
                        
                        <div class = "gap-patch">
                          <div class = "circle"></div>
                        </div>
                        
                        <div class = "circle-clipper right">
                          <div class = "circle"></div>
                        </div>

                      </div>
                    </div>
              )}
            </React.Fragment>
      </div>
    );
  }
}


