import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from "react-router-dom";
import './ForgotPassword.scss';
import loginImg from '../../assets/images/cuate.png';
import TextInput from "../../components/TextInput/TextInput";

const ForgotPassword = () => {
    return (
        <div className="forgot-password">
            <div className='forgot-password__background'>
                <img src={loginImg} className='forgot-password__background--img' alt="Login" />
            </div>
            <div className="forgot-password__content">
              <h3 className="forgot-password__title">QUÊN MẬT KHẨU</h3>
              <p className="forgot-password__subtitle">Vui lòng nhập Email bạn đã đăng ký</p>
              <form>
                <div className="forgot-password__wrapper">
                  <label className="forgot-password__label" forHTML="email">Email</label>
                  <input id="email" className="forgot-password__input" type="email" required/>
                </div>
              </form>
              <button type="submit" className="forgot-password__submit"><Link to="/verification-code">Tiếp tục</Link></button>
            </div>
        </div>
    );
};

export default ForgotPassword;