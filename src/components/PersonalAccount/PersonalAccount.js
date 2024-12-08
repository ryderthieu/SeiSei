import React, { useState } from "react";
import StudentAvatar from "../../assets/images/student.jpg";
import "./PersonalAccount.scss";
import Button from "../Button/Button";

const PersonalAccount = () => {
  const [avatar, setAvatar] = useState(StudentAvatar);
  const [newAvatar, setNewAvatar] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Xử lý khi người dùng chọn ảnh mới
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewAvatar(reader.result); // Lưu ảnh mới để hiển thị
        setIsEditing(true); // Hiển thị các nút "OK" và "Hủy"
      };
      reader.readAsDataURL(file);
    }
  };

  // Lưu ảnh mới
  const handleSaveAvatar = () => {
    setAvatar(newAvatar); // Lưu ảnh mới vào state avatar
    setIsEditing(false); // Quay lại trạng thái ban đầu
  };

  // Hủy thay đổi ảnh
  const handleCancelAvatar = () => {
    setNewAvatar(null); // Hủy ảnh mới đã chọn
    setIsEditing(false); // Quay lại trạng thái ban đầu
  };

  return (
    <div className="personal-account">
      <div className="personal-account__avatar">
        <img
          src={newAvatar || avatar} // Nếu có ảnh mới, hiển thị ảnh mới, nếu không thì hiển thị ảnh cũ
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

      {!isEditing ? (
        <div className="personal-account__avatar-update-btn">
          <label htmlFor="avatar-upload">Cập nhật ảnh đại diện</label>
          <input
            id="avatar-upload"
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            style={{ display: "none" }}
          />
        </div>
      ) : (
        <div className="button-container">
          <div onClick={handleSaveAvatar}>
            <Button
              title='OK'
            />
          </div>

          <div onClick={handleCancelAvatar}>
            <Button
              title='Hủy'
              type="secondary"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalAccount;
