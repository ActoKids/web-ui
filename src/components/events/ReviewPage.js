import React, { Component } from "react";
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
      }
    } = this.props;

    return (
      <div className="container">
        <h5>Please review the information:</h5>
        <ul class="collection">
          <li class="collection-item">
            <span class="title">Event Name:</span>
            <p>{event_name}</p>
          </li>
          <li class="collection-item">
            <span class="title">Event Link:</span>
            <p>{event_link}</p>
          </li>
          <li class="collection-item">
            <span class="title">Activity Type:</span>
            <p>{activity_type}</p>
          </li>
          <li class="collection-item">
            <span class="title">Description:</span>
            <p>{description}</p>
          </li>
          <li class="collection-item">
            <span class="title">Organization Name:</span>
            <p>{org_name}</p>
          </li>
          <li class="collection-item">
            <span class="title">Location City:</span>
            <p>{location_name}</p>
          </li>
          <li class="collection-item">
            <span class="title">Location Address:</span>
            <p>{location_address}</p>
          </li>
          <li class="collection-item">
            <span class="title">Contact Person:</span>
            <p>{contact_name}</p>
          </li>
          <li class="collection-item">
            <span class="title">Contact phone:</span>
            <p>{contact_phone}</p>
          </li>
          <li class="collection-item">
            <span class="title">Contact email:</span>
            <p>{contact_email}</p>
          </li>
          <li class="collection-item">
            <span class="title">Start Date Time:</span>
            <p>{start_date_time}</p>
          </li>
          <li class="collection-item">
            <span class="title">End Date Time:</span>
            <p>{end_date_time}</p>
          </li>
          <li class="collection-item">
            <span class="title">Frequency:</span>
            <p>{frequency}</p>
          </li>
          <li class="collection-item">
            <span class="title">Cost:</span>
            <p>{cost}</p>
          </li>
          <li class="collection-item">
            <span class="title">Image:</span>
            <p>{picture_url}</p>
          </li>
          <li class="collection-item">
            <span class="title">Min Age:</span>
            <p>{min_age}</p>
          </li>
          <li class="collection-item">
            <span class="title">Max Age:</span>
            <p>{max_age}</p>
          </li>
          <li class="collection-item">
            <span class="title">Disability Types:</span>
            <p>{disability_types}</p>
          </li>
        </ul>
        <button
          class="btn red lighten-1 z-depth-0"
          type="submit"
          name="action"
          onClick={this.continue}
        >
          continue
          <i class="material-icons right">send</i>
        </button>

        <button
          class="btn red lighten-1 z-depth-0"
          name="action"
          onClick={this.back}
          style={{ marginLeft: 10 }}
        >
          back
        </button>
      </div>
    );
  }
}

export default ReviewPage;
