import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'


// this seems to be loading every single event right now. Not good
const EventDetails = (props) => {
    console.log('details', props);
    const { event } = props;
    //const id = props.match.params.id;
    if (event) {
        return (
            <div className="container section event-details">
                <div className="card">
                    <div className="card-content">
                        <span className="card-title">{ event.title } = {event.id }</span>
                        <p>scooby doo</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted By Nerd</div>
                        <div>300000</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container center">
                <p>Loading Event...</p>
            </div>
        )
    }     
}

// I see the object where state is logged, the object contains the event
// array with the events inside, with all of the data I want. For some
// reason I still cannot access this data, which is what I'm working on.
const mapStateToProps = (state, ownProps) => {
    console.log(state);
    const id = ownProps.match.params.id;
    const events = '../../json/MOCK_DATA.json';
    const event = events ? events[id] : null
    return {
        event: event,
    }
    
}
export default compose(connect(mapStateToProps))(EventDetails)