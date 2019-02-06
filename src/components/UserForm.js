import React, { Component } from "react";
import EventForm from "./EventForm";
import ReviewPage from "./ReviewPage";
import Success from "./Success";
export class UserForm extends Component {
  state = {
    step: 1,
    event_name: "",
    event_description: "",
    org_name: "",
    location: "",
    address: "",
    cont_person: "",
    cont_phone: "",
    cont_email: "",
    start_date: "",
    start_time: "",
    end_time: "",
    end_date: "",
    cost: "",
    activity_type: ""
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
      event_name,
      event_description,
      org_name,
      location,
      address,
      cont_email,
      cont_person,
      cont_phone,
      start_date,
      start_time,
      end_time,
      end_date,
      cost,
      activity_type
    } = this.state;
    const values = {
      event_name,
      event_description,
      org_name,
      location,
      address,
      cont_email,
      cont_person,
      cont_phone,
      start_date,
      start_time,
      end_time,
      end_date,
      cost,
      activity_type
    };
    switch (step) {
      case 1:
        return (
          <EventForm
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
        return <Success />;
    }
  }
}

export default UserForm;
