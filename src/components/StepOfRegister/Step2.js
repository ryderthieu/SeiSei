import React from 'react';
import loginImg from '../../assets/images/Login/login.png';
import '../../pages/Register/Register.scss';

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

const Step2 = ({ formData, setFormData, nextStep, prevStep }) => {
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
        <img src={loginImg} className='register-img' alt="Register" />
      </div>
      <div className="register-content">
        <form onSubmit={handleSubmit}>
          <div className="register-content__header">
            <div className="register-content__title1">Đăng ký</div>
            <div className="register-content__title2">Học viên</div>
          </div>

          <div className="input-field">
            <input type="text" name="name" required value={formData.name} onChange={handleChange} />
            <label htmlFor="name">Họ tên</label>
          </div>
          <div className="input-field">
            <input type="date" name="date" required value={formData.date} onChange={handleChange} />
            <label htmlFor="date">Ngày sinh</label>
          </div>
          <div className="input-field">
            <input type="text" name="phone" required value={formData.phone} onChange={handleChange} />
            <label htmlFor="phone">Số điện thoại</label>
          </div>
          <div className="input-field">
            <input type="text" name="address" required value={formData.address} onChange={handleChange} />
            <label htmlFor="address">Địa chỉ</label>
          </div>
          <div className="input-field">
            <select name="gender" required value={formData.gender} onChange={handleChange}>
              <option value="">Chọn giới tính</option>
              <option value="male">Nam</option>
              <option value="female">Nữ</option>
              <option value="other">Khác</option>
            </select>
          </div>
          <div className="input-field">
            <select name="courses" required value={formData.courses} onChange={handleChange}>
              <option value="">Chọn trình độ</option>
              <option value="1">Lớp 1</option>
              <option value="2">Lớp 2</option>
              <option value="3">Lớp 3</option>
              <option value="4">Lớp 4</option>
              <option value="5">Lớp 5</option>
              <option value="6">Lớp 6</option>
              <option value="7">Lớp 7</option>
              <option value="8">Lớp 8</option>
              <option value="9">Lớp 9</option>
              <option value="10">Lớp 10</option>
              <option value="11">Lớp 11</option>
              <option value="12">Lớp 12</option>
            </select>
          </div>
          <div className="button-container">
            <button type="button" className="back" onClick={prevStep}>
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
};

export default Step2;