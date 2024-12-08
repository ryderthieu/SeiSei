import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from "react-router-dom";
import './Login.scss';
import loginImg from '../../../assets/images/Login/login.png';

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/dashboard');
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
                        <div className="login-content__title2">Học viên</div>
                    </div>

                    <div className="input-field">
                        <input type="text" required />
                        <label>Nhập email</label>
                    </div>
                    <div className="input-field">
                        <input type="password" required />
                        <label>Nhập mật khẩu</label>
                    </div>
                    <div className="forget">
                        <label htmlFor="remember">
                            <input type="checkbox" id="remember" />
                            <p>Ghi nhớ tài khoản</p>
                        </label>
                        <Link to={'/forgot-password'}>Quên mật khẩu?</Link>
                    </div>
                    <button type="submit">Đăng nhập</button>
                    <div className="register">
                        <p>
                            Chưa có tài khoản?
                            <Link to={'/register'}> Đăng ký ngay</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;