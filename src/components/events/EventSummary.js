import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'

// The information that is displayed on each card in the
// EventList on the Dashboard. Props come from EventList which
// have been mapped to each individual event, rather than an
// array of every event
const EventSummary = ({event}) => {
    // console.log(event)

    const imgStyles = {
        'paddingTop': '15px',
        'paddingRight': '20px',
        'width': '75px',
    }

    return (
        <div className="card horizontal hoverable events-summary">
            <label className="boxStyles">
                <input type="checkbox"/>
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
                <img src={event.picture_url} alt="Org Picture" style={imgStyles} />
            </div>
        </div>
    )
}

export default EventSummary
