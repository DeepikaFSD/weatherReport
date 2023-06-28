import React from "react";
import PropTypes from "prop-types";

const Input = ({ onInput, inputRef }) => {
  return (
    <div className="input-box">
      <span className="label">Location</span>
      <input type="text" onChange={onInput} ref={inputRef} />
    </div>
  );
};

Input.propTypes = {
  onInput: PropTypes.func,
  inputRef: PropTypes.object
};

export default Input;
