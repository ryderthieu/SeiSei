import './Header.scss'
import Logo from '../../assets/images/Logo.png'


const Header = () => {
    return (
        <div className="header-container">
            <div className='header-items'>
                <a className='logo-link' href='/'>
                    <img className="header-logo" src={Logo} alt='logo'/>
                </a>
            </div>

            <div className='header-items'>
                <ul className="header-menu">
                    <li className="header-menu__item">
                        <a className='header-menu__item-link' href='/'>Trang chủ</a>
                    </li>
                    <li className="header-menu__item">
                        <a className='header-menu__item-link' href='/gioi-thieu'>Giới thiệu</a>
                    </li>
                    <li className="header-menu__item">
                        <a className='header-menu__item-link' href='cac-lop-hoc'>Các lớp học</a>
                    </li>
                    <li className="header-menu__item">
                        <a className='header-menu__item-link' href='dang-ky-lop'>Đăng ký lớp</a>
                    </li>
                    <li className="header-menu__item">
                        <a className='header-menu__item-link' href='/luu-y'>Lưu ý</a>
                    </li>
                    <li className="header-menu__item">
                        <a className='header-menu__item-link' href='/lien-he'>Liên hệ</a>
                    </li>
                </ul>
            </div>

            <div className='header-items'>
                <button className='login'>
                    Đăng nhập
                </button>

                <button className='register'>
                    Đăng ký
                </button>
            </div>
        </div>
    )
}

export default Header