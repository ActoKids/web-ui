import React from 'react'
import EventSummary from './EventSummary'
import ConfirmedEvents from './ConfirmedEvents';

// Filled with EventSummary.js items
// props comes from Dashboard.js but we are only passing
// an array of {events} objects into this UI component


const EventList = ({events}) => {

    console.log("event length: ",events.length );


    return (

        <div className="event-list section">{
                events.length > 1 || events.length > 0 ? 

            /* checking to see if events exist then mapping them */
            /* Mapping events means that each individual event can be
                read by EventSummary.js */

            <div>
            {events && events.map(event => {
                if (event.event_status === "pending") {
                    return (
                        <div>
                            <EventSummary event={event} key={events.event_id}/>                   
                        </div>
                    )
                } 
                   
            })}
            {events && events.map(event => {
                if (event.event_status === "confirmed") {
                    return (
                        <div>
                            <ConfirmedEvents event={event} key={events.event_id}/>                   
                        </div>
                    )
                } 
            })}  

            </div>

            : 

            <div className="section">
                <p>Event List is empty, please create a new event</p>
            </div>
            
        }</div>
    )
}

export default EventList