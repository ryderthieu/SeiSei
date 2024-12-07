import React from 'react';
import StudentAvatar from "../../assets/images/student.jpg";
import "./PersonalAccount.scss";

const PersonalAccount = () => {
  return (
    <div className="personal-account">
      <div className="personal-account__avatar">
        <img 
          src={StudentAvatar} 
          alt="Student Profile" 
          className="personal-account__avatar-image"
        />
      </div>
      
      <div className="personal-account__info">
        <h3 className="personal-account__name">TRỊNH TRẦN J97</h3>
        <p className="personal-account__role">Học viên</p>
        
        <div className="personal-account__stats">
          <div className="personal-account__stat">
            <p className="personal-account__stat-number">10</p>
            <p className="personal-account__stat-label">Số lớp đã học</p>
          </div>
          <div className="personal-account__stat">
            <p className="personal-account__stat-number">5/5</p>
            <p className="personal-account__stat-label">Tỉ lệ đánh giá</p>
          </div>
        </div>
      </div>
      <button className="personal-account__avatar-update-btn">
          Cập nhật ảnh đại diện
        </button>
    </div>
  );
};

export default PersonalAccount;