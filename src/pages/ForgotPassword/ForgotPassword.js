import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.scss";
import loginImg from "../../assets/images/cuate.png";
import AuthInput from "../../components/AuthInput/AuthInput";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("./verification-code");
  };

  return (
    <div className="forgot-password">
      <div className="forgot-password__background">
        <img
          src={loginImg}
          className="forgot-password__background--img"
          alt="Login"
        />
      </div>
      <div className="forgot-password__content">
        <h3 className="forgot-password__title">QUÊN MẬT KHẨU</h3>
        <p className="forgot-password__subtitle">
          Vui lòng nhập Email bạn đã đăng ký
        </p>
        <form onSubmit={handleSubmit} className="forgot-password__form">
          <AuthInput 
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            required
          />
          <button type="submit" className="forgot-password__submit">
            Tiếp tục
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;