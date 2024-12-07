import React from "react";
import "./TextAreaInput.scss";

const TextAreaInput = ({ label, name, value, readOnly, onChange }) => {
  return (
    <div className="text-area-input">
      <label className="text-area-input__label">{label}</label>
      <textarea
        className="text-area-input__textarea"
        name={name}
        value={value}
        readOnly={readOnly}
        onChange={onChange}
      />
    </div>
  );
};

export default TextAreaInput;
