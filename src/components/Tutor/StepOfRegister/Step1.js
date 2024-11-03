import React from 'react';
import loginImg from '../../../assets/images/Login/login.png';
import '../../../pages/Student/Register/Register.scss';

const RightArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M4.7 1.3a1 1 0 0 0 0 1.4L10.6 8 4.7 13.3a1 1 0 0 0 1.3 1.5l7-6.3a1 1 0 0 0 0-1.5l-7-6.3a1 1 0 0 0-1.4 0z" />
  </svg>
);

const Step1 = ({ formData, setFormData, nextStep }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="register-container">
      <div className='register-imgs'>
        <img src={loginImg} alt="Login" className='register-img' />
      </div>
      <div className="register-content">
        <form onSubmit={handleSubmit}>
          <div className="register-content__header">
            <h1 className="register-content__title1">Đăng ký</h1>
            <h2 className="register-content__title2">Học viên</h2>
          </div>

          <div className="input-field">
            <input type="text" name="email" required value={formData.email} onChange={handleChange} />
            <label>Email</label>
          </div>
          <div className="input-field">
            <input type="password" name="password" required value={formData.password} onChange={handleChange} />
            <label>Mật khẩu</label>
          </div>
          <div className="input-field">
            <input type="password" name="confirmPassword" required value={formData.confirmPassword} onChange={handleChange} />
            <label>Xác nhận mật khẩu</label>
          </div>

          <div className="button-container">
            <button type="submit" className="next">
              Tiếp theo <RightArrowIcon />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step1;