
import './Header.scss'
import Logo from '../../assets/images/Logo.png'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div className="header-container">
            <div className='header-items'>
                <Link className='logo-link' to='/'>
                    <img className="header-logo" src={Logo} alt='logo'/>
                </Link>
            </div>

            <div className='header-items'>
                <ul className="header-menu">
                    <li className="header-menu__item">
                        <a className='header-menu__item-link' href='#TrangChu'>Trang chủ</a>
                    </li>
                    <li className="header-menu__item">
                        <a className='header-menu__item-link' href='#GioiThieu'>Giới thiệu</a>
                    </li>
                    <li className="header-menu__item">
                        <a className='header-menu__item-link' href='#LopHoc'>Các lớp học</a>
                    </li>
                    <li className="header-menu__item">
                        <a className='header-menu__item-link' href='#DangKyLop'>Đăng ký lớp</a>
                    </li>
                    <li className="header-menu__item">
                        <a className='header-menu__item-link' href='#LuuY'>Lưu ý</a>
                    </li>
                    <li className="header-menu__item">
                        <a className='header-menu__item-link' href='#LienHe'>Liên hệ</a>
                    </li>
                </ul>
            </div>

            <div className='header-items'>
                <Link to = '/login' className='login'>
                    Đăng nhập
                </Link>

                <Link to='/register' className='register'>
                    Đăng ký
                </Link>
            </div>
        </div>
    )
}

export default Header