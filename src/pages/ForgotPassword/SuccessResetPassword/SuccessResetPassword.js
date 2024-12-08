import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SuccessResetPassword.scss";
import loginImg from "../../..//assets/images/cuate.png";
import SuccessImg from "../../../assets/icon/success.gif";

const SuccessResetPassword = () => {
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="success-reset-password">
      <div className="success-reset-password__background">
        <img
          src={loginImg}
          className="success-reset-password__background--img"
          alt="Login"
        />
      </div>
      <div className="success-reset-password__content">
        <img src={SuccessImg} alt="" className="success-reset-password__img"/>
        <h3 className="success-reset-password__title">ĐỔI MẬT KHẨU THÀNH CÔNG</h3>
        <p className="success-reset-password__subtitle">
            Từ giờ, bạn có thể đăng nhập và trải nghiệm những tiện ích tuyệt với tại SeiSei
        </p>
        <button type="submit" className="success-reset-password__submit" onClick={handleSubmit}>
            Tiếp tục
        </button>
      </div>
    </div>
  );
};

export default SuccessResetPassword;