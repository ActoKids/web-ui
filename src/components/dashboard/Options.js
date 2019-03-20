import React from "react";
import PropTypes from "prop-types";

const Options = ({ onDelete }) => {
  return (
    <div className="options">
      <button
        onClick={onDelete}
        href="/"
        className="option-btn btn-floating btn-small waves-effect waves-light red"
      >
        <i className="large material-icons">delete</i>
      </button>
      <a
        href="/update"
        className="option-btn btn-floating btn-small waves-effect waves-light yellow"
      >
        <i className="large material-icons">edit</i>
      </a>
    </div>
  );
};

Options.propTypes = {
  onDelete: PropTypes.func.isRequired
};
export default Options;
