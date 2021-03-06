import React, { Component } from "react";
import { connect } from "react-redux";
import { createEvent } from "../../store/actions/eventActions";

class CreateEvent extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const {
      values,
      handleChange,

      handleArray
    } = this.props;

    return (
      <div className="container">
        <form className="white">
          <h5 className="grey-text text-darken-3">Event Information</h5>
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

          <div
            className="input-field"
            id="activity_type"
            defaultValue={values.activity_type}
            onChange={handleChange("activity_type")}
          >
            <span class="grey-text">Activity Type</span>
            <div class="row">
              <div>
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
              <br />
              <div>
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
              <br />
              <div>
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
              <br />
              <div>
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
              <br />
              <div>
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
              <br />
              <div>
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

          <div
            className="input-field"
            defaultValue={values.frequency}
            onChange={handleChange("frequency")}
          >
            <span class="grey-text">Event Frequency</span>
            <div class="row">
              <div>
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
              <br />
              <div>
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
              <br />
              <div>
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
              <br />
              <div>
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
          <br />
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
                <div class="col s6">
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

                <div class="col s6">
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
                <div class="col s6">
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
                <div class="col s6">
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
                <div class="col s6">
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
                <div class="col s6">
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
                <div class="col s6">
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
                <div class="col s6">
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
                <div class="col s6">
                  <label>
                    <input
                      class="with-gap"
                      name="group2"
                      type="checkbox"
                      value="Inclusive"
                      onChange={handleArray("disability_types")}
                    />
                    <span>Inclusive</span>
                  </label>
                </div>
                <div class="col s6">
                  <label>
                    <input
                      class="with-gap"
                      name="group2"
                      type="checkbox"
                      value="Other"
                      onChange={handleArray("disability_types")}
                    />
                    <span>Other</span>
                  </label>
                </div>
              </div>
              <div class="file-field input-field">
                <span class="grey-text">Image URL :</span>
                <input
                  type="text"
                  defaultValue={values.picture_url}
                  onChange={handleChange("picture_url")}
                />
              </div>
            </div>
          </div>

          <button
            class="btn red lighten-1 z-depth-0"
            type="submit"
            name="action"
            //disabled={this.validateCheck}
            onClick={this.continue}
          >
            continue
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
