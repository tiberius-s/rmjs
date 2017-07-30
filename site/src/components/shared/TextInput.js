import React from "react";
import './Inputs.css';

const TextInput = props => {
  return (
    <div className="input-group">
      <label className="input-label" htmlFor={props.name}>
        {props.label}
      </label>
      <input
        className="input"
        type="text"
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.handler}
      />
    </div>
  );
};

export default TextInput;
