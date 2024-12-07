import React, {useState} from "react";
import "./TryLearning.scss";
import BackButton from '../../../../components/BackButton/BackButton'
import MeetingCard from "../../../../components/MeetingScreen/MeetingCard";

const TryLearning = () => {
  return (
    <div className="try-learning__container">
      <BackButton />
      <div className="try-learning__header">
        <div className="try-learning__header-title">HỌC THỬ</div>
      </div>
      
      <div className="try-learning__meeting">
      <MeetingCard
          meetingName="Toán 10"
          meetingTime="02/12/2024 | 9:00 - 10:30"
          linkTo="try-learning"
          showStartButton={true}
        />
      </div>
    </div>
  );
};

export default TryLearning;
