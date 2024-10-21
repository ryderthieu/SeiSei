import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

import './Register.scss'
import loginImg from '../../assets/images/Login/login.png';

const FRegister = () => {
    return (
        <div className="register-container">
            <div className='register-imgs'>
                <img src={loginImg} className='register-img'/>
            </div>
            <div className="register-content">
                <form action='#'>
                    <div className="register-content__header">
                        <div className="register-content__title1">Đăng ký</div>
                        <div className="register-content__title2">Học viên</div>
                    </div>

                    <div class="input-field">
                        <input type="text" required/>
                        <label>Enter your email</label>
                    </div>
                    <div class="input-field">
                        <input type="password" required/>
                        <label>Enter your password</label>
                    </div>
                    <div class="input-field">
                        <input type="password" required/>
                        <label>Confirm your password</label>
                    </div>
                    <Link class="next" to={'/sregister'}> Tiếp theo</Link>
                </form>
            </div>
        </div>
    )
}

export default FRegister