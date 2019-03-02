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
    const { values } = this.props;
    fetch("https://api-alexc.2edusite.com/v1/events", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(myJson => {
        console.log(myJson);
      })
      .catch(err => console.log(err));

    //https://api-alexc.2edusite.com/v1/events
    //"http://localhost:3000/values"
    return (
      <div className="container">
        <h1>Thank You For Your Submission</h1>
        <p>Your New Event Has Been Created!</p>
      </div>
    );
  }
}

export default Success;
