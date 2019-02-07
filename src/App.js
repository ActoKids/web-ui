import React, { Component } from "react";
import "./App.css";
import UserForm from "./components/UserForm";
import { MuiThemeProvider } from "material-ui/styles";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <UserForm />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
