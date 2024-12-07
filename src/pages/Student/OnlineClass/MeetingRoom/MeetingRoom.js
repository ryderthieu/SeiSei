import React, {useState} from "react";
import "./MeetingRoom.scss";
import BackButton from '../../../../components/BackButton/BackButton'
import MeetingCard from "../../../../components/MeetingScreen/MeetingCard";
import MeetingImage from "../../../../assets/images/Meeting.png";
import ChatBox from "../../../../components/MeetingChatBox/MeetingChatBox";

const MeetingRoom = () => {
  const [isChatVisible, setIsChatVisible] = useState(false);

  const toggleChat = () => {
    setIsChatVisible((prev) => !prev);
  }

  return (
    <div className="waiting-room__container">
      <BackButton />
      <div className="waiting-room__header">
        <div className="waiting-room__header-title">HỌC ONLINE</div>
      </div>
      
      <div className="waiting-room__main">
        <div className="waiting-room__meeting">
          <MeetingCard
            meetingName="Toán 10"
            meetingTime="02/12/2024 | 9:00 - 10:30"
            linkTo="try-learning"
            showPresentation={true}
            showMessages={true}
            screenBackground={MeetingImage}
            showFullScreen={true}
            toggleChat={toggleChat}
          />
        </div>
      </div>
      {isChatVisible && (
        <div className="meeting-room__chat">
          <ChatBox />
        </div>
      )}
    </div>
  );
};

export default MeetingRoom;
