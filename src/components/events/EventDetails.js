import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'

// Directed to this page when clicking on an event in the dashboard
// This is a stateless UI component, which gets its props from EventSummary.js
// This is to ensure that only one event is selected, which matches the unique
// event_id associated with it.
const EventDetails = (props) => {
    const event = props.location.state.event;
    const styles = {
        'padding': '10px',
    }
    return (
        <div className="container">
            <h4 className="center-align">Event Information</h4>
            <div className="row">
                <div className="col s3"></div>
                <div className="col s6">
                    <div className="card sticky-action">
                        
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src={event.picture_url} style={styles} />
                        </div>

                        {/* Shows before card is opened */}
                        <div className="card-content">
                            <span className="card-title activator">{event.event_name} - <b>Status: {event.event_status}</b><i class="material-icons right">more_vert</i></span>
                            <p className="grey-text">Posted at <Moment format="h:mm a - MM/DD/YYYY">{event.created_timestamp}</Moment></p>
                        </div>

                        {/* event_link (always displayed) */}
                        <div className="card-action">
                            <a href={event.event_link}>Event Link</a>
                        </div>

                        {/* Shows when card is open */}
                        <div className="card-reveal">
                            <span className="card-title activator">{event.event_name} - <b>Status: {event.event_status}</b><i class="material-icons right">close</i></span>
                            
                            <div className="section">
                                <p>{event.description}</p>
                            </div>
                            <div className="divider"></div>
                            <div className="section">
                                <strong>Organization</strong>
                                <p>{event.org_name}</p>
                            </div>
                            <div className="divider"></div>
                            <div className="section">
                                <strong>Location</strong>
                                <p>{event.location_address}</p>
                            </div>
                            <div className="divider"></div>
                            <div className="section">
                                <strong>Event Date & Time</strong>
                                <p><Moment format="MM/DD/YYYY - h:mm a">{event.start_date_time}</Moment></p>
                            </div>
                            <div className="divider"></div>
                            <div className="section">
                                <strong>Activity Type</strong>
                                <p>{event.activity_type}</p>
                            </div>
                            <div className="divider"></div>
                            <div className="section">
                                <strong>Ages</strong>
                                <p>{event.min_age} to {event.max_age}</p>
                            </div>
                            <div className="divider"></div>
                            <div className="section">
                                <strong>Price</strong>
                                <p>{event.cost}</p>
                            </div>
                            <div className="divider"></div>
                            <div className="section">
                                <strong>Frequency</strong>
                                <p>{event.frequency}</p>
                            </div>
                            <div className="divider"></div>
                            <div className="section">
                                <strong>Disability Types</strong>
                                <p>{event.disability_types}</p>
                            </div>
                            <div className="divider"></div>
                            <div className="section">
                                <strong>Contact Information</strong>
                                <p>Created by {event.contact_name}</p>
                                <p>{event.contact_email}</p>
                                <p>{event.contact_phone}</p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default EventDetails
