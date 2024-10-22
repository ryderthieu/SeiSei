import './Footer.scss'
import Logo from '../../assets/images/Logo.png'
import Location from '../../assets/icon/location.png'
import Phone from '../../assets/icon/phone.png'
import Email from '../../assets/icon/email.png'
import Clock from '../../assets/icon/clock.png'

const Footer = () => {
    return (
        <div className='footer-container'>
            <a className='logo-container' href='#TrangChu'>
                <img 
                    className='logo'
                    src={Logo}
                />
            </a>
            <div className='footer-items'>

                <div className='footer-item'>
                    <div className='title'>
                        THÔNG TIN LIÊN HỆ
                    </div>
                    <ul className='footer-listItems'>
                            <li className='footer-listItem'>
                                <a className = 'link' href='/'>
                                    <img className='footer-icon'
                                        src={Location}
                                    />
                                    <div className='footer-itemText'>
                                        Địa chỉ: Số 1, đường Hàn Thuyên, Linh Trung, Thủ Đức
                                    </div>
                                </a>
                            </li>
                            <li className='footer-listItem'>
                                <a className = 'link' href='/'>
                                    <img className='footer-icon'
                                        src={Phone}
                                    />
                                    <div className='footer-itemText'>
                                        Số điện thoại: 0123456789
                                    </div>
                                </a>
                            </li>
                            <li className='footer-listItem'>
                                <a className = 'link' href='/'>
                                    <img className='footer-icon'
                                        src={Email}
                                    />
                                    <div className='footer-itemText'>
                                        Email: contact@seisei.gm.com
                                    </div>
                                </a>
                            </li>
                            <li className='footer-listItem'>
                                <a className = 'link' href='/'>
                                    <img className='footer-icon'
                                        src={Clock}
                                    />
                                    <div className='footer-itemText'>
                                        Thời gian làm việc: Thứ 2 đến thứ 7, 8am - 10pm
                                    </div>
                                </a>
                            </li>
                        </ul>
                </div>
                <div className='footer-item'>
                    <div className='title'>
                        LIÊN KẾT
                    </div>
                    <ul className='footer-listItems'>
                            <li className='footer-listItem'>
                                <a className = 'link footer-itemText' href='#TrangChu'>
                                    Trang chủ
                                </a>
                            </li>
                            <li className='footer-listItem'>
                                <a className = 'link footer-itemText' href='#GioiThieu'>
                                    Giới thiệu
                                </a>
                            </li>
                            <li className='footer-listItem'>
                                <a className = 'link footer-itemText' href='#LopHoc'>
                                    Các lớp học
                                </a>
                            </li>
                            <li className='footer-listItem'>
                                <a className = 'link footer-itemText' href='#DangKyLop'>
                                    Đăng ký lớp
                                </a>
                            </li>
                            <li className='footer-listItem'>
                                <a className = 'link footer-itemText' href='#LuuY'>
                                    Lưu ý
                                </a>
                            </li>
                        </ul>
                </div>
            </div>
            <div className='footer-term'>
                <a href = '/' className='term-item'>
                    Điều khoản sử dụng
                </a>
                <a href = '/' className='term-item'>
                    Chính sách bảo mật
                </a>
                <a href = '/' className='term-item'>
                    &copy; 2024 seisei. All rights reserved.
                </a>
            </div>
        </div>
    )
}

export default Footer