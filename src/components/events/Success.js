import React, { Component } from "react";
class Success extends Component {
  constructor(props) {
    super(props);
  }
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <div className="container">
        <h1>Thank You For Your Submission</h1>
        <p>Your New Event Has Been Created!</p>
      </div>
    );
  }
}

export default Success;
