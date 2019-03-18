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
                <div className="card-stacked">
                    <div className="card-content grey-text text-darken-3">
                        <span className="card-title valign-wrapper"><img src={event.picture_url} width="30" height="30" /> {event.event_name}</span>
                        <div className="card-action">
                            <p>Posted By {event.user_name}</p>
                            <Moment format="h:mm a - MM/DD/YYYY">{event.start_date_time}</Moment>
                            <p className="grey-text">Hosted By {event.org_name}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default EventSummary 