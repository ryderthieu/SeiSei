import React from "react";
import { Link } from "react-router-dom";
import "./OnlineClass.scss";

const OnlineClass = () => {
  return (
    <div className="online-class">
      <div className="online-class__header">
        <Link to="/" className="back-link">
          Quay lại
        </Link>
        <h1 className="class-title">HỌC ONLINE</h1>
      </div>
      <div className="class-info">
        <div className="class-info__details">
          <div className="class-info__title">Toán 10</div>
          <div className="class-info__time">03 - 06 - 2024 | 11:00 AM</div>
        </div>
        <div className="class-video">
          <div className="class-video__content">
            {/* Nội dung video sẽ nằm ở đây */}
            <div className="video-placeholder">Video</div>
          </div>
        </div>
      </div>
      <div className="class-controls">
        <div className="control-buttons">
          <button className="control-button">🎤</button>
          <button className="control-button">📹</button>
          <button className="control-button">💬</button>
          <button className="control-button">•••</button>
        </div>
        <button className="start-class-btn">Bắt đầu học</button>
      </div>
    </div>
  );
};

export default OnlineClass;
