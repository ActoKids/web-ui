import React, { Component } from 'react'
import EventList from '../events/EventList'
import { connect } from 'react-redux'
import Options from './Options'

class Dashboard extends Component {
    render() {
        //console.log(this.props)
        // destructuring events props
        const {events} = this.props;

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m12">
                        <h3>Dashboard</h3>
                        <Options />
                        {/* event data from EventSummary.js */}
                        <EventList events={events} />
                    </div>
                </div>
            </div>
        )
    }
}

// maps the state from redux store to props
const mapStateToProps = (state) => {
    return {
        // redux state, event from event property of state, events from initState in eventReducer
        events: state.event.events
    }
}

export default connect(mapStateToProps)(Dashboard)
