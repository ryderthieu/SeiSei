import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ResetPassword.scss";
import loginImg from "../../..//assets/images/cuate.png";
import PasswordInput from "../../../components/PasswordInput/PasswordInput";

const ResetPassword = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/forgot-password/success-reset-password");
  };

  return (
    <div className="reset-password">
      <div className="reset-password__background">
        <img
          src={loginImg}
          className="reset-password__background--img"
          alt="Login"
        />
      </div>
      <div className="reset-password__content">
        <h3 className="reset-password__title">TẠO MẬT KHẨU MỚI</h3>
        <form onSubmit={handleSubmit} className="reset-password__form">
          <div className="reset-password__wrapper">
            <PasswordInput
                label="Nhập mật khẩu"
            />
            <PasswordInput 
                label="Nhập lại mật khẩu"
            />
          </div>
          <button type="submit" className="reset-password__submit">
            Tiếp tục
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;