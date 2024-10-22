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

const FRegister = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Mật khẩu không khớp!");
            return;
        }
        navigate('/sregister'); 
    };

    const handleBack = () => {
        navigate('/login');
    };

    return (
        <div className="register-container">
            <div className='register-imgs'>
                <img src={loginImg} alt="Login" className='register-img'/>
            </div>
            <div className="register-content">
                <form onSubmit={handleSubmit}>
                    <div className="register-content__header">
                        <h1 className="register-content__title1">Đăng ký</h1>
                        <h2 className="register-content__title2">Học viên</h2>
                    </div>

                    <div className="input-field">
                        <input type="text" required value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label>Email</label>
                    </div>
                    <div className="input-field">
                        <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                        <label>Mật khẩu</label>
                    </div>
                    <div className="input-field">
                        <input type="password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        <label>Xác nhận mật khẩu</label>
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

export default FRegister;
