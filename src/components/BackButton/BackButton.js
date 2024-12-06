import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BackButton.scss';

const BackButton = ({text = "Quay lại", className = ""}) => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <button
            className={`back-button ${className}`}
            onClick={handleBack}
        >
            <span className="back-button__text">{text}</span>
        </button>
    );
};

export default BackButton;

