import React, {Component } from 'react';


export default class getEvents extends Component{
  state = {
    isLoading: true,
    users: [],
    error: null
  }

componentDidMount() {
    // Where we're fetching data from
    fetch(`https://jsonplaceholder.typicode.com/users`)
      // We get the API response and receive data in JSON format...
      .then(response => response.json())
      // ...then we update the users state
      .then(data =>
        this.setState({
          users: data,
          isLoading: false,
        })
      )
      // Catch any errors we hit and update the app
      .catch(error => this.setState({ error, isLoading: false }));
  }


render() {
  const { isLoading, users, error } = this.state;
    return (
        <div className="container">
            <React.Fragment>
                <h3>Fetching Data from remote API</h3>
                <h5>Random User</h5>
            {error ? <p>{error.message}</p> : null}
            {!isLoading ? (
                users.map(user => {
                const { username, name, email } = user;
                return (
                    <div key={username}>
                    <p>Name: {name}</p>
                    <p>Email Address: {email}</p>
                    <hr />
                    </div>
                );
                })
            // If there is a delay in data, let's let the user know it's loading
            ) : (
                <h3>Loading...</h3>
            )}

            </React.Fragment>
      </div>

    );
}
}
