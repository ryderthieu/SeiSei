import React, {useState} from "react";
import "./OnlineClass.scss";
import BackButton from '../../../components/BackButton/BackButton'
import MeetingCard from "../../../components/MeetingScreen/MeetingCard";

const OnlineClass = () => {
  return (
    <div className="online-class__container">
      <BackButton />
      <div className="online-class__header">
        <div className="online-class__header-title">HỌC ONLINE</div>
      </div>
      <div className="online-class__main">
      <div className="online-class__meeting">
      <MeetingCard
          meetingName="Toán 10"
          meetingTime="02/12/2024 | 9:00 - 10:30"
          linkTo="try-learning"
          showPresentation={true}
          showMessages={true}
        />
      </div>
      </div>
    </div>
  );
};

export default OnlineClass;
