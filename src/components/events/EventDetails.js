import React, { Component } from 'react'

export default class EventDetails extends Component {
    state = {
        isLoading: true,
        events: [],
        error: null
    }
   

    componentDidMount() {
        // where to fetch the data
        fetch('https://8cex032b53.execute-api.us-west-2.amazonaws.com/sprint2_test/v1/events/1')
        // get API response and recieve JSON data
        .then(response => response.json())
        // update the state of the post
        .then(data => 
            this.setState({
                events: data,
                isLoading: false,
            })
        )
        // catching errors while updating
        .catch(error => this.setState({ 
            error, isLoading: false 
        }));
    }
    

    render() {
        //console.log(this.props);
        const { isLoading, events, error } = this.state;
        //console.log(this.state);
        return (
            <div className="container">
                <React.Fragment>
                    <h3>Event Data From API</h3>                   
                    {error ? <p>{error.message}</p> : null}
                    {!isLoading ? (
                        events.map(event => {
                            const id = this.props.match.params.id;
                            const eventID = event.id;
                            //console.log(eventID);
                            //console.log(id);
                            const { title, description, min_age, contact_name } = event;
                            if (eventID == id) {
                                return(
                                    <div className="card" key={id}>
                                        <div className="card-content">
                                            <div className="card-title">{contact_name}</div>
                                            <p>ID: {event.id}</p>
                                            <p>Description: {description}</p>
                                            <p>Minimum Age: {min_age}</p>
                                        </div>
                                        <hr />   
                                    </div>
                                )
                            }
                        })
                    ) : (<h3>Loading...</h3>)}
            </React.Fragment>
        </div>
        );
    }
}