
import './Header.scss'
import Logo from '../../assets/images/Logo.png'
import { Link } from 'react-router-dom'


const Header = ({ activeSection }) => {
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
                        <a className={`header-menu__item-link ${activeSection === 'TrangChu' ? 'active' : ''}`} href='#TrangChu'>Trang chủ</a>
                    </li>
                    <li className="header-menu__item">
                        <a className={`header-menu__item-link ${activeSection === 'GioiThieu' ? 'active' : ''}`} href='#GioiThieu'>Giới thiệu</a>
                    </li>
                    <li className="header-menu__item">
                        <a className={`header-menu__item-link ${activeSection === 'LopHoc' ? 'active' : ''}`} href='#LopHoc'>Các lớp học</a>
                    </li>
                    <li className="header-menu__item">
                        <a className={`header-menu__item-link ${activeSection === 'DangKyLop' ? 'active' : ''}`} href='#DangKyLop'>Đăng ký lớp</a>
                    </li>
                    <li className="header-menu__item">
                        <a className={`header-menu__item-link ${activeSection === 'LuuY' ? 'active' : ''}`} href='#LuuY'>Lưu ý</a>
                    </li>
                    <li className="header-menu__item">
                        <a className={`header-menu__item-link ${activeSection === 'LienHe' ? 'active' : ''}`} href='#LienHe'>Liên hệ</a>
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