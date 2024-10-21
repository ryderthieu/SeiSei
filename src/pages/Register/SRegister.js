import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from "react-router-dom";
import './Register.scss';
import loginImg from '../../assets/images/Login/login.png';

const SRegister = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/fregister');
    };

    return (
        <div className="register-container">
            <div className='register-imgs'>
                <img src={loginImg} className='register-img' alt="Register" />
            </div>
            <div className="register-content">
                <form onSubmit={handleSubmit}>
                    <div className="register-content__header">
                        <div className="register-content__title1">Đăng ký</div>
                        <div className="register-content__title2">Học viên</div>
                    </div>

                    <div className="input-field">
                        <input type="text" required id="name" />
                        <label htmlFor="name">Enter your name</label>
                    </div>
                    <div className="input-field">
                        <input type="date" required id="date" />
                        <label htmlFor="date">Birthday</label>
                    </div>
                    <div className="input-field">
                        <select id="gender" name="gender" required>
                            <option value="">Chọn giới tính</option>
                            <option value="male">Nam</option>
                            <option value="female">Nữ</option>
                            <option value="other">Khác</option>
                        </select>
                    </div>
                    <div className="input-field">
                        <input type="text" required id="phone" />
                        <label htmlFor="phone">Enter your phone</label>
                    </div>
                    <div className="input-field">
                        <input type="text" required id="address" />
                        <label htmlFor="address">Enter your address</label>
                    </div>
                    <Link class="next" to={'/sregister'}> Tiếp theo</Link>
                </form>
            </div>
        </div>
    );
}

export default SRegister;
