import React, {useState} from "react";
import "./OnlineClass.scss";
import MeetingCard from "../../../components/MeetingScreen/MeetingCard";
import ScheduleCard from "../../../components/ClassCard/ClassCard";
import ChillGuy from "../../../assets/images/ChillGuy.png"

// Dữ liệu lớp giả lập
const classData = [
  {
    id: 1,
    name: 'Hóa học 11',
    teacher: 'Trần Ngọc Anh Thơ',
    time: '13:00 - 14:30',
    date: '05/12/2024',
    status: 'upcoming'
  },
  {
    id: 2,
    name: 'JLPT N2',
    teacher: 'Trần Đỗ Phương Nhi',
    time: '11:00 - 12:30',
    date: '09/12/2024',
    status: 'upcoming'
  },
  {
    id: 3,
    name: 'JLPT N3',
    teacher: 'Lê Thiện Nhi',
    time: '18:00 - 19:30',
    date: '03/12/2024',
    status: 'ongoing'
  },
  {
    id: 4,
    name: 'Toán 10',
    teacher: 'Huỳnh Văn Thiệu',
    time: '09:00 - 10:30',
    date: '02/12/2024',
    status: 'completed'
  },

];


const OnlineClass = () => {
  const currentMeeting = classData.find((classItem) => classItem.status === 'ongoing');

  return (
    <div className="online-class__container">
      <div className="online-class__header">
        <div className="online-class__header-title">HỌC ONLINE</div>
      </div>
      <div className="online-class__main">
        <div className="online-class__schedule">
          <h2 className="online-class__main-title">THỜI KHÓA BIỂU</h2>
          {classData.map((classItem) => (
            <ScheduleCard key={classData.id} classItem={classItem}/>
          ))}
        </div>
        <div className="online-class__meeting">
          <h2 className="online-class__main-title">PHÒNG HỌC ONLINE</h2>
          {currentMeeting ? (
            <MeetingCard
              meetingName={currentMeeting.name}
              meetingTime={`${currentMeeting.date} | ${currentMeeting.time}`}
              linkTo="meeting-room"
              showStartButton={true}
              showPresentation={false}
              showMessages={false}
            />
          ) : (
            <div className="online-class__no-meeting">
              <img src={ChillGuy} alt="Empty" className="online-class__no-meeting--image"/>
              <p className="online-class__no-meeting--content">Hiện không có lớp học nào đang diễn ra. <br/> Vì chúng ta là những con người thư giãn</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OnlineClass;
