import React, {useState} from "react";
import "./OnlineClass.scss";
import BackButton from '../../../../components/BackButton/BackButton'

const OnlineClass = () => {
  const [isMicroOn, setIsMicroOn] = useState(true);
  const [isCameraOn, setIsCameraOn] = useState(true);

  const toggleMic = () => {
    setIsMicroOn(prev => !prev);
  }

  const toggleCam = () => {
    setIsCameraOn(prev => !prev);
  }

  return (
    <div className="online-class__container">
      <BackButton />
      <div className="online-class__header">
        <div className="online-class__header-title">HỌC ONLINE</div>
      </div>
      
      <div className="online-class__meeting">
        <div className="online-class__meeting-header">
          <div className="online-class__meeting-icon">
            <ion-icon name="videocam"></ion-icon>
          </div>
          <div className="online-class__meeting-info">
            <div className="online-class__meeting-name">Toán 10</div>
            <div className="online-class__meeting-time">02/12/2024 | 9:00 - 10:30</div>
          </div>
        </div>
        <div className="online-class__screen">
            <div className="online-class__screen-button">Bắt đầu học</div>
        </div>
        <div className="online-class__controls">
          <div 
            className={`online-class__control ${isMicroOn ? "online-class__control--mic-on" : "online-class__control--mic-off"}`}
            onClick={toggleMic}
          >
            <ion-icon name={isMicroOn ? "mic-outline" : "mic-off-outline"}></ion-icon>
          </div>
          <div className={`online-class__control ${isCameraOn ? "online-class__control--camera-on" : "online-class__control--camera-off"}`}
            onClick={toggleCam}
          >
            <ion-icon name={isCameraOn ? "videocam-outline" : "videocam-off-outline"}></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineClass;
