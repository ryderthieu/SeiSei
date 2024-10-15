import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

import './Login.scss'
import loginImg from '../../assets/images/Login/login.png';

import './Login.scss'
const Login = () => {
    return (
        <div className="login-container">
            <div className='login-imgs'>
                <img src={loginImg} className='login-img'/>
            </div>
            <div className="login-content">
                <div className="login-content__header">
                    <div className="login-content__title1">Đăng nhập</div>
                    <div className="login-content__title2">Học viên</div>
                </div>
                <div className="login-content__form">
                    <div className="login-content__form__input">
                        <span class="icon"><ion-icon name="mail-outline"></ion-icon></span>
                        <input type="text" required/>
                        <label>Email</label>
                    </div>
                    <div className="login-content__form__input">
                        <span class="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                        <input type="password" required/>
                        <label>Mật khẩu</label>
                    </div>
                    <div className="login-content__form__btn-container">
                        <button>Đăng nhập</button>
                    </div>
                </div>
                <div className="login-content__register">
                    <span>Chưa có tài khoản?</span>
                    <Link to="/register">Đăng ký</Link>
                </div>
            </div>
        </div>
    )
}

export default Login