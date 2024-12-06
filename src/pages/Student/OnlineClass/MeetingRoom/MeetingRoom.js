import React, {useState} from "react";
import "./MeetingRoom.scss";
import BackButton from '../../../../components/BackButton/BackButton'
import MeetingCard from "../../../../components/MeetingScreen/MeetingCard";
import MeetingImage from "../../../../assets/images/Meeting.png";

const MeetingRoom = () => {
  return (
    <div className="waiting-room__container">
      <BackButton />
      <div className="waiting-room__header">
        <div className="waiting-room__header-title">HỌC ONLINE</div>
      </div>
      
      <div className="waiting-room__meeting">
      <MeetingCard
          meetingName="Toán 10"
          meetingTime="02/12/2024 | 9:00 - 10:30"
          linkTo="try-learning"
          showPresentation={true}
          showMessages={true}
          screenBackground={MeetingImage}
        />
      </div>
    </div>
  );
};

export default MeetingRoom;
