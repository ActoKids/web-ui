import React, { Component } from "react";
import { connect } from "react-redux";
import { createEvent } from "../../store/actions/eventActions";
import { Redirect } from 'react-router-dom'; 


class CreateEvent extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange, handleDate, handleArray } = this.props;

    // const auth = this.props.isAuthenticated;

    // console.log("Create Event page: ", auth);

    // if(!auth) return <Redirect to='/' />


    return (
      <div className="container">
        <form className="white">
          <h5 className="grey-text text-darken-3">Create A New Event</h5>
          <div className="input-field ">
            <label htmlFor="text">Event Title</label>
            <input
              type="text"
              defaultValue={values.event_name}
              onChange={handleChange("event_name")}
              required
            />
          </div>
          <br />
          <div className="input-field ">
            <label htmlFor="text">Event Link</label>
            <input
              type="text"
              defaultValue={values.event_link}
              onChange={handleChange("event_link")}
            />
          </div>
          <br />
          <div
            className="input-field"
            id="activity_type"
            defaultValue={values.activity_type}
            onChange={handleChange("activity_type")}
          >
            <span class="grey-text">Activity Type</span>
            <div class="row">
              <div class="col s2">
                <label>
                  <input
                    class="with-gap"
                    name="group1"
                    type="radio"
                    value="Camp"
                    id="activity_type"
                    onChange={handleChange("activity_type")}
                  />
                  <span>Camp</span>
                </label>
              </div>

              <div class="col s2">
                <label>
                  <input
                    class="with-gap"
                    name="group1"
                    type="radio"
                    value="Music"
                    id="activity_type"
                    onChange={handleChange("activity_type")}
                  />
                  <span>Music</span>
                </label>
              </div>
              <div class="col s2">
                <label>
                  <input
                    class="with-gap"
                    name="group1"
                    type="radio"
                    value="Museum"
                    id="activity_type"
                    onChange={handleChange("activity_type")}
                  />
                  <span>Museum</span>
                </label>
              </div>
              <div class="col s2">
                <label>
                  <input
                    class="with-gap"
                    name="group1"
                    type="radio"
                    value="Sport"
                    id="activity_type"
                    onChange={handleChange("activity_type")}
                  />
                  <span>Sport</span>
                </label>
              </div>
              <div class="col s2">
                <label>
                  <input
                    class="with-gap"
                    name="group1"
                    type="radio"
                    value="Outdoor & Nature"
                    id="activity_type"
                    onChange={handleChange("activity_type")}
                  />
                  <span>Outdoor & Nature</span>
                </label>
              </div>
              <div class="col s2">
                <label>
                  <input
                    class="with-gap"
                    name="group1"
                    type="radio"
                    value="Other"
                    id="activity_type"
                    onChange={handleChange("activity_type")}
                  />
                  <span>Other</span>
                </label>
              </div>
            </div>
          </div>

          <div className="input-field">
            <label htmlFor="content">Event Description</label>
            <textarea
              className="materialize-textarea"
              defaultValue={values.description}
              onChange={handleChange("description")}
              required="required"
            />
          </div>
          <div className="input-field">
            <label htmlFor="text">Name of Organization</label>
            <input
              type="text"
              defaultValue={values.org_name}
              onChange={handleChange("org_name")}
              required="required"
            />
          </div>
          <div className="input-field">
            <label htmlFor="text">Location</label>
            <input
              type="text"
              defaultValue={values.location_name}
              onChange={handleChange("location_name")}
              required="required"
            />
          </div>
          <div className="input-field">
            <label htmlFor="text">Location Address</label>
            <input
              type="text"
              defaultValue={values.location_address}
              onChange={handleChange("location_address")}
              required="required"
            />
          </div>
          <div className="input-field">
            <label htmlFor="text">Contact Name</label>
            <input
              type="text"
              defaultValue={values.contact_name}
              onChange={handleChange("contact_name")}
            />
          </div>
          <div className="input-field">
            <label htmlFor="text">Contact Phone Number</label>
            <input
              type="text"
              defaultValue={values.contact_phone}
              onChange={handleChange("contact_phone")}
            />
          </div>
          <div className="input-field">
            <label htmlFor="text">Contact Email Address</label>
            <input
              type="text"
              defaultValue={values.contact_email}
              onChange={handleChange("contact_email")}
            />
          </div>

          <div class="row">
            <span class="grey-text">Start Date & Time</span>
            <input
              type="date"
              class="datetimepicker"
              type="datetime-local"
              defaultValue={values.start_date_time}
              onChange={handleDate("start_date_time")}
              required="required"
            />
          </div>
          <div class="row">
            <span class="grey-text">End Date & Time</span>
            <input
              type="date"
              class="datetimepicker"
              type="datetime-local"
              defaultValue={values.end_date_time}
              onChange={handleDate("end_date_time")}
            />
          </div>

          <div
            className="input-field"
            defaultValue={values.frequency}
            onChange={handleChange("frequency")}
          >
            <span class="grey-text">Event Frequency</span>
            <div class="row">
              <div class="col s2">
                <label>
                  <input
                    class="with-gap"
                    name="group3"
                    type="radio"
                    value="Once"
                    onChange={handleChange("frequency")}
                  />
                  <span>Once</span>
                </label>
              </div>

              <div class="col s2">
                <label>
                  <input
                    class="with-gap"
                    name="group3"
                    type="radio"
                    value="Daily"
                    onChange={handleChange("frequency")}
                  />
                  <span>Daily</span>
                </label>
              </div>
              <div class="col s2">
                <label>
                  <input
                    class="with-gap"
                    name="group3"
                    type="radio"
                    value="Weekly"
                    onChange={handleChange("frequency")}
                  />
                  <span>Weekly</span>
                </label>
              </div>
              <div class="col s2">
                <label>
                  <input
                    class="with-gap"
                    name="group3"
                    type="radio"
                    value="Monthly"
                    onChange={handleChange("frequency")}
                  />
                  <span>Monthly</span>
                </label>
              </div>
            </div>
          </div>

          <div className="input-field">
            <label htmlFor="text">Event Price</label>
            <input
              type="text"
              defaultValue={values.cost}
              onChange={handleChange("cost")}
              required
            />
          </div>
          <div class="row">
            <div class="col s3">
              <label>Minimum Age:</label>
              <select
                class="browser-default"
                defaultValue={values.min_age}
                onChange={handleChange("min_age")}
              >
                <option value="" disabled selected>
                  Choose your option
                </option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
              </select>
            </div>
            <div class="col s1">
              <h5 class="grey-text">to</h5>
            </div>

            <div class="col s3">
              <label>Maximum Age:</label>
              <select
                class="browser-default"
                defaultValue={values.max_age}
                onChange={handleChange("max_age")}
              >
                <option value="" disabled selected>
                  Choose your option
                </option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
              </select>
            </div>
          </div>

          <div className="input-field">
            <div
              className="input-field"
              //defaultValue={values.disability_types}
              //onChange={handleChange("disability_types")}
            >
              <span class="grey-text">Disability Types</span>
              <div class="row">
                <div class="col s2">
                  <label>
                    <input
                      class="with-gap"
                      name="group2"
                      type="checkbox"
                      value="Adaptive Equipment"
                      onChange={handleArray("disability_types")}
                    />
                    <span>Adaptive Equipment</span>
                  </label>
                </div>

                <div class="col s2">
                  <label>
                    <input
                      class="with-gap"
                      name="group2"
                      type="checkbox"
                      value="Cognitive"
                      onChange={handleArray("disability_types")}
                    />
                    <span>Cognitive</span>
                  </label>
                </div>
                <div class="col s2">
                  <label>
                    <input
                      class="with-gap"
                      name="group2"
                      type="checkbox"
                      value="Hearing"
                      onChange={handleArray("disability_types")}
                    />
                    <span>Hearing</span>
                  </label>
                </div>
                <div class="col s2">
                  <label>
                    <input
                      class="with-gap"
                      name="group2"
                      type="checkbox"
                      value="Mobility"
                      onChange={handleArray("disability_types")}
                    />
                    <span>Mobility</span>
                  </label>
                </div>
                <div class="col s2">
                  <label>
                    <input
                      class="with-gap"
                      name="group2"
                      type="checkbox"
                      value="Sensorye"
                      onChange={handleArray("disability_types")}
                    />
                    <span>Sensory</span>
                  </label>
                </div>
                <div class="col s2">
                  <label>
                    <input
                      class="with-gap"
                      name="group2"
                      type="checkbox"
                      value="Targeted Available"
                      onChange={handleArray("disability_types")}
                    />
                    <span>Targeted Available</span>
                  </label>
                </div>
                <div class="col s2">
                  <label>
                    <input
                      class="with-gap"
                      name="group2"
                      type="checkbox"
                      value="Wheelchair"
                      onChange={handleArray("disability_types")}
                    />
                    <span>Wheelchair</span>
                  </label>
                </div>
                <div class="col s2">
                  <label>
                    <input
                      class="with-gap"
                      name="group2"
                      type="checkbox"
                      value="Vision"
                      onChange={handleArray("disability_types")}
                    />
                    <span>Vision</span>
                  </label>
                </div>
              </div>
              <div class="file-field input-field">
                <div class="btn red lighten-1 z-depth-0">
                  <span>Upload Image</span>
                  <input
                    type="file"
                    defaultValue={values.picture_url}
                    onChange={handleChange("picture_url")}
                  />
                </div>
                <div class="file-path-wrapper">
                  <input
                    class="file-path validate"
                    type="text"
                    onChange={handleChange("picture_url")}
                  />
                </div>
              </div>
            </div>
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
)(CreateEvent);
