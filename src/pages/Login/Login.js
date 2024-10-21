import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

import './Login.scss'
import loginImg from '../../assets/images/Login/login.png';

const Login = () => {
    return (
        <div className="login-container">
            <div className='login-imgs'>
                <img src={loginImg} className='login-img'/>
            </div>
            <div className="login-content">
                <form action='#'>
                    <div className="login-content__header">
                        <div className="login-content__title1">Đăng nhập</div>
                        <div className="login-content__title2">Học viên</div>
                    </div>

                    <div class="input-field">
                        <input type="text" required/>
                        <label>Enter your email</label>
                    </div>
                    <div class="input-field">
                        <input type="password" required/>
                        <label>Enter your password</label>
                    </div>
                    <div class="forget">
                        <label for="remember">
                            <input type="checkbox" id="remember"/>
                            <p>Remember me</p>
                        </label>
                        <Link to={'/register'}>Forgot password?</Link>
                    </div>
                    <button type="submit">Đăng nhập</button>
                    <div class="register">
                        <p>
                            Chưa có tài khoản?
                            <Link to={'/fregister'}> Register</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login