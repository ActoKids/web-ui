import React, { Component } from 'react'
import { API } from 'aws-amplify';
import Options from './Options'
import EventList from '../events/EventList'

import { Redirect } from 'react-router-dom'; 

class Dashboard extends Component {
    // Constructor is repsonbile for setting up props and setting initial state
    constructor(props) {
        //pass props to the parent component
        super(props);
        // State needed
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
                });
            })
    }

    componentDidMount() {
        this.getEvents();
    }

    render() {
        const eventInfo = this.state.events;

        const auth = this.props.isAuthenticated;

        {/*Check if the user is already authicated 
            if is not, then redirect to sign in page*/}
        if(!auth) return <Redirect to='/' />

        return (
            // passing the state of this dashboard to EventList.js
            // as props
            <div className="container">
                <h3>Dashboard</h3>
                
                <Options />               
                <EventList events={eventInfo} key={eventInfo.event_id} />            
            </div>  
        )
    }
}

export default Dashboard