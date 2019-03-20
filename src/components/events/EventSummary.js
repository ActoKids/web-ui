import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";

// The information that is displayed on each card in the
// EventList on the Dashboard. Props come from EventList which
// have been mapped to each individual event, rather than an
// array of every event
const EventSummary = ({ event, onClick, onSelect, selected }) => {
  // console.log(event)

  const imgStyles = {
    "padding-top": "15px",
    "padding-right": "20px",
    width: "75px"
  };

  return (
    <div className="card horizontal hoverable events-summary">
      <label className="boxStyles">
        <input
          type="checkbox"
          className="event-checbox filled-in"
          checked={selected}
          onChange={onSelect}
        />
        <span />
      </label>
      <div className="card-stacked">
        <Link
          to={{
            pathname: "/events/" + event.event_id,
            state: { event: event }
          }}
        >
          <div
            className="card-content grey-text text-darken-3"
            onClick={onClick}
            style={{ cursor: "pointer" }}
          >
            <span className="card-title">{event.event_name}</span>
            <div className="card-action">
              <p>
                Posted By {event.user_name} at{" "}
                <Moment format="h:mm A">{event.created_timestamp}</Moment> on{" "}
                <Moment format="MM/DD/YYYY">{event.created_timestamp}</Moment>
              </p>
              <p>Status: {event.event_status}</p>
              <p className="grey-text">Hosted By {event.org_name}</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="card-image">
        <img src={event.picture_url} alt={event.event_name} style={imgStyles} />
      </div>
    </div>
  );
};

EventSummary.propTypes = {
  onClick: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.bool,
  event: PropTypes.shape({
    title: PropTypes.string,
    start_data_time: PropTypes.string,
    contact_name: PropTypes.string,
    location_name: PropTypes.string
  })
};
export default EventSummary;
