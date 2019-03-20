import React, { Component } from "react";
import CreateEvent from "./CreateEvent";
import OrgInfo from "./OrgInfo";
import AddressTime from "./AddressTime.js";
import ReviewPage from "./ReviewPage";
import Success from "./Success";
import { Redirect } from 'react-router-dom'; 


export class UserForm extends Component {
  state = {
    step: 1,

    user_name: "Shao",
    event_name: "",
    event_link: "",
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
    cost: 0,
    picture_url: "",
    min_age: 0,
    max_age: 0,
    disability_types: [],
    event_status: "Pending",
    approver: "none"
  };

  // proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  handleDate = input => e => {
    this.setState({ [input]: e.target.value.concat(":00.000Z") });
  };
  handleArray = input => e => {
    var arr = this.state.disability_types.concat(e.target.value + " ");
    this.setState({ [input]: arr });
  };

  render() {

        const auth = this.props.isAuthenticated;

        {/*Check if the user is already authicated
            if is not, then redirect to sign in page*/}
        if(!auth) return <Redirect to='/' />

    const { step } = this.state;
    const { classType } = this.state;
    const {
      user_name,
      event_name,
      event_link,
      activity_type,
      description,
      org_name,
      location_name,
      location_address,
      contact_name,
      contact_phone,
      contact_email,
      start_date_time,
      end_date_time,
      frequency,
      cost,
      picture_url,
      min_age,
      max_age,
      disability_types,
      event_status,
      approver
    } = this.state;
    const values = {
      user_name,
      event_name,
      event_link,
      activity_type,
      description,
      org_name,
      location_name,
      location_address,
      contact_name,
      contact_phone,
      contact_email,
      start_date_time,
      end_date_time,
      frequency,
      cost,
      picture_url,
      min_age,
      max_age,
      disability_types,
      event_status,
      approver
    };
    switch (step) {
      case 1:
        return (
          <CreateEvent
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            handleDate={this.handleDate}
            handleArray={this.handleArray}
            values={values}
          />
        );
      case 2:
        return (
          <OrgInfo
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <AddressTime
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleDate={this.handleDate}
            handleArray={this.handleArray}
            values={values}
          />
        );
      case 4:
        return (
          <ReviewPage
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return <Success values={values} />;
    }
  }
}

export default UserForm;
