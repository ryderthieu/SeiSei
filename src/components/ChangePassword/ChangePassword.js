import React, { useState } from "react";
import "./ChangPassword.scss";
import PasswordInput from "../PasswordInput/PasswordInput";
import AcceptedOverlay from "../Overlay/Overlay"
import success from "../../assets/icon/success.gif"

const ChangPassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      setShowOverlay(true);
    } else {
      alert("Mật khẩu mới không khớp.");
    }
  }

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  }
  return (
    <div className="change-password__container">
      <h3 className="change-password__header">HOÀN TẤT CÁC BƯỚC ĐỂ ĐỔI MẬT KHẨU</h3>
      <form className="change-password__form" onSubmit={handleSubmit}>
        <PasswordInput
          label="Mật khẩu cũ"
          placeholder="Nhập mật khẩu hiện tại"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <PasswordInput
          label="Mật khẩu mới"
          placeholder="Nhập mật khẩu mới trên 8 ký tự"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <PasswordInput
          label="Nhập lại mật khẩu mới"
          placeholder="Nhập lại mật khẩu mới"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit" className="change-password__submit">
          Cập nhật
        </button>
      </form>
      {showOverlay && (
        <AcceptedOverlay
          data={{
            title: "CẬP NHẬT THÀNH CÔNG",
            color: "#0D3073",
            img: success
          }}
          yes={handleCloseOverlay}
          buttonType="primary"
        />
      )}
    </div>
  );
};

export default ChangPassword;
