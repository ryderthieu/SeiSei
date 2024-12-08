import React from "react";
import "./AuthInput.scss";

const AuthInput = ({
  id,
  type = "text",
  value,
  onChange,
  label,
  placeholder = "",
  required = false,
}) => {
  return (
    <div className="auth-input__wrapper">
      <input
        id={id}
        className="auth-input__input"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
      <label className="auth-input__label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default AuthInput;
