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

const SRegister = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        navigate('/tregister'); 
    };

    const handleBack = () => {
        navigate('/fregister');
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
                        <input type="text" required id="name" />
                        <label htmlFor="name">Họ tên</label>
                    </div>
                    <div className="input-field">
                        <input type="date" required id="date" />
                        <label htmlFor="date">Ngày sinh</label>
                    </div>
                    <div className="input-field">
                        <input type="text" required id="phone" />
                        <label htmlFor="phone">Số điện thoại</label>
                    </div>
                    <div className="input-field">
                        <input type="text" required id="address" />
                        <label htmlFor="address">Địa chỉ</label>
                    </div>
                    <div className="input-field">
                        <select id="gender" name="gender" required>
                            <option value="">Chọn giới tính</option>
                            <option value="male">Nam</option>
                            <option value="female">Nữ</option>
                            <option value="other">Khác</option>
                        </select>
                    </div>
                    <div className="input-field">
                        <select id="courses" name="courses" required>
                            <option value="">Chọn trình độ</option>
                            <option value="1">Lớp 1</option>
                            <option value="2">Lớp 2</option>
                            <option value="3">Lớp 3</option>
                            <option value="3">Lớp 4</option>
                            <option value="3">Lớp 5</option>
                            <option value="3">Lớp 6</option>
                            <option value="3">Lớp 7</option>
                            <option value="3">Lớp 8</option>
                            <option value="3">Lớp 9</option>
                            <option value="3">Lớp 10</option>
                            <option value="3">Lớp 11</option>
                            <option value="3">Lớp 12</option>
                        </select>
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

export default SRegister;
