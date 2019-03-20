import React, { Component } from "react";
import { API } from "aws-amplify";
import { connect } from "react-redux";

import Options from "./Options";
import EventList from "../events/EventList";
import { saveEvents } from "../../store/actions/eventActions";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  // Calling AWS API get() method. This method takes in
  // two parameters: the API name "events" and the API URL "/events"
  // Then we set the state of the component to the API's response
  getEvents() {
    API.get("events", "/events").then(response => {
      if (this.props.saveEvents) {
        this.props.saveEvents(response.Items);
      }
    });
  }

  componentDidMount() {
    this.getEvents();
  }

  render() {
    const eventInfo = this.props.events;
    const auth = this.props.isAuthenticated;

    /*Check if the user is already authicated 
            if is not, then redirect to sign in page*/
    if (!auth) return <Redirect to="/" />;

    return (
      // passing the state of this dashboard to EventList.js
      // as props
      <div className="container">
        <h3>Dashboard</h3>
        <EventList Options={Options} events={eventInfo} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    events: state.event.events
  };
}

const mapDispatchToProps = {
  saveEvents
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
