import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./MeetingCard.scss";
import MeetingChatBox from "../MeetingChatBox/MeetingChatBox";
import Button from "../Button/Button";

const MeetingCard = ({
  meetingName,
  meetingTime,
  linkTo,
  showStartButton,
  showPresentation,
  showMessages,
  showFullScreen,
  screenBackground,
  showEndMeeting,
  showAttendance
}) => {
  const [isMicroOn, setIsMicroOn] = useState(true);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isPresent, setIsPresent] = useState(false);
  const [isMessages, setIsMessages] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const cardRef = useRef(null);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      cardRef.current?.requestFullscreen();
      setIsFullScreen(true);
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  const toggleMic = () => setIsMicroOn((prev) => !prev);
  const toggleCam = () => setIsCameraOn((prev) => !prev);
  const togglePresentation = () => setIsPresent((prev) => !prev);
  const toggleMessages = () => setIsMessages((prev) => !prev);

  return (
    <div className={`meeting-card ${isFullScreen ? "meeting-card--fullscreen" : ""}`} ref={cardRef}>
      <div className={`meeting-card__layout ${isMessages ? "meeting-card__layout--with-chat" : ""}`}>
        
        <div className="meeting-card__content-wrapper">

        {!isFullScreen && (
          <div className="meeting-card__header">
            <div className="meeting-card__icon">
              <ion-icon name="videocam"></ion-icon>
            </div>
            <div className="meeting-card__info">
              <div className="meeting-card__name">{meetingName}</div>
              <div className="meeting-card__time">{meetingTime}</div>
            </div>
          </div>
        )}

          <div
            className="meeting-card__screen"
            style={{
              background: `url(${screenBackground})`,
              backgroundColor: "#C2E4FF",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {showStartButton && (
              <div className="meeting-card__screen-button">
                <Link to={linkTo}>
                  <Button title='Bắt đầu học' type="danger"/>
                </Link>
              </div>
            )}
            {showFullScreen && (
              <button className="meeting-card__fullscreen-btn" onClick={toggleFullscreen}>
                <ion-icon name={isFullScreen ? "contract-outline" : "expand-outline"}></ion-icon>
              </button>
            )}

            <div 
              className="meeting-card__controls" 
              style={{ 
                background: isFullScreen ? "transparent" : "#fff", 
                bottom: isFullScreen ? "1em" : "0" 
              }}
            >
              <div
                className={`meeting-card__control ${
                  isMicroOn ? "meeting-card__control--mic-on" : "meeting-card__control--mic-off"
                }`}
                onClick={toggleMic}
              >
                <ion-icon name={isMicroOn ? "mic-outline" : "mic-off-outline"}></ion-icon>
                <span className="meeting-card__label">{isMicroOn ? "Tắt micro" : "Bật Micro"}</span>
              </div>
              <div
                className={`meeting-card__control ${
                  isCameraOn ? "meeting-card__control--camera-on" : "meeting-card__control--camera-off"
                }`}
                onClick={toggleCam}
              >
                <ion-icon name={isCameraOn ? "videocam-outline" : "videocam-off-outline"}></ion-icon>
                <span className="meeting-card__label">{isCameraOn ? "Tắt camera" : "Bật camera"}</span>
              </div>
              {showPresentation && (
                <div
                  className={`meeting-card__control ${
                    isPresent ? "meeting-card__control--presentation-off" : "meeting-card__control--presentation"
                  }`}
                  onClick={togglePresentation}
                >
                  <ion-icon name="easel-outline"></ion-icon>
                  <span className="meeting-card__label">Trình chiếu ngay</span>
                </div>
              )}
              {showMessages && (
                <div
                  className={`meeting-card__control ${
                    isMessages ? "meeting-card__control--messages-off" : "meeting-card__control--messages"
                  }`}
                  onClick={toggleMessages}
                >
                  <ion-icon name="chatbox-ellipses-outline"></ion-icon>
                  <span className="meeting-card__label">{isMessages ? "Tắt trò chuyện" : "Trò chuyện"}</span>
                </div>
              )}
              {showEndMeeting && (
                <div className="meeting-card__control meeting-card__control--end">
                  <Link to="/dashboard/online-class">
                    <Button title='Kết thúc' type="danger" />
                  </Link>
                  <span className="meeting-card__label">Kết thúc cuộc gọi</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {showMessages && (
          <div className="meeting-card__chatbox">
            <MeetingChatBox isOpen={isMessages} onClose={() => setIsMessages(false)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MeetingCard;