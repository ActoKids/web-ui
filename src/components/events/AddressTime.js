import React, { Component } from "react";
import { connect } from "react-redux";
import { createEvent } from "../../store/actions/eventActions";

//import M from "materialize-css";

class AddressTime extends Component {
  //componentDidMount() {
  // Auto initialize all the things!
  //M.AutoInit();
  //}

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
    let data = this.props.values;
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  handleSelect(e) {
    var options = e.target.options;
    var length = options.length;
    var i;
    var arr = [];
    for (i = 0; i < length; i++) {
      var str = options[i].key;
      arr.push(str);
    }
    this.setState({ disability_type: arr });
  }

  render() {
    const { values, handleChange, handleDate, handleArray } = this.props;

    return (
      <div className="container">
        <form className="white">
          <h5 className="grey-text text-darken-3">Address & Time</h5>
          <div className="input-field">
            <label htmlFor="text">Location City</label>
            <input
              type="text"
              defaultValue={values.location_name}
              onChange={handleChange("location_name")}
            />
          </div>
          <div className="input-field">
            <label htmlFor="text">Location Address</label>
            <input
              type="text"
              defaultValue={values.location_address}
              onChange={handleChange("location_address")}
            />
          </div>

          <div className="row">
            <span className="grey-text">Start Date & Time</span>
            <input
              type="date"
              className="datetimepicker"
              type="datetime-local"
              defaultValue={values.start_date_time}
              onChange={handleDate("start_date_time")}
            />
          </div>
          <div className="row">
            <span className="grey-text">End Date & Time</span>
            <input
              type="date"
              className="datetimepicker"
              type="datetime-local"
              defaultValue={values.end_date_time}
              onChange={handleDate("end_date_time")}
            />
          </div>

          <button
            class="btn red lighten-1 z-depth-0"
            type="submit"
            name="action"
            onClick={this.continue}
          >
            continue
          </button>

          <button
            class="btn red lighten-1 z-depth-0"
            name="action"
            onClick={this.back}
            style={{ marginLeft: 10 }}
          >
            back
          </button>
        </form>
      </div>
    );
  }
}

// dispatches the action creator
const mapDispatchToProps = dispatch => {
  // adds the createEvent object to props
  return {
    // call the event action creator in eventActions.js
    createEvent: event => dispatch(createEvent(event))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddressTime);
