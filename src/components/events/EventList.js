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

// Filled with EventSummary.js items
class EventList extends Component {
  static propTypes = {
    deleteEvents: PropTypes.func.isRequired,
    Options: PropTypes.func,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired,
    events: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      selectedItemIds: []
    };
  }

  /**
   * Go to event page on click
   */
  handleOnClickEvent = itemId => () => {
    this.props.history.push(`/event/${itemId}`);
  };

  /**
   * Handle select to check or uncheck event
   */
  handleOnSelectEvent = itemId => event => {
    const targetCheck = event.target.checked;

    this.setState({
      selectedItemIds: targetCheck
        ? [...this.state.selectedItemIds, itemId]
        : this.state.selectedItemIds.filter(id => id !== itemId)
    });
  };

  /**
   * Delete events
   */
  handleDeleteItems = () => {
    const { selectedItemIds } = this.state;
    if (selectedItemIds && selectedItemIds.length > 0) {
      // dispatch an action to remove selected items
      if (this.props.deleteEvents) {
        this.props.deleteEvents(selectedItemIds);
      }

      const newStateOfSelectedIds = [...selectedItemIds];

      // Iterate over selected IDs and delete them from API
      selectedItemIds.forEach((id, i) => {
        API.del("events", `/events/${id}`);

        newStateOfSelectedIds.splice(i, 1);

        return null;
      });

      this.setState({
        selectedItemIds: newStateOfSelectedIds
      });
    }
    return null;
  };

  handleEditItems = () => {
    return null;
  };

  handleSaveItems = () => {
    return null;
  };

  handleGetData = () => {
    return null;
  };
render() {
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
}

// Maps the state from redux store to props
const mapStateToProps = state => {
  return {
    // redux state, event from event property of state, events from initState
    events: state.event.events
  };
};

const mapDispatchToProps = {
  deleteEvents
};

export default EventList