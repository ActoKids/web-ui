import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { red500, red100 } from "material-ui/styles/colors";
import { FileFileUpload } from "material-ui/svg-icons";
//change the color of theme
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: "#e74c3c",
    accent1Color: red100
  }
});
class ReviewPage extends Component {
  //change the color of theme
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
    const {
      values: {
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
        activity_type,
        image
      }
    } = this.props;
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <React.Fragment>
          <AppBar title="ActoKids" />
          <h2>Edit Event ?</h2>
          <h3>Are your changes correct? ?</h3>
          <List>
            <ListItem primaryText="Event Name:" secondaryText={event_name} />
            <ListItem
              primaryText="Event Description:"
              secondaryText={event_description}
            />
            <ListItem
              primaryText="Activity Type:"
              secondaryText={activity_type}
            />

            <ListItem
              primaryText="Organization Name:"
              secondaryText={org_name}
            />
            <ListItem primaryText="Location:" secondaryText={location} />
            <ListItem primaryText="Address:" secondaryText={address} />
            <ListItem
              primaryText="Contact Person:"
              secondaryText={cont_person}
            />
            <ListItem primaryText="Contact Phone:" secondaryText={cont_phone} />
            <ListItem primaryText="Start Date :" secondaryText={start_date} />
            <ListItem primaryText="Start Time:" secondaryText={start_time} />
            <ListItem primaryText="End Date :" secondaryText={end_date} />
            <ListItem primaryText="End Time:" secondaryText={end_time} />
            <ListItem primaryText="Cost:" secondaryText={cost} />
          </List>
          
             
            

          <br />
          <RaisedButton
            label="Yes !"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label="Edit Again "
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
          
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
const styles = {
  button: {
    margin: 15
  }
};

export default ReviewPage;
