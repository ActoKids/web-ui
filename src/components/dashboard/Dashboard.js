import React, { Component } from 'react'
import { API } from 'aws-amplify';
import Options from './Options'
import EventList from '../events/EventList'
import Fuse from 'fuse.js';

import { Redirect } from 'react-router-dom'; 

//users to events 
//user to event

class Dashboard extends Component {
    // Constructor is repsonbile for setting up props and setting initial state
    constructor(props) {
        //pass props to the parent component
        super(props);
        // State needed
        this.state = {
            events: [],
            isLoading: true,
            filteredEvents: [],
        };
        this.filterFunction = this.filterFunction.bind(this);
        this.pageReload = this.pageReload.bind(this);
    }

    // Calling AWS API get() method. This method takes in
    // two parameters: the API name "events" and the API URL "/events"
    // Then we set the state of the component to the API's response
    getEvents() {
        API.get("events", "/events")
            .then(response => {
                this.setState({
                    events: response.Items,
                    filteredEvents: response.Items,
                });
            })
    }

    componentDidMount() {
        this.getEvents();
    }

    filterFunction(event) {
  
  //window.location.reload();
      let filter = event.target.value;

      //invoke array below only if you revert from fuse to the for loop of the filter()
      //let newArr = [''];

      let events = this.state.events;
      let disabilityTypes;
      var options = {

        //these keys are the objects we will scan through. To add a new field
        //  simply add , 'object']. Remember the more items you filter through
        //  the longer it takes, therefore negativly impacting performance
        keys: ['activity_type', 'disability_types']
      };//end filterFunction

      //invoke the fuse library
      let fuse = new Fuse(events, options);
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
        filteredEvents: fuseResult,
      })
    }
    
//this is the pink X below the search bar. It clears any filters that a
//  user has placed, and reloads the events while refreshing data from API
    pageReload() {
        window.location.reload();
    }

    render() {
        const eventInfo = this.state.filteredEvents;

        const auth = this.props.isAuthenticated;

        {/*Check if the user is already authicated 
            if is not, then redirect to sign in page*/}

            //do not change to '/get' until you know the user exists first
        if(!auth) return <Redirect to='/' />

        return (
            // passing the state of this dashboard to EventList.js
            // as props
                
            <div className="container">
                <h3>Dashboard</h3>
                <Options />         

                {/* insert filter/search bar here */}
                <div class="input-field">
                    <input id="search" type="search" onChange={(e) => this.filterFunction(e)} />
                    <label for="search"><i class="material-icons">search</i></label>
                </div>
                <div class="input-field">
                         <button className="btn pink lighten-1" onClick={this.pageReload}>
                         <i class="material-icons">cancel</i>
                          </button>
                        </div>
                <EventList events={eventInfo} key={eventInfo.event_id} />
            </div>            
        )
    }
}

export default Dashboard