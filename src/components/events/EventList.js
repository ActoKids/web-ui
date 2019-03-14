import React from 'react'
import EventSummary from './EventSummary'
import { Link } from 'react-router-dom'

// Filled with EventSummary.js items
const EventList = ({events}) => {
    //console.log(events)
    return (
        <div className="event-list section">
            {events && events.map(event => {
                return (
                    <div>
                        {/* <form action="#">
                            <label>
                                <input type="checkbox" />
                                <span></span>
                            </label>
                        </form> */}
                        <EventSummary event={event} key={events.event_id}/>                   
                    </div>
                )
            })}         
        </div>
    )
}

export default EventList