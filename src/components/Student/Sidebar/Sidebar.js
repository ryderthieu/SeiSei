import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.scss";
import Logo from "../../../assets/images/fluent-mdl2_education.png";

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const location = useLocation();
  const handleMouseOver = (index) => {
    setSelectedItem(index);
  };
  useEffect(() => {
    const path = location.pathname;
    
    switch (true) {
      case path === "/dashboard":
        setSelectedItem(1);
        break;
      case path.startsWith("/dashboard/find-tutors"):
        setSelectedItem(2);
        break;
      case path.startsWith("/dashboard/courses"):
        setSelectedItem(3);
        break;
      case path.startsWith("/dashboard/schedule"):
        setSelectedItem(4);
        break;
      case path.startsWith("/dashboard/online-class"):
        setSelectedItem(5);
        break;
      case path.startsWith("/dashboard/study-results"):
        setSelectedItem(6);
        break;
      case path.startsWith("/dashboard/payment"):
        setSelectedItem(7);
        break;
      case path.startsWith("/dashboard/profile"):
        setSelectedItem(8);
        break;
      default:
        setSelectedItem(null);
        break;
    }
  }, [location]);
  
  return (
    <div className="container">
      <div className="sidebar">
        <ul className="navigation">
          <li>
            <Link to="/" >
              <div className="logo">
                <img src={Logo} className="logo" alt="Logo" />
              </div>
            </Link>
          </li>

          <li
            className={selectedItem === 1 ? "selected" : ""}
          >
            <Link to="/dashboard">
              <span className="icon">
                <ion-icon name="home-outline"></ion-icon>
              </span>
              <span className="title">Trang chủ</span>
            </Link>
          </li>

          <li
            className={selectedItem === 2 ? "selected" : ""}
          >
            <Link to="find-tutors">
              <span className="icon">
                <ion-icon name="search-outline"></ion-icon>
              </span>
              <span className="title">Tìm gia sư</span>
            </Link>
          </li>

          <li
            className={selectedItem === 3 ? "selected" : ""}
          >
            <Link to="courses">
              <span className="icon">
                <ion-icon name="folder-open-outline"></ion-icon>
              </span>
              <span className="title">Lớp học của tôi</span>
            </Link>
          </li>

          <li
            className={selectedItem === 4 ? "selected" : ""}
          >
            <Link to="schedule">
              <span className="icon">
                <ion-icon name="calendar-outline"></ion-icon>
              </span>
              <span className="title">Lịch học</span>
            </Link>
          </li>

          <li
            className={selectedItem === 5 ? "selected" : ""}
          >
            <Link to="online-class">
              <span className="icon">
                <ion-icon name="videocam-outline"></ion-icon>
              </span>
              <span className="title">Lớp học trực tuyến</span>
            </Link>
          </li>

          <li
            className={selectedItem === 6 ? "selected" : ""}
          >
            <Link to="study-results">
              <span className="icon">
                <ion-icon name="podium-outline"></ion-icon>
              </span>
              <span className="title">Kết quả học tập</span>
            </Link>
          </li>

          <li
            className={selectedItem === 7 ? "selected" : ""}
          >
            <Link to="payment">
              <span className="icon">
                <ion-icon name="card-outline"></ion-icon>
              </span>
              <span className="title">Thanh toán</span>
            </Link>
          </li>

          <li
            className={selectedItem === 8 ? "selected" : ""}
          >
            <Link to="profile">
              <span className="icon">
                <ion-icon name="settings-outline"></ion-icon>
              </span>
              <span className="title">Hồ sơ cá nhân</span>
            </Link>
          </li>

          <li
            className={selectedItem === 9 ? "selected" : ""}
          >
            <Link to="/">
              <span className="icon">
                <ion-icon name="log-out-outline"></ion-icon>
              </span>
              <span className="title">Đăng xuất</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
