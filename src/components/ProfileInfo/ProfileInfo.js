import React from "react";
import "./ProfileInfo.scss";

const ProfileInfo = () => {
  return (
    <div className="profile-info">
      <div className="profile-info__form-row">
        <div className="profile-info__form">
          <label className="profile-info__label">Giới tính</label>
          <input className="profile-info__input" type="text" value="Nam" readOnly />
        </div>
        <div className="profile-info__form">
          <label className="profile-info__label">Email</label>
          <input className="profile-info__input" type="email" value="22521038@gm.uit.edu.vn" readOnly />
        </div>
      </div>
      <div className="profile-info__form-row">
        <div className="profile-info__form">
          <label className="profile-info__label">Quê quán</label>
          <input className="profile-info__input" type="text" value="Phú Yên" readOnly />
        </div>
        <div className="profile-info__form">
          <label className="profile-info__label">Số điện thoại</label>
          <input className="profile-info__input" type="text" value="+84 375022156" readOnly />
        </div>
      </div>
      <div className="profile-info__form">
        <label className="profile-info__label">Giới thiệu chung</label>
        <textarea
          className="profile-info__textarea"
          readOnly
          value={`• Thân em như tấm lụa đào. Đã đông nơi chuộng lại nhiều nơi ưa\n• Cuối cùng thì, tình yêu bền vững nhất vẫn là tình yêu nước. Con đường đúng đắn nhất vẫn là con đường cách mạng`}
        />
      </div>
      <button className="profile-info__button profile-info__button--edit">Chỉnh sửa</button>
    </div>
  );
};

export default ProfileInfo;