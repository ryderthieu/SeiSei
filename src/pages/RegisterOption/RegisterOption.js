import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from "react-router-dom";
import './RegisterOption.scss';
import loginImg from '../../assets/images/cuate.png';

const RegisterOption = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/dashboard');
    };

    return (
        <div className="register-container">
            <div className='register-imgs'>
                <img src={loginImg} className='register-img' alt="Login" />
            </div>
            <div className="register-content">
                <form onSubmit={handleSubmit}>
                    <div className="register-content_header">
                        <div className="register-content__title1">Đăng ký</div>
                    </div>

                    <div className="register-content_title2">
                        <p>
                            Đăng ký với tư cách
                        </p>
                    </div>
                    <div className='register-option'>
                        <Link to={'/tutor-register'}>
                            <button type="submit">Gia sư</button>
                        </Link>
                        <Link to={'/student-register'}>
                            <button type="submit">Học viên</button>
                        </Link>
                    </div>

                    <div className="login">
                        <p>
                            Đã có tài khoản?
                            <Link to={'/login-option'}> Login</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterOption;