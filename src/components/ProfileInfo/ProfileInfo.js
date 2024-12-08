import React, { useState } from "react";
import TextInput from "../TextInput/TextInput";
import TextAreaInput from "../TextAreaInput/TextAreaInput";
import "./ProfileInfo.scss";

const ProfileInfo = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    gender: "Nam",
    email: "22521038@gm.uit.edu.vn",
    hometown: "Phú Yên",
    phone: "+84 375022156",
    introduction: `• Thân em như tấm lụa đào. Đã đông nơi chuộng lại nhiều nơi ưa\n• Cuối cùng thì, tình yêu bền vững nhất vẫn là tình yêu nước. Con đường đúng đắn nhất vẫn là con đường cách mạng`,
  });

  const [initialProfile, setInitialProfile] = useState(profile); // Lưu lại thông tin ban đầu

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleEdit = () => {
    if (isEditing) {
      setInitialProfile(profile); // Nếu lưu, cập nhật lại giá trị ban đầu
    }
    setIsEditing(!isEditing);
  };

  const cancelEdit = () => {
    setProfile(initialProfile); // Trở lại thông tin ban đầu khi hủy
    setIsEditing(false);
  };

  return (
    <div className="profile-info">
      <div className="profile-info__form-row">
        <TextInput
          label="Giới tính"
          name="gender"
          value={profile.gender}
          readOnly={!isEditing}
          onChange={handleInputChange}
        />
        <TextInput
          label="Email"
          type="email"
          name="email"
          value={profile.email}
          readOnly={!isEditing}
          onChange={handleInputChange}
        />
      </div>
      <div className="profile-info__form-row">
        <TextInput
          label="Quê quán"
          name="hometown"
          value={profile.hometown}
          readOnly={!isEditing}
          onChange={handleInputChange}
        />
        <TextInput
          label="Số điện thoại"
          name="phone"
          value={profile.phone}
          readOnly={!isEditing}
          onChange={handleInputChange}
        />
      </div>
      <TextAreaInput
        label="Giới thiệu chung"
        name="introduction"
        value={profile.introduction}
        readOnly={!isEditing}
        onChange={handleInputChange}
      />
      <div className="profile-info__buttons">
        {isEditing ? (
          <>
            <button
              className="profile-info__button profile-info__button--cancel"
              onClick={cancelEdit}
            >
              Hủy
            </button>
            <button
              className="profile-info__button profile-info__button--save"
              onClick={toggleEdit}
            >
              Lưu
            </button>
          </>
        ) : (
          <button
            className="profile-info__button profile-info__button--edit"
            onClick={toggleEdit}
          >
            Chỉnh sửa
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
