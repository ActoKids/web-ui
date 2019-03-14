import React from 'react'
import EventSummary from './EventSummary'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'



// Filled with EventSummary.js items
const EventList = ({events}) => {
    console.log(events)
    return (
        <div className="event-list section">
            {events && events.map(event => {
                return (
                    <Link to={'/events/' + event.event_id}>
                        <EventSummary event={event} key={events.event_id}/>
                    </Link>
                )
            })}         
        </div>
    )
}

export default EventList