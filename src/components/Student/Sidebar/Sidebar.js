import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';
import Logo from '../../../assets/images/fluent-mdl2_education.png';

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleMouseOver = (index) => {
    setSelectedItem(index);
  };

  return (
    <div className='container'>
      <div className='sidebar'>
        <ul className='navigation'>
          <li 
            onClick={() => setSelectedItem(0)} 
            className={selectedItem === 0 ? 'selected' : ''}
          >
            <Link to="/">
              <div className='logo'>
                <img src={Logo} className="fluent-mdl2_education.png" alt="Logo" />
              </div>
            </Link>
          </li>

          <li 
            onClick={() => setSelectedItem(1)} 
            className={selectedItem === 1 ? 'selected' : ''}
          >
            <Link to="/student-dashboard">
              <span className='icon'><ion-icon name="home-outline"></ion-icon></span>
              <span className='title'>Trang chủ</span>
            </Link>
          </li>

          <li 
            onClick={() => setSelectedItem(2)} 
            className={selectedItem === 2 ? 'selected' : ''}
          >
            <Link to="find-tutors">
              <span className='icon'><ion-icon name="search-outline"></ion-icon></span>
              <span className='title'>Tìm gia sư</span>
            </Link>
          </li>

          <li 
            onClick={() => setSelectedItem(3)} 
            className={selectedItem === 3 ? 'selected' : ''}
          >
            <Link to="courses">
              <span className='icon'><ion-icon name="folder-open-outline"></ion-icon></span>
              <span className='title'>Lớp học của tôi</span>
            </Link>
          </li>

          <li 
            onClick={() => setSelectedItem(4)} 
            className={selectedItem === 4 ? 'selected' : ''}
          >
            <Link to="schedule">
              <span className='icon'><ion-icon name="calendar-outline"></ion-icon></span>
              <span className='title'>Lịch học</span>
            </Link>
          </li>

          <li 
            onClick={() => setSelectedItem(9)} 
            className={selectedItem === 9 ? 'selected' : ''}
          >
            <Link to="online-class">
              <span className='icon'><ion-icon name="videocam-outline"></ion-icon></span>
              <span className='title'>Lớp học trực tuyến</span>
            </Link>
          </li>

          <li 
            onClick={() => setSelectedItem(5)} 
            className={selectedItem === 5 ? 'selected' : ''}
          >
            <Link to="study-results">
              <span className='icon'><ion-icon name="podium-outline"></ion-icon></span>
              <span className='title'>Kết quả học tập</span>
            </Link>
          </li>

          <li 
            onClick={() => setSelectedItem(6)} 
            className={selectedItem === 6 ? 'selected' : ''}
          >
            <Link to="payment">
              <span className='icon'><ion-icon name="card-outline"></ion-icon></span>
              <span className='title'>Thanh toán</span>
            </Link>
          </li>

          <li 
            onClick={() => setSelectedItem(7)} 
            className={selectedItem === 7 ? 'selected' : ''}
          >
            <Link to="/">
              <span className='icon'><ion-icon name="settings-outline"></ion-icon></span>
              <span className='title'>Hồ sơ cá nhân</span>
            </Link>
          </li>

          <li 
            onClick={() => setSelectedItem(8)} 
            className={selectedItem === 8 ? 'selected' : ''}
          >
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
