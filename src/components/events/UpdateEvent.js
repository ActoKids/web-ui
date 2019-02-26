import React, { Component } from "react";
import { connect } from "react-redux";



class UpdateEvent extends Component {
    // This is all to calling all form bellow 
    state = {
      title: "",
      activity_type: "",
      description: "",
      org_name: "",
      location_name: "",
      location_address: "",
      contact_name: "",
      contact_phone: "",
      contact_email: "",
      start_date_time: "",
      end_date_time: "",
      frequency: "",
      cost: "",
      picture_url: "",
      min_age: "",
      max_age: "",
      disability_types: "",
      status: "",
      approver: ""
    };
  
    handleChange = e => {
      this.setState({
        // targets the id and its value
        [e.target.id]: e.target.value
      });
    };
  
    handleSubmit = e => {
      e.preventDefault();
      // passes the event into the function at bottom which begins the dispatch
      // on createEvent and runs eventActions.js functions
      this.props.createEvent(this.state);
    };
  
    render() {
      
      
      return (
        <div className="container">
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Edit an Event</h5>
            <div className="input-field ">
              <label htmlFor="text">Activity Name</label>
              <input disabled={true} type="text" id="title" onChange={this.handleChange} />
            </div>
            <br />
            <div
              className="input-field"
              id="activity_type"
              onChange={this.handleChange}
            >
              <span class="grey-text">Activity Type</span>
              <div class="row">
                <div class="col s2">
                  <label>
                    <input disabled={true}
                      class="with-gap"
                      name="group1"
                      type="radio"
                      value="Art"
                      id="activity_type"
                      onChange={this.handleChange}
                    />
                    <span>Art</span>
                  </label>
                </div>
  
                <div class="col s2">
                  <label>
                    <input disabled={true}
                      class="with-gap"
                      name="group1"
                      type="radio"
                      value="Camp"
                      id="activity_type"
                      onChange={this.handleChange}
                    />
                    <span>Camp</span>
                  </label>
                </div>
                <div class="col s2">
                  <label>
                    <input disabled={true}
                      class="with-gap"
                      name="group1"
                      type="radio"
                      value="Museum"
                      id="activity_type"
                      onChange={this.handleChange}
                    />
                    <span>Museum</span>
                  </label>
                </div>
                <div class="col s2">
                  <label>
                    <input disabled={true}
                      class="with-gap"
                      name="group1"
                      type="radio"
                      value="Music"
                      id="activity_type"
                      onChange={this.handleChange}
                    />
                    <span>Music</span>
                  </label>
                </div>
                <div class="left s2">
                  <label>
                    <input disabled={true}
                      class="with-gap"
                      name="group1"
                      type="radio"
                      value="Outdoor & Nature"
                      id="activity_type"
                      onChange={this.handleChange}
                    />
                    <span>Outdoor & Nature</span>
                  </label>
                </div>
                <div class="col s2">
                  <label>
                    <input disabled={true}
                      class="with-gap"
                      name="group1"
                      type="radio"
                      value="Other"
                      id="activity_type"
                      onChange={this.handleChange}
                    />
                    <span>Sports</span>
                  </label>
                </div><br></br>
                <div class="col s2">
                  <label>
                    <input disabled={true}
                      class="with-gap"
                      name="group1"
                      type="radio"
                      value="Zoo"
                      id="activity_type"
                      onChange={this.handleChange}
                    />
                    <span>Zoo</span>
                  </label>
                </div>
                <div class="col s2">
                  <label>
                    <input disabled={true}
                      class="with-gap"
                      name="group1"
                      type="radio"
                      value="Other"
                      id="activity_type"
                      onChange={this.handleChange}
                    />
                    <span>Other</span>
                  </label>
                </div>
              </div>
            </div>
  
            <div className="input-field">
              <label htmlFor="content">Activity Description</label>
              <textarea
                id="description"
                className="materialize-textarea"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field">
              <label htmlFor="text">Organization Name </label>
              <input disabled={true} type="text" id="org_name" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="text">Location</label>
              <input disabled={true}
                type="text"
                id="location_name"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field">
              <label htmlFor="text">Location Address</label>
              <input disabled={true}
                type="text"
                id="location_address"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field">
              <label htmlFor="text">Activity Contact Person</label>
              <input type="text" id="contact_name" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="text">Contact Phone</label>
              <input disabled={true}
                type="text"
                id="contact_phone"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field">
              <label htmlFor="text">Contact Email </label>
              <input disabled={true}
                type="text"
                id="contact_email"
                onChange={this.handleChange}
              />
            </div>
  
            <div class="row">
              <span class="grey-text">Activity Start Date and Time</span>
              <input 
                type="date"
                class="datetimepicker"
                type="datetime-local"
                id="start_date_time"
                onChange={this.handleChange}
              />
            </div>
            <div class="row">
              <span class="grey-text">Activity End Date and Time</span>
              <input 
                type="date"
                class="datetimepicker"
                type="datetime-local"
                id="end_date_time"
                onChange={this.handleChange}
              />
            </div>
  
            <div
              className="input-field"
              id="activity_type"
              onChange={this.handleChange}
            >
              <span class="grey-text">Frequency</span>
              <div class="row">
                <div class="col s2">
                  <label>
                    <input
                      class="with-gap"
                      name="group1"
                      type="radio"
                      value="One-time"
                      id="frequency"
                      onChange={this.handleChange}
                    />
                    <span>One-time</span>
                  </label>
                </div>
  
                <div class="col s2">
                  <label>
                    <input
                      class="with-gap"
                      name="group1"
                      type="radio"
                      value="Reoccuring"
                      id="frequency"
                      onChange={this.handleChange}
                    />
                    <span>Reoccuring</span>
                  </label>
                </div>
                <div class="col s2">
                  <label>
                    <input
                      class="with-gap"
                      name="group1"
                      type="radio"
                      value="Daily"
                      id="frequency"
                      onChange={this.handleChange}
                    />
                    <span>Daily</span>
                  </label>
                </div>
                <div class="col s2">
                  <label>
                    <input
                      class="with-gap"
                      name="group1"
                      type="radio"
                      value="Weekly"
                      id="frequency"
                      onChange={this.handleChange}
                    />
                    <span>Weekly</span>
                  </label>
                </div>
                <div class="col s2">
                  <label>
                    <input
                      class="with-gap"
                      name="group1"
                      type="radio"
                      value="Monthly"
                      id="frequency"
                      onChange={this.handleChange}
                    />
                    <span>Monthly</span>
                  </label>
                </div>
                <div class="col s2">
                  <label>
                    <input
                      class="with-gap"
                      name="group1"
                      type="radio"
                      value="Annually"
                      id="frequency"
                      onChange={this.handleChange}
                    />
                    <span>Annually</span>
                  </label>
                </div>
              </div>
            </div>
  
            <div className="input-field">
              <label htmlFor="text">Cost(US Dollars)</label>
              <input type="text" id="cost" onChange={this.handleChange} />
            </div>
            <div class="row">
              <div class="col s3">
                <label>Minimum Age:</label>
                <select
                  class="browser-default"
                  id="min_age"
                  onChange={this.handleChange}
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
                  id="max_age"
                  onChange={this.handleChange}
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
                id="disability_types"
                onChange={this.handleChange}
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
                        id="disability_types"
                        onChange={this.handleChange}
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
                        id="disability_types"
                        onChange={this.handleChange}
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
                        id="disability_types"
                        onChange={this.handleChange}
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
                        id="disability_types"
                        onChange={this.handleChange}
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
                        id="disability_types"
                        onChange={this.handleChange}
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
                        id="disability_types"
                        onChange={this.handleChange}
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
                        id="disability_types"
                        onChange={this.handleChange}
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
                        id="disability_types"
                        onChange={this.handleChange}
                      />
                      <span>Vision</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="input"> 
              <button 
              className="btn red lighten-1 z-depth-0"> 
              
                Submit
                
              </button>
              
            </div>
           
            
          </form>
          
        </div>
        
        
      );
    }
  }


 
export default connect(
 
)(UpdateEvent);
  
  
  


  