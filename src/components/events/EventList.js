import React from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ConfirmedEvents from './ConfirmedEvents';
import { withRouter } from "react-router-dom";
import { API } from "aws-amplify";


import { deleteEvents } from "../../store/actions/eventActions";
import EventSummary from './EventSummary'


// Filled with EventSummary.js items
// props comes from Dashboard.js but we are only passing
// an array of {events} objects into this UI component


const EventList = ({events}) => {
    return (
        <div className="event-list section">
            {/* checking to see if events exist then mapping them */}
            {/* Mapping events means that each individual event can be
                read by EventSummary.js */}
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
    )
}

export default EventList