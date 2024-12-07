import React, { useState } from "react";
import "./PasswordInput.scss";

const PasswordInput = ({ label, placeholder, value, onChange }) => {
    const[isPasswordVisible, setPasswordVisible] = useState(false);

    const togglePassword = () => {
        setPasswordVisible ((prev) => !prev);
    };

    return (
        <div className="password-input">
            {label && <label className="password-input__label">{label}</label>}
            <div className="password-input__wrapper">
                <input
                type={isPasswordVisible ? "text" : "password"}
                className={`password-input__input ${isPasswordVisible ? 'password-input__input--visible' : ''}`}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required
                />
                <button
                type="button"
                className="password-input__toggle-visibility"
                onClick={togglePassword}
                aria-label="Toggle password visibility"
                >
                <ion-icon
                    className="password-input__icon"
                    name={isPasswordVisible ? "eye-outline" : "eye-off-outline"}
                ></ion-icon>
                </button>
            </div>
        </div>
    )
}

export default PasswordInput;