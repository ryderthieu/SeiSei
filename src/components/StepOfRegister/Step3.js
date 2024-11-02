import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../pages/Register/Register.scss';
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

const Step3 = ({ formData, setFormData, prevStep, handleSubmit }) => {
  const navigate = useNavigate();

  const handleCccdChange = (e) => {
    setFormData({ ...formData, cccd: e.target.files[0] });
  };

  const handleAvatarChange = (e) => {
    setFormData({ ...formData, avatar: e.target.files[0] });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, acceptTerms: e.target.checked });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <div className="register-container">
      <div className='register-imgs'>
        <img src={loginImg} className='register-img' alt="Register" />
      </div>
      <div className="register-content">
        <form onSubmit={handleFormSubmit}>
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

          <div className="accept">
            <label htmlFor="accept">
              <input type="checkbox" id="accept" checked={formData.acceptTerms} onChange={handleCheckboxChange} />
              <span>Chấp nhận điều khoản sử dụng</span>
            </label>
          </div>

          <div className="button-container">
            <button type="button" className="back" onClick={prevStep}>
              <LeftArrowIcon /> Quay về
            </button>
            <button type="submit" className="next">
              Hoàn tất <RightArrowIcon />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step3;