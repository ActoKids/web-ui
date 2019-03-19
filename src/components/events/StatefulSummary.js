import React, { Component } from 'react'
import Amplify, { API } from 'aws-amplify'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'

class StatefulSummary extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            ...props
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit(e) {
        const newState = {
            body: {
                "event_id": this.state.event.event_id
            }
        }
        API.put("events", `/events/${this.state.event.event_id}`, newState)
            .then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error.response)
            });

        e.preventDefault();
    }

    render() {
        console.log(this.state.event.event_status)
        const event = this.state.event
        return (
            <div className="card horizontal hoverable events-summary">
            <label className="boxStyles">
                <input type="checkbox" value={event.event_status} id="event_status" />
                <span></span>
            </label>
            <div className="card-stacked">
                <Link to={{pathname: '/events/' + event.event_id, state: {event: event}}}>
                    <div className="card-content grey-text text-darken-3">
                        <span className="card-title">{event.event_name}</span>
                        <div className="card-action">
                            <p>Posted By {event.user_name} at <Moment format="h:mm A">{event.created_timestamp}</Moment> on <Moment format="MM/DD/YYYY">{event.created_timestamp}</Moment></p>
                            <p>Status: {event.event_status}</p>
                            <p className="grey-text">Hosted By {event.org_name}</p>
                        </div>
                    </div>
                </Link>  
            </div>
            <div className="card-image">
            </div>      
        </div>
        )
    }
}

export default StatefulSummary