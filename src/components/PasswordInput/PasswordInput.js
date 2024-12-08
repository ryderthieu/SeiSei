import React, { useState } from "react";
import "./PasswordInput.scss";

const PasswordInput = ({ label, placeholder, value, onChange }) => {

    return (
        <div className="password-input">
            {label && <label className="password-input__label">{label}</label>}
            <div className="password-input__wrapper">
                <input
                type="password"
                className="password-input__input"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required
                />
                <button
                type="button"
                className="password-input__toggle-visibility"
                aria-label="Toggle password visibility"
                >
                </button>
            </div>
        </div>
    )
}

export default PasswordInput;