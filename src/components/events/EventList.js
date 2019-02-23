import React from 'react'
import EventSummary from './EventSummary'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


// Filled with EventSummary.js items
const EventList = ({events}) => {
    return (
        <div className="event-list section">
            {/* checking to see if an event exists */}
            { events && events.map(event => {
                
                return (
                    /* passing the event down as a prop into EventDetails */
                    /* <Link to={'/event/' + event.id}> */
                        <EventSummary event={event} key={event.id} />
                    /* </Link> */
                )
            }) }
        </div>
    )
}

// maps the state from redux store to props
const mapStateToProps = (state) => {
    return {
        // redux state, event from event property of state, events from initState
        events: state.event.events
    }
}

export default connect(mapStateToProps)(EventList)