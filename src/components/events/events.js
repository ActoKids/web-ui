// import React, { Component } from 'react'
// import { API } from 'aws-amplify';
// import { Link } from 'react-router-dom'
// import _ from 'lodash'
// import Options from '../dashboard/Options'


// // This component now acts as an almost functioning dashboard.
// // Everything is called from the API and is easily customizable.
// // The event_id is taken in as a key in order to pass on an event's
// // props to another component.
// export default class events extends Component {
//     // Setting the state
//     constructor(props) {
//         super(props);
//         this.state = {
//             events: [],
//             isLoading: true
//         };
//     }

//     // Calling AWS API get() method. This method takes in
//     // two parameters: the API name "events" and the API URL "/events"
//     // Then we set the state of the component to the API's response
//     getEvents() {
//         API.get("events", "/events")
//             .then(response => {
//                 this.setState({
//                     events: response.Items
//                 })
//             })
//     }

//     componentDidMount() {
//         this.getEvents();
//     }
      
    

//     render() {

//         // creating an array variable to store the state in
//         const eventInfo = this.state.events;
//         return (
//             <div className="container">
//                 <h3>Dashboard</h3>
//                 <Options />
//                 {/* Using lodash to simplify JavaScript Arrays */}
//                 {_.map(eventInfo, ({ 
//                     activity_type,
//                     approver,
//                     contact_email,
//                     contact_name,
//                     contact_phone,
//                     cost,
//                     created_timestamp,
//                     description, 
//                     disability_types,
//                     end_date_time,
//                     event_id,
//                     event_link, 
//                     event_name,
//                     event_status,
//                     frequency,
//                     location_address,
//                     location_name,
//                     min_age,
//                     max_age,
//                     org_name,
//                     picture_url,
//                     start_date_time,
//                     user_name
//                 }) => (
//                     <div className="row">
//                         <Link to={'/event/' + event_id} key={event_id}>
//                             <div className="col s12 m12">
//                                 <div className="card horizontal hoverable">
//                                     <div className="card-content">
//                                         <span className="card-title black-text">{event_name} at: {location_name}</span>
//                                         <p className="grey-text darken-2">Posted By {contact_name}</p>
//                                         <p className="grey-text darken-1">Ages {min_age} to {max_age}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </Link>
//                     </div>
//                 ))}                
//             </div>  
//         )
//     }
// }