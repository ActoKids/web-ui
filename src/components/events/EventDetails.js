import React from 'react'
import { Link } from 'react-router-dom'
var moment = require('moment');
moment().format();

// Directed to this page when clicking on an event in the dashboard
// This is a stateless UI component, which gets its props from EventSummary.js
// This is to ensure that only one event is selected, which matches the unique
// event_id associated with it.
const EventDetails = (props) => {
    const event = props.location.state.event;


    return (



        <div className="container section">

            
            {/* header section with links to options */}
            <h4>
                Event Information
                <Link className="right" to={{pathname: '/update', state: {event:event}}}>
                    <button className="option-btn btn-floating btn-small waves-effect waves-light yellow">
                        <i className="small material-icons">edit</i>
                    </button>
                </Link>
                <Link className="right" to={'/'}>
                    <button className="option-btn btn-floating btn-small waves-effect waves-light red">
                        <i className="small material-icons">delete</i>
                    </button>
                </Link>
            </h4>

            {/* event information section */}
            <div className="card">
                <div className="card-content">
                    <span className="card-title">{event.event_name}</span>
                    <a href={event.event_link}>Event Link</a><hr/>

                    <img src={event.picture_url} width="200" height="200"/>

                    <p>{event.description}</p>
                    <p>Activity Type - {event.activity_type}</p>
                    <p>Location - {event.location_name}, {event.location_address}</p>
                    <p>Dates & Times - {moment(event.start_date_time).format('MMMM Do YYYY, h:mm A')} to {moment(event.end_date_time).format('MMMM Do YYYY, h:mm A')}</p>
                    <p>Frequency - {event.frequency}</p>
                    <p>Ages - {event.min_age} to {event.max_age}</p>
                    <p>Price - ${event.cost}</p>
                    <p>Disibilities - {event.disability_types}</p>
                </div>
            </div>

            {/* contact information section */}
            <h4>Contact Information</h4>
            <div className="card">
                <div className="card-content">
                    <span className="card-title">Organization - {event.org_name}</span>
                    <p>Contact Name - {event.contact_name}</p>
                    <p>Contact Phone - {event.contact_phone}</p>
                    <p>Contact Email - {event.contact_email}</p>                    
                </div>
            </div>
        </div>
    )
}

export default EventDetails

