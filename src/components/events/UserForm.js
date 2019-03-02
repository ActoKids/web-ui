import React, { Component } from "react";
import CreateEvent from "./CreateEvent";
import ReviewPage from "./ReviewPage";
import Success from "./Success";
export class UserForm extends Component {
  state = {
    step: 1,
    event_id: "",
    user_name: "",
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
    disability_types: [""],
    status: "",
    approver: "",
    created_timestamp: ""
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

  render() {
    const { step } = this.state;
    const {
      event_id,
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
      status,
      approver,
      created_timestamp
    } = this.state;
    const values = {
      event_id,
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
      status,
      approver,
      created_timestamp
    };
    switch (step) {
      case 1:
        return (
          <CreateEvent
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <ReviewPage
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return <Success values={values} />;
    }
  }
}

export default UserForm;
