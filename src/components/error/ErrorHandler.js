import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

class ErrorHandler extends Component {
  static propTypes = {
    history: PropTypes.shape({
      goBack: PropTypes.func.isRequired
    }).isRequired
  };
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  componentDidCatch(err, info) {
    // Display fallback UI
    this.setState({ hasError: true });

    console.log(err, info);
  }

  handleRetry = () => {
    window.location.reload();
  };

  handleBack = () => {
    this.props.history.goBack();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="container">
          <div className="not-found-view">
            <h4>Sorry! There was a problem</h4>
            <p>
              <button
                className="waves-effect waves-light btn"
                onClick={this.handleBack}
                style={{ marginRight: 6 }}
              >
                Go back
              </button>
              <button
                className="waves-effect waves-light btn"
                onClick={this.handleRetry}
              >
                Refresh
              </button>
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default withRouter(ErrorHandler);