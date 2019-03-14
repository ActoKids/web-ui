import React from 'react'

const EventDetails = (props) => {
    const event = props.location.state.event;
    return (
        <div className="container section">
            <h4>Event Information</h4>
            <div className="card">
                <div className="card-content">
                    <span className="card-title">{event.event_name}</span>
                    <p>{event.description}</p>
                    <p>Activity Type - {event.activity_type}</p>
                    <p>Location - {event.location_name}, {event.location_address}</p>
                    <p>Dates & Times - {event.start_date_time} to {event.end_date_time}</p>
                    <p>Frequency - {event.frequency}</p>
                    <p>Ages - {event.min_age} to {event.max_age}</p>
                    <p>Price - ${event.cost}</p>
                    <p>Disibilities - {event.disability_types}</p>
                </div>
            </div>
            <h4>Contact Information</h4>
            <div className="card">
                <div className="card-content">
                    <span className="card-title">{event.org_name}</span>
                    <p>Contact Name - {event.contact_name}</p>
                    <p>Contact Phone - {event.contact_phone}</p>
                    <p>Contact Email - {event.contact_email}</p>
                </div>
            </div>
        </div>
    )
}

export default EventDetails

