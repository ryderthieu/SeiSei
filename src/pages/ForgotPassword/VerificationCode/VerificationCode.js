import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./VerificationCode.scss";
import loginImg from "../../..//assets/images/cuate.png";

const VerificationCode = () => {
  const navigate = useNavigate();
  const [codes, setCodes] = useState(["", "", "", ""]);

  const handleInput = (value, index) => {
    if(value.length > 1){
        value = value.slice(-1); //Chỉ lấy ký tự cuối cùng
    }

    const newCodes = [...codes];
    newCodes[index] = value;
    setCodes(newCodes);

    if (value && index < codes.length - 1) {
        document.getElementById(`code-${index + 1}`).focus();
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/forgot-password/reset-password");
  };

  return (
    <div className="verification-code">
      <div className="verification-code__background">
        <img
          src={loginImg}
          className="verification-code__background--img"
          alt="Login"
        />
      </div>
      <div className="verification-code__content">
        <h3 className="verification-code__title">NHẬP MÃ XÁC MINH</h3>
        <p className="verification-code__subtitle">
            Chúng tôi vừa gửi một mã code đến Email mà bạn đăng ký. Vui lòng kiểm tra Email.
        </p>
        <form onSubmit={handleSubmit} className="verification-code__form">
          <div className="verification-code__wrapper">
            {codes.map((code, index) => (
                <input
                    key={index}
                    id={`code-${index}`}
                    className="verification-code__input"
                    type="text"
                    value={code}
                    maxLength="1"
                    onChange={(e) => handleInput(e.target.value, index)}
                    onFocus={(e) => e.target.select()}
                    required
                />
            ))}
          </div>
          <p className="verification-code__resend">
            Chưa nhận được mã? <button type="button" className="verification-code__resend-btn">Gửi lại</button>
          </p>
          <button type="submit" className="verification-code__submit">
            Tiếp tục
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerificationCode;