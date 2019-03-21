import React from 'react'
import EventSummary from './EventSummary'

// Filled with EventSummary.js items
// props comes from Dashboard.js but we are only passing
// an array of {events} objects into this UI component


const EventList = ({events}) => {

    console.log(events.length);


    return (

        
            /* checking to see if events exist then mapping them */
            /* Mapping events means that each individual event can be
                read by EventSummary.js */

        <div className="event-list section">




    

                { events.length > 0 ?
                
            events && events.map(event => {
                    return (
                        <div>
                            <EventSummary event={event} key={events.event_id}/>                   
                        </div>
                    )
                
            })
             
            : 

            <p>There are no events, please add an event</p>

        }

            
        </div>


        
    )
}

export default EventList