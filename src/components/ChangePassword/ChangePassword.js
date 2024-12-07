import React, { useState } from "react";
import "./ChangPassword.scss";
import PasswordInput from "../PasswordInput/PasswordInput";

const ChangPassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="change-password__container">
      <h3 className="change-password__header">HOÀN TẤT CÁC BƯỚC ĐỂ ĐỔI MẬT KHẨU</h3>
      <form className="change-password__form">
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
    </div>
  );
};

export default ChangPassword;
