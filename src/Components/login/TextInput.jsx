
import React from 'react';
import './textInput.css';

function TextInput({ label, value, onChange, type = 'text', placeholder }) {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="text-input"
      />
    </div>
  );
}

export default TextInput;
