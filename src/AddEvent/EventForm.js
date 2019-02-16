import React, { Component } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { red500, red100 } from "material-ui/styles/colors";
import Select from "@material-ui/core/Select";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Typography from "@material-ui/core/Typography";


//change the color of theme
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: "#e74c3c",
    accent1Color: red100
  }
});

class EventForm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  fileSelectedHandler = event => {
    console.log(event.target.files[0]);
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <React.Fragment>
          <AppBar title="ActoKids- Add Event" />
          <TextField
            style={styles.text}
            hintText="Enter the name of event"
            floatingLabelText="Event Name"
            onChange={handleChange("event_name")}
            defaultValue={values.event_name}
          />
          <br />
          <FormControl style={styles.radioform}>
            <FormLabel>Activity Type</FormLabel>
            <RadioGroup
              aria-label="Activity Type"
              name="ActType1"
              defaultValue={values.activity_type}
              onChange={handleChange("activity_type")}
              style={styles.radiogroup}
            >
              <FormControlLabel value="art" control={<Radio />} label="Art" />
              <FormControlLabel
                style={styles.radio}
                value="camp"
                control={<Radio />}
                label="Camp"
              />
              <FormControlLabel
                value="museum"
                control={<Radio />}
                label="Museum"
              />
              <FormControlLabel value="zoo" control={<Radio />} label="Zoo" />
              <FormControlLabel
                value="music"
                control={<Radio />}
                label="Music"
              />

              <FormControlLabel
                value="sport"
                control={<Radio />}
                label="Sport"
              />
              <FormControlLabel
                value="outdoors & nature"
                control={<Radio />}
                label="Outdoors & Nature"
              />

              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
          <br />

          <TextField
            style={styles.text}
            hintText="Short description of event"
            floatingLabelText="Activity Description"
            onChange={handleChange("event_description")}
            defaultValue={values.event_description}
          />
          <br />

          <TextField
            style={styles.text}
            hintText="Enter the Organization name"
            floatingLabelText="Organization Name"
            onChange={handleChange("org_name")}
            defaultValue={values.org_name}
          />
          <br />
          <TextField
            style={styles.text}
            hintText="e.g. Seattle,WA"
            floatingLabelText="Location"
            onChange={handleChange("location")}
            defaultValue={values.location}
          />
          <br />
          <TextField
            style={styles.text}
            hintText="e.g. 123 Main St"
            floatingLabelText="Address"
            onChange={handleChange("address")}
            defaultValue={values.address}
          />
          <br />
          <TextField
            style={styles.text}
            hintText="Name of contact person"
            floatingLabelText="Contact Person"
            onChange={handleChange("cont_person")}
            defaultValue={values.cont_person}
          />
          <br />
          <TextField
            style={styles.text}
            hintText="Contact Email"
            floatingLabelText="Contact Email"
            onChange={handleChange("cont_email")}
            defaultValue={values.cont_email}
          />
          <br />
          <TextField
            style={styles.text}
            hintText="Contact phone number"
            floatingLabelText="Contact Phone"
            onChange={handleChange("cont_phone")}
            defaultValue={values.cont_phone}
          />
          <br />
          <InputLabel>Start Date & Time: </InputLabel>
          <TextField
            style={{ margin: 20 }}
            id="datetime-local"
            label="Start Date"
            type="datetime-local"
            InputLabelProps={{
              shrink: true
            }}
            onChange={handleChange("start_date_time")}
          />
          <br />
          <InputLabel>End Date & Time: </InputLabel>
          <TextField
            style={{ margin: 20 }}
            id="datetime-local"
            label="End Date"
            type="datetime-local"
            InputLabelProps={{
              shrink: true
            }}
            onChange={handleChange("end_date_time")}
          />

          <br />

          <TextField
            hintText="e.g. $100"
            floatingLabelText="Cost"
            onChange={handleChange("cost")}
            defaultValue={values.cost}
          />
          <br />
          <br />
          <br />
          <InputLabel htmlFor="image-native-simple">
            Upload Image(optional)
          </InputLabel>
          <br />
          <RaisedButton containerElement="upload" label="Image">
            <input type="file" onChange={handleChange("image")} />
          </RaisedButton>
          <br />

          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  },
  text: {
    width: 400,
    margin: 10
  },

  radioform: {
    marginTop: 20,
    width: 300
  },
  radiogroup: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
};

export default EventForm;
