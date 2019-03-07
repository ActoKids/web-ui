import React from 'react'

// This is to make the events modular. 
// When imported into EventList.js <EventSummary /> can be called

// Creates the cards that are seen on the dashboard, data comes from eventReducer
const EventSummary = ({event}) => {
    return (
        <div className="card horizontal hoverable event-summary">
            <div className="valign-wrapper card-content">
                <label>
                    <input className="event-checkbox" type="checkbox" />
                    <span></span>
                </label>
            </div>
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{event.title} at {event.location_name}</span>
                <p>Posted By {event.contact_name}</p>
                <p className="grey-text">{event.start_date_time}</p>
            </div>
            {/* <div className="card-image"> 
                <img src={event.picture_url} alt=""/>
            </div> */}
        </div>
    )
}

export default EventSummary