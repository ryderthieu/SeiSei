import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from "react-router-dom";
import './Login.scss';
import loginImg from '../../../assets/images/Login/login.png';

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/tutor-dashboard');
    };

    return (
        <div className="login-container">
            <div className='login-imgs'>
                <img src={loginImg} className='login-img' alt="Login" />
            </div>
            <div className="login-content">
                <form onSubmit={handleSubmit}>
                    <div className="login-content__header">
                        <div className="login-content__title1">Đăng nhập</div>
                        <div className="login-content__title2">Gia sư</div>
                    </div>

                    <div className="input-field">
                        <input type="text" required />
                        <label>Enter your email</label>
                    </div>
                    <div className="input-field">
                        <input type="password" required />
                        <label>Enter your password</label>
                    </div>
                    <div className="forget">
                        <label htmlFor="remember">
                            <input type="checkbox" id="remember" />
                            <p>Remember me</p>
                        </label>
                        <Link to={'/forgot-password'}>Forgot password?</Link>
                    </div>
                    <button type="submit">Đăng nhập</button>
                    <div className="register">
                        <p>
                            Chưa có tài khoản?
                            <Link to={'/register-option'}> Register</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;