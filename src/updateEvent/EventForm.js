import React, { Component } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { red100 } from "material-ui/styles/colors";
import Select from "@material-ui/core/Select";
import { Slider } from 'material-ui-slider';



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

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <React.Fragment>
          <AppBar title="ActoKids - Update Events" />
          <TextField
            hintText="Enter the name of event"
            floatingLabelText="Event Name"
            onChange={handleChange("event_name")}
            defaultValue={values.event_name}
          /><br></br>

          <TextField
            style={styles.text}
            hintText="Enter a short description of event"
            floatingLabelText="Activity Description"
            onChange={handleChange("event_description")}
            defaultValue={values.event_description}
          /><br></br>

          <InputLabel htmlFor="age-native-simple">Activity Type</InputLabel>
          <Select
            native
            defaultValue={values.activity_type}
            onChange={handleChange("activity_type")}
          >
            <option value="" />
            <option value={"art"}>Art</option>
            <option value={"music"}>Music</option>
            <option value={"camp"}>Camp</option>
            <option value={"Museum"}>Museum</option>
            <option value={"Outddoors & Naturep"}>Outddoors & Nature</option>
            <option value={"Sports"}>Sports</option>
            <option value={"Zoo"}>Zoo</option>
            <option value={"Other"}>Other</option>
          </Select>
          <br />

          <TextField
            hintText="Enter the Organization name"
            floatingLabelText="Organization Name"
            onChange={handleChange("org_name")}
            defaultValue={values.org_name}
          /><br></br>

          <TextField
            style={styles.text}
            hintText="e.g. Seattle,WA"
            floatingLabelText="Location"
            onChange={handleChange("location")}
            defaultValue={values.location}
          />
          <br />
          <TextField
            hintText="e.g. 123 Main St"
            floatingLabelText="Address"
            onChange={handleChange("address")}
            defaultValue={values.address}
          /><br></br>

          <TextField
            style={styles.text}
            hintText="Name of contact person"
            floatingLabelText="Contact Person"
            onChange={handleChange("cont_person")}
            defaultValue={values.cont_person}
          />
          <br />
          <TextField
            hintText="Contact phone number"
            floatingLabelText="Contact Phone"
            onChange={handleChange("cont_phone")}
            defaultValue={values.cont_phone}
          /><br></br>

          <TextField
            style={styles.text}
            hintText="e.g. 1/1/2019"
            floatingLabelText="Start Date"
            onChange={handleChange("start_date")}
            defaultValue={values.start_date}
          /><br></br>
          <InputLabel>Start Time</InputLabel>
          <Select
            native
            defaultValue={values.start_time}
            onChange={handleChange("start_time")}
          >
            <option value="" />
            <option value={"0:00"}>0:00</option>
            <option value={"1:00"}>1:00</option>
            <option value={"2:00"}>2:00</option>
            <option value={"3:00"}>3:00</option>
            <option value={"4:00"}>4:00</option>
            <option value={"5:00"}>5:00</option>
            <option value={"6:00"}>6:00</option>
            <option value={"7:00"}>7:00</option>
            <option value={"8:00"}>8:00</option>
            <option value={"9:00"}>9:00</option>
            <option value={"10:00"}>10:00</option>
            <option value={"11:00"}>11:00</option>
            <option value={"12:00"}>12:00</option>
            <option value={"13:00"}>13:00</option>
            <option value={"14:00"}>14:00</option>
            <option value={"15:00"}>15:00</option>
            <option value={"16:00"}>16:00</option>
            <option value={"17:00"}>17:00</option>
            <option value={"18:00"}>18:00</option>
            <option value={"19:00"}>19:00</option>
            <option value={"20:00"}>20:00</option>
            <option value={"21:00"}>21:00</option>
            <option value={"22:00"}>22:00</option>
            <option value={"23:00"}>23:00</option>
          </Select>
          <InputLabel>End Time</InputLabel>
          <Select
            native
            defaultValue={values.end_time}
            onChange={handleChange("end_time")}
          >
            <option value="" />
            <option value={"0:00"}>0:00</option>
            <option value={"1:00"}>1:00</option>
            <option value={"2:00"}>2:00</option>
            <option value={"3:00"}>3:00</option>
            <option value={"4:00"}>4:00</option>
            <option value={"5:00"}>5:00</option>
            <option value={"6:00"}>6:00</option>
            <option value={"7:00"}>7:00</option>
            <option value={"8:00"}>8:00</option>
            <option value={"9:00"}>9:00</option>
            <option value={"10:00"}>10:00</option>
            <option value={"11:00"}>11:00</option>
            <option value={"12:00"}>12:00</option>
            <option value={"13:00"}>13:00</option>
            <option value={"14:00"}>14:00</option>
            <option value={"15:00"}>15:00</option>
            <option value={"16:00"}>16:00</option>
            <option value={"17:00"}>17:00</option>
            <option value={"18:00"}>18:00</option>
            <option value={"19:00"}>19:00</option>
            <option value={"20:00"}>20:00</option>
            <option value={"21:00"}>21:00</option>
            <option value={"22:00"}>22:00</option>
            <option value={"23:00"}>23:00</option>
          </Select>
          <br />
          <TextField
            hintText="e.g. $100"
            floatingLabelText="Cost"
            onChange={handleChange("cost")}
            defaultValue={values.cost}
            
          /><br></br>
          <TextField
            style={styles.text}
            hintText="e.g. 1/3/2019 "
            floatingLabelText="End Date "
            onChange={handleChange("end_date")}
            defaultValue={values.end_date}
          />
         

          <br />
          <InputLabel htmlFor="age-native-simple">Upload Image(optional)</InputLabel><br></br>
          <RaisedButton
          containerElement='upload' 
          label='Image'>
          <input type="file" />
          
          </RaisedButton><br></br><br></br>
          <InputLabel htmlFor="age-native-simple">Age Range</InputLabel><br></br>
          <Slider style={styles.slider} defaultValue={0}></Slider>

          <form>
          <InputLabel htmlFor="age-native-simple">Disability Type (Select all that apply)</InputLabel><br></br><br></br>
          <center></center><input type="radio" name="fruit" value="Adaptive Equipment" /><InputLabel htmlFor="age-native-simple">Adaptive Equipment</InputLabel><br></br>
          <center></center><input type="radio" name="fruit" value="Cognitive" /><InputLabel htmlFor="age-native-simple">Cognitive</InputLabel><br></br>
          <input type="radio" name="fruit" value="Hearing" /><InputLabel htmlFor="age-native-simple">Hearing</InputLabel><br></br>
          <input type="radio" name="fruit" value="Mobility" /><InputLabel htmlFor="age-native-simple">Mobility</InputLabel><br></br>
          <input type="radio" name="fruit" value="Sensory" /><InputLabel htmlFor="age-native-simple">Sensory</InputLabel><br></br>
          <input type="radio" name="fruit" value="Targeted-Available" /><InputLabel htmlFor="age-native-simple">Targeted</InputLabel><br></br>
          <input type="radio" name="fruit" value="Vision" /><InputLabel htmlFor="age-native-simple">Vision</InputLabel><br></br>
          <input type="radio" name="fruit" value="Wheelchair" /><InputLabel htmlFor="age-native-simple">Wheelchair</InputLabel><br></br><br></br>
          
</form>
          

          <RaisedButton
            label="Submit"
            
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
    margin: 20
  },
slider: {width: 350}
};

export default EventForm;
