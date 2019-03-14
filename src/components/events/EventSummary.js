import React from 'react'
import { Link } from 'react-router-dom'

// This is to make the eventss modular. 
// When imported into EventsList.js <EventsSummary /> can be called

// Creates the cards that are seen on the dashboard, data comes from eventsReducer
const EventSummary = ({event}) => {
    console.log(event)
    
    return (
        <Link to={{pathname: '/events/' + event.event_id, state: {event: event}}}>
            <div className="card horizontal hoverable events-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{event.event_name} at: {event.location_name}</span>
                    <p>Posted By {event.contact_name}</p>
                    <p className="grey-text">Ages: {event.min_age} - {event.max_age}</p>
                </div>
            </div>
        </Link>
    )
}

export default EventSummary 