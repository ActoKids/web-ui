import React, { Component } from "react";
import { connect } from "react-redux";
import { createEvent } from "../../store/actions/eventActions";

class OrgInfo extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
    let data = this.props.values;
    console.log(data.disability_types);
    // remove the disability type when user unselect the checkbox
    var arr = data.disability_types;
    var length = arr.length;
    var str1 = "";
    //console.log(arr);
    for (var i = 0; i < length - 1; i++) {
      str1 = arr[i];
      for (var j = i + 1; j < length; j++) {
        var str2 = arr[j];
        if (str1 == str2) {
          arr.splice(j, 1); //remove the type that appeared two times
          arr.splice(i, 1);
        }
      }
    }
    //console.log(arr);
    data.disability_types = arr;
    console.log(data.disability_types);
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;

    return (
      <div className="container">
        <form className="white">
          <h5 className="grey-text text-darken-3">Organization Information</h5>
          <div className="input-field ">
            <label htmlFor="text">Event Link</label>
            <input
              type="text"
              defaultValue={values.event_link}
              onChange={handleChange("event_link")}
            />
          </div>
          <br />
          <div className="input-field">
            <label htmlFor="text">Name of Organization</label>
            <input
              type="text"
              defaultValue={values.org_name}
              onChange={handleChange("org_name")}
              required
            />
          </div>
          <br />
          <div className="input-field">
            <label htmlFor="text">Contact Name</label>
            <input
              type="text"
              defaultValue={values.contact_name}
              onChange={handleChange("contact_name")}
            />
          </div>
          <br />
          <div className="input-field">
            <label htmlFor="text">Contact Phone Number</label>
            <input
              type="text"
              defaultValue={values.contact_phone}
              onChange={handleChange("contact_phone")}
            />
          </div>
          <br />
          <div className="input-field">
            <label htmlFor="text">Contact Email Address</label>
            <input
              type="text"
              defaultValue={values.contact_email}
              onChange={handleChange("contact_email")}
            />
          </div>

          <button
            class="btn red lighten-1 z-depth-0"
            type="submit"
            name="action"
            onClick={this.continue}
          >
            continue
            <i class="material-icons right">send</i>
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
)(OrgInfo);
