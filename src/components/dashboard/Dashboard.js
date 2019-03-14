import React, { Component } from 'react'
import { API } from 'aws-amplify';
import Options from './Options'
import EventList from '../events/EventList'

// This component now acts as an almost functioning dashboard.
// Everything is called from the API and is easily customizable.
// The event_id is taken in as a key in order to pass on an event's
// props to another component.
class Dashboard extends Component {
    // Setting the state
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            isLoading: true
        };
    }

    // Calling AWS API get() method. This method takes in
    // two parameters: the API name "events" and the API URL "/events"
    // Then we set the state of the component to the API's response
    getEvents() {
        API.get("events", "/events")
            .then(response => {
                this.setState({
                    events: response.Items
                })
            })
    }

    componentDidMount() {
        this.getEvents();
    }

    render() {

        // creating an array variable to store the state in
        const eventInfo = this.state.events;
        return (
            
            <div className="container">
                <h3>Dashboard</h3>
                <Options />
                
                <EventList events={eventInfo} key={eventInfo.event_id} />            
            </div>  
        )
    }
}


export default Dashboard