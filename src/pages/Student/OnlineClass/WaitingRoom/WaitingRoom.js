import React, {useState} from "react";
import "./WaitingRoom.scss";
import BackButton from '../../../../components/BackButton/BackButton'
import MeetingCard from "../../../../components/MeetingScreen/MeetingCard";

const WaitingRoom = () => {
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
        />
      </div>
    </div>
  );
};

export default WaitingRoom;
