import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { red500, red100 } from "material-ui/styles/colors";
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: "#e74c3c",
    accent1Color: red100
  }
});

export class Success extends Component {
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
      <MuiThemeProvider muiTheme={muiTheme}>
        <React.Fragment>
          <AppBar title="ActoKids" />
          <h1>Thank You For Your Submission</h1>
          <p>Your New Event Has Been Created!</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
