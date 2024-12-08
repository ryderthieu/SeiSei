import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ResetPassword.scss";
import loginImg from "../../..//assets/images/cuate.png";
import AuthInput from "../../../components/AuthInput/AuthInput";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

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
            <AuthInput
                type="password"
                label="Nhập mật khẩu"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <AuthInput
                type="password"
                label="Nhập lại mật khẩu"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
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