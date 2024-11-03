import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';
import Logo from '../../../assets/images/fluent-mdl2_education.png';

const Sidebar = () => {
  useEffect(() => {
    let list = document.querySelectorAll('.navigation li');
    list.forEach((item) => {
      item.addEventListener('mouseover', () => {
        list.forEach((li) => li.classList.remove('hovered'));
        item.classList.add('hovered');
      });
    });
  }, []);

  return (
    <div className='container'>
      <div className='sidebar'>
        <ul className='navigation'>
          <li>
            <Link to="/">
              <div className='logo'>
                <img src={Logo} className="fluent-mdl2_education.png" alt="Logo" />
              </div>
            </Link>
          </li>

          <li>
            <Link to="/tutor-dashboard">
              <span className='icon'><ion-icon name="home-outline"></ion-icon></span>
              <span className='title'>Trang chủ</span>
            </Link>
          </li>

          <li>
            <Link to="class-management">
              <span className='icon'><ion-icon name="search-outline"></ion-icon></span>
              <span className='title'>Quản lý lớp</span>
            </Link>
          </li>

          <li>
            <Link to="class-registration">
              <span className='icon'><ion-icon name="folder-open-outline"></ion-icon></span>
              <span className='title'>Đăng ký lớp</span>
            </Link>
          </li>

          <li>
            <Link to="teaching-schedule">
              <span className='icon'><ion-icon name="calendar-outline"></ion-icon></span>
              <span className='title'>Lịch dạy</span>
            </Link>
          </li>

          <li>
            <Link to="revenue">
              <span className='icon'><ion-icon name="podium-outline"></ion-icon></span>
              <span className='title'>Doanh thu</span>
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