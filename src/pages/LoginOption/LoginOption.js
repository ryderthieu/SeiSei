import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from "react-router-dom";
import './LoginOption.scss';
import loginImg from '../../assets/images/cuate.png';

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
                    </div>

                    <div className="login-content_title2">
                        <p>
                            Đăng nhập với tư cách
                        </p>
                    </div>
                    <div className='login-option'>
                        <Link to={'/loginGV'}>
                            <button type="submit">Gia sư</button>
                        </Link>
                        <Link to={'/loginHV'}>
                            <button type="submit">Học viên</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;