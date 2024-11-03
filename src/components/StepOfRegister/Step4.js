import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../pages/Student/Register/Register.scss';
import loginImg from '../../assets/images/Login/login.png';

const Step4 = ({ formData, setFormData, prevStep, handleSubmit }) => {
  const navigate = useNavigate();

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

          <div className="message-container" style={{ textAlign: 'center', marginBottom: '20px' }}>
            <p style={{ fontSize: '2rem', color: '#004B7D', fontWeight: 'bold', lineHeight: '3'}}>Bạn đã đăng ký thành công</p>
            <p style={{ fontSize: '1.2rem', color: '#ccc' }}>Hãy đăng nhập và trải nghiệm những tiện ích tuyệt vời tại SeiSei!</p>
          </div>

          <div className="button-container" style={{ display: 'flex', justifyContent: 'center' }}>
            <button
              type="submit"
              className="final"
              style={{
                backgroundColor: '#076DB2',
                color: '#fff',
                fontSize: '1.6rem',
                fontWeight: '600',
                border: 'none',
                padding: '12px 20px',
                borderRadius: '3px',
                border: '2px solid transparent',
                transition: '0.3s ease',
                textDecoration: 'none',
                marginTop: '40px',
                cursor: 'pointer'
              }}
            >
              Đăng nhập
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step4;