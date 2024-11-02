import "./Sidebar.scss";
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/fluent-mdl2_education.png'

const Sidebar = () => {
  return (
  <div className='container'>
    <div className='sidebar'>
      <ul>
        <li>
          <Link to="/Homepage">
          <div className='logo'>
            <img src={Logo} className="fluent-mdl2_education.png"/>
            {/* <div className='description'>
              <p className='title'>SeiSei</p>
              <p className='title'>Ánh sáng tri thức</p>
            </div> */}
          </div>
          </Link>
        </li>

        <li>
          <Link to="/">
            <span className='icon'><ion-icon name="home-outline"></ion-icon></span>
            <span className='title'>Trang chủ</span>
          </Link>
        </li>

        <li>
          <Link to="/">
            <span className='icon'><ion-icon name="search-outline"></ion-icon></span>
            <span className='title'>Tìm gia sư</span>
          </Link>
        </li>

        <li>
          <Link to="/">
            <span className='icon'><ion-icon name="folder-open-outline"></ion-icon></span>
            <span className='title'>Lớp học của tôi</span>
          </Link>
        </li>

        <li>
          <Link to="/">
            <span className='icon'><ion-icon name="calendar-outline"></ion-icon></span>
            <span className='title'>Lịch học</span>
          </Link>
        </li>

        <li>
          <Link to="/">
            <span className='icon'><ion-icon name="podium-outline"></ion-icon></span>
            <span className='title'>Kết quả học tập</span>
          </Link>
        </li>

        <li>
          <Link to="/">
            <span className='icon'><ion-icon name="card-outline"></ion-icon></span>
            <span className='title'>Thanh toán</span>
          </Link>
        </li>

        <li>
          <Link to="/">
            <span className='icon'><ion-icon name="settings-outline"></ion-icon></span>
            <span className='title'>Hồ sơ cá nhân</span>
          </Link>
        </li>

        <li>
          <Link to="/">
            <span className='icon'><ion-icon name="log-out-outline"></ion-icon></span>
            <span className='title'>Đăng xuất</span>
          </Link>
        </li>
      </ul>
    </div>
  </div>
  );
};


export default Sidebar;
