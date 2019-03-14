import React from 'react'

const EventDetails = (props) => {
    const event = props.location.state.event;
    return (
        <div className="container section event-details">
            <div className="card">
                <div className="card-content">
                    <span className="card-title">Event Title - {event.event_name}</span>
                    <p>{event.description}</p>
                </div>
            </div>
        </div>
    )
}

export default EventDetails

