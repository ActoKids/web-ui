import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'

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
      
                   <img src={event.picture_url}  width="50" height="50"/>

                    <span className="card-title">{event.event_name} at: {event.location_address}</span>
                    <p>Posted By {event.user_name}</p>
                    <Moment format="h:mm a - MM/DD/YYYY">{event.start_date_time}</Moment>
                    <p className="grey-text">Something Else Here</p>
                </div>
            </div>
        </Link>
    )
}

export default EventSummary 