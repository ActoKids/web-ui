import React from 'react'
import { connect } from 'react-redux'


// this seems to be loading every single event right now. Not good
const EventDetails = (props) => {
    console.log('details', props);

    const id = props.match.params.id;
    console.log(id);
        return (
            <div className="container section event-details">
                <div className="card horizontal">
                    <div className="card-content">
                        <span className="card-title">Event ID = {id}</span>
                        <p>scooby doo</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted By Nerd</div>
                        <div>300000</div>
                    </div>
                </div>
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

export default connect(mapStateToProps)(EventDetails)