import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createEvent } from '../../store/actions/eventActions'

class CreateEvent extends Component {
    // called below in the form
    state = {
        title:'',
        activity_type: '',
        description:'',
        org_name: '',
        location_name: '',
        location_address: '',
        contact_name: '',
        contact_phone: '',
        contact_email: '',
        start_date_time: '',
        end_date_time: '',
        frequency: '',
        cost: '',
        picture_url: '',
        min_age: '',
        max_age: '',
        disability_types: '',
        status: '',
        approver: ''
    }

    handleChange = (e) => {
        this.setState({
            // targets the id and its value
            [e.target.id]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        // passes the event into the function at bottom which begins the dispatch
        // on createEvent and runs eventActions.js functions
        this.props.createEvent(this.state)
    }

    render() {
        return (
            <div className="container">
            <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create A New Event</h5>
                    <div className="input-field">
                        <label htmlFor="text">Event Title</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="text">Activity Type</label>
                        <input type="text" id="activity_type" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Event Description</label>
                        <textarea id="description" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <label htmlFor="text">Name of Organization</label>
                        <input type="text" id="org_name" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="text">Location</label>
                        <input type="text" id="location_name" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="text">Location Address</label>
                        <input type="text" id="location_address" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="text">Contact Name</label>
                        <input type="text" id="contact_name" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="text">Contact Phone Number</label>
                        <input type="text" id="contact_phone" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="text">Contact Email Address</label>
                        <input type="text" id="contact_email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="text">Event Start Date and Time</label>
                        <input type="text" id="start_date_time" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="text">Event End Date and Time</label>
                        <input type="text" id="end_date_time" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="text">Event Frequency</label>
                        <input type="text" id="frequency" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="text">Event Price</label>
                        <input type="text" id="cost" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="text">Minimum Participant Age</label>
                        <input type="text" id="min_age" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="text">Maximum Participant Age</label>
                        <input type="text" id="max_age" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="text">Disability Types</label>
                        <input type="text" id="disability_types" onChange={this.handleChange} />
                    </div>
                    <div className="input">
                        <button className="btn pink lighten-1 z-depth-0">Create Event</button>
                    </div>
                </form>
            </div>
        )
    }
}

// dispatches the action creator
const mapDispatchToProps = (dispatch) => {
    // adds the createEvent object to props
    return {
        // call the event action creator in eventActions.js
        createEvent: (event) => dispatch(createEvent(event))
    }
}

export default connect(null, mapDispatchToProps)(CreateEvent)