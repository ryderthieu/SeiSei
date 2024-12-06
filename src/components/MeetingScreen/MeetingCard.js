import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./MeetingCard.scss";

const MeetingCard = ({
  meetingName,
  meetingTime,
  linkTo,
  showPresentation,
  showMessages,
}) => {

  const [isMicroOn, setIsMicroOn] = useState(true);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isPresent, setIsPresent] = useState(false);
  const [isMessagesVisible, setIsMessagesVisible] = useState(false);

  const toggleMic = () => {
    setIsMicroOn(prev => !prev);
  };

  const toggleCam = () => {
    setIsCameraOn(prev => !prev);
  };

  const togglePresentation = () =>{
    setIsPresent(prev => !prev);
  };

  const toggleMessages = () => {
    setIsMessagesVisible((prev) => !prev);
  };

  return (
    <div className="meeting-card">
      <div className="meeting-card__header">
        <div className="meeting-card__icon">
          <ion-icon name="videocam"></ion-icon>
        </div>
        <div className="meeting-card__info">
          <div className="meeting-card__name">{meetingName}</div>
          <div className="meeting-card__time">{meetingTime}</div>
        </div>
      </div>
      <div className="meeting-card__screen">
        <div className="meeting-card__screen-button">
          <Link to={linkTo}>Bắt đầu học</Link>
        </div>
      </div>
      <div className="meeting-card__controls">
        <div
          className={`meeting-card__control ${
            isMicroOn ? "meeting-card__control--mic-on" : "meeting-card__control--mic-off"
          }`}
          onClick={toggleMic}
        >
          <ion-icon name={isMicroOn ? "mic-outline" : "mic-off-outline"}></ion-icon>
          <span className="meeting-card__label">{isMicroOn ? "Tắt micro" : "Bật Micro" }</span>
        </div>
        <div
          className={`meeting-card__control ${
            isCameraOn ? "meeting-card__control--camera-on" : "meeting-card__control--camera-off"
          }`}
          onClick={toggleCam}
        >
          <ion-icon name={isCameraOn ? "videocam-outline" : "videocam-off-outline"}></ion-icon>
          <span className="meeting-card__label">{isCameraOn ? "Tắt camera" : "Bật camera" }</span>
        </div>
        {showPresentation && (
          <div
            className="meeting-card__control meeting-card__control--presentation"
            onClick={togglePresentation}
          >
            <ion-icon name="easel-outline"></ion-icon>
            <span className="meeting-card__label">Trình chiếu ngay</span>
          </div>
        )}
        {showMessages && (
          <div
            className="meeting-card__control meeting-card__control--messages"
            onClick={toggleMessages}
          >
            <ion-icon name="chatbubble-outline"></ion-icon>
            <span className="meeting-card__label">Trò chuyện</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MeetingCard;
