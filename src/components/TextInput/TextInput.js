import React from "react";
import "./TextInput.scss";

const TextInput = ({ label, type, name, value, readOnly, onChange }) => {
  return (
    <div className="text-input">
      <label className="text-input__label">{label}</label>
      <input
        className={readOnly ? "text-input__input" : "text-input__input text-input__input--active"}
        type={type}
        name={name}
        value={value}
        readOnly={readOnly}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
