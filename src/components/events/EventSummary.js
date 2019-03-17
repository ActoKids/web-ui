import React from 'react'
import { Link } from 'react-router-dom'

// The information that is displayed on each card in the
// EventList on the Dashboard. Props come from EventList which
// have been mapped to each individual event, rather than an
// array of every event
const EventSummary = ({event}) => {
    // console.log(event) 
    return (
        <Link to={{pathname: '/events/' + event.event_id, state: {event: event}}}>


            <div className="card horizontal hoverable events-summary">
                <div className="card-content grey-text text-darken-3">

               
                    <img src={event.picture_url} width="50" height="50"/>

                    <span className="card-title">{event.event_name} at: {event.location_name}</span>
                    <p>Posted By {event.contact_name}</p>
                    <p className="grey-text">Ages: {event.min_age} - {event.max_age}</p>
                </div>
               
            </div>
        </Link>
    )
}

export default EventSummary 