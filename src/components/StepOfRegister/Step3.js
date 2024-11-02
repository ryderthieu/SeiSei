import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Register.scss';
import loginImg from '../../assets/images/Login/login.png';

const LeftArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M11.3 1.3a1 1 0 0 1 0 1.4L5.4 8l5.9 5.3a1 1 0 0 1-1.3 1.5l-7-6.3a1 1 0 0 1 0-1.5l7-6.3a1 1 0 0 1 1.4 0z" />
    </svg>
);

const RightArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M4.7 1.3a1 1 0 0 0 0 1.4L10.6 8 4.7 13.3a1 1 0 0 0 1.3 1.5l7-6.3a1 1 0 0 0 0-1.5l-7-6.3a1 1 0 0 0-1.4 0z" />
    </svg>
);

const TRegister = () => {
    const navigate = useNavigate();
    const [cccd, setCccd] = useState(null);
    const [avatar, setAvatar] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        navigate('/tregister'); 
    };

    const handleBack = () => {
        navigate('/sregister');
    };

    const handleCccdChange = (e) => {
        setCccd(e.target.files[0]);
    };

    const handleAvatarChange = (e) => {
        setAvatar(e.target.files[0]);
    };

    return (
        <div className="register-container">
            <div className='register-imgs'>
                <img src={loginImg} className='register-img' alt="Register" />
            </div>
            <div className="register-content">
                <form onSubmit={handleSubmit}>
                    <div className="register-content__header">
                        <div className="register-content__title1">Đăng ký</div>
                        <div className="register-content__title2">Học viên</div>
                    </div>
                    <div className="input-field">
                        <input type="file" required id="cccd" accept="image/*" onChange={handleCccdChange} />
                        <label htmlFor="cccd">Tải lên CCCD</label>
                    </div>

                    <div className="input-field">
                        <input type="file" required id="avatar" accept="image/*" onChange={handleAvatarChange} />
                        <label htmlFor="avatar">Tải lên Avatar</label>
                    </div>

                    <div class="accpect">
                        <label for="accpect">
                            <input type="checkbox" id="accpect"/>
                            <span>Chấp nhận điều khoản sử dụng</span>
                        </label>
                    </div>

                    <div className="button-container">
                        <button type="button" className="back" onClick={handleBack}>
                            <LeftArrowIcon /> Quay về
                        </button>
                        <button type="submit" className="next">
                            Tiếp theo <RightArrowIcon />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TRegister;
