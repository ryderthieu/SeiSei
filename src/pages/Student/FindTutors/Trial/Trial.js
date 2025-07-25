import React, { useContext, useEffect, useState } from "react";
import styles from "./Trial.module.scss";
import RequestStep from "../../../../components/RequestStep/RequestStep";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../../components/Button/Button";
import AcceptedOverlay from "../../../../components/Overlay/Overlay";
import warning from "../../../../assets/icon/warning.gif"
import successIcon from "../../../../assets/icon/success.gif"
import { DataContext } from "../../../../Context/DataContext";

// const tutorInfo = {
//   name: "Nguyễn Văn A",
//   subject: "Toán Lớp 10",
//   bio: "Gia sư có 5 năm kinh nghiệm giảng dạy các môn học cấp 3.",
//   availableTimes: [
//     { date: "01/12/2024", times: ["09:00", "14:00", "16:00"] },
//     { date: "03/12/2024", times: ["10:00", "15:00"] },
//     { date: "04/12/2024", times: ["11:00", "13:00", "17:00"] },
//   ],
// };
const warningData = {
  title: "XÁC NHẬN HỦY LỚP",
  img: warning,
  color: '#005A96'
}
const successData = {
  title: 'ĐÃ XÓA THÀNH CÔNG YÊU CẦU',
  img: successIcon,
  color: '#005A96'
}
// const courseInfo = [
//   { label: "Môn học yêu cầu", value: ["Toán"] },
//   { label: "Trình độ", value: ["Lớp 10"] },
//   { label: "Hình thức", value: ["Online"] },
//   { label: "Ngân sách", value: ["300.000 VND"] },
//   { label: "Thời lượng", value: ["2 buổi / tuần"] },
//   { label: "Thời gian rảnh", value: ["Thứ Hai", "Thứ Năm"], tag: ["#D00000", "#359508"] },
//   { label: "Thông tin học viên", value: ["Nữ, 16 tuổi"] },
//   { label: "Yêu cầu gia sư", value: ["Nữ, có khả năng dạy tốt"] },
// ];

const stepperData = ["Yêu cầu", "Lựa chọn", "Học thử", "Thống nhất"];
const Trial = () => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [confirm, setConfirm] = useState(false);
  const [cancel, setCancel] = useState(false)
  const [success, setSuccess] = useState(false)
  const [overlayData, setOverlayData] = useState({});
  const [tutorInfo, setTutorInfo] = useState({name:'', subject:'', bio:'', availableTimes:[{date: '', times: []}]})
  const [courseInfo, setCourseInfo] = useState([])
  const {request, trialRequest, cancelRequest} = useContext(DataContext)
  const {id} = useParams()
  const navigate = useNavigate();

  const course = request.find((v) => v.id === id)
 useEffect(() => {
  const tutorData = {
    name: course.tutor.name,
    subject: course.name,
    bio: course.tutor.describe,
    availableTimes: course.tutor.date.map((v, i) => ({date: v, times: course.tutor.time[i] }))
  }

  const courseInfo = [
    {
      label: 'Môn học yêu cầu',
      value: [course.subject]
    },
    {
      label: 'Trình độ',
      value: [course.level]
    },
    {
      label: 'Hình thức',
      value: [course.method]
    },
    {
      label: 'Ngân sách',
      value: [course.price]
    },
    {
      label: 'Thời lượng',
      value: [`${course.date.length} buổi /tuần`]
    },
    {
      label: 'Yêu cầu gia sư',
      value: [course.student.request]
    },
  ]
  setCourseInfo(courseInfo)
  setTutorInfo(tutorData)
 }, [])

  const handleSelectTime = (time, dayIndex) => {
    setSelectedTime(time);
    setSelectedDay(tutorInfo.availableTimes[dayIndex].date);
  };
  const handleSubmit = () => {
    if (!selectedTime || !selectedDay) {
      alert("Vui lòng chọn ngày và giờ học!");
      return;
    }
    const data = {
      title: "Xác nhận lịch học thử",
      content: [
        { label: "Môn học", value: [tutorInfo.subject] },
        { label: "Ngày học", value: [selectedDay] },
        { label: "Giờ học", value: [selectedTime] },
      ],
      color: "#005A96",
    };
    setOverlayData(data);
    setConfirm(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerTitle}>CHỌN BUỔI HỌC THỬ</div>
      </div>
      <div className={styles.contentContainer}>
        <RequestStep data={stepperData} active={2} />
        <div className={styles.content}>
          <div className={styles.item}>
            <div className={styles.itemTitle}>Thông tin khóa học</div>
            <div className={styles.itemContent}>
              {courseInfo.map((v, i) => (
                <div className={styles.lineContent} key={i}>
                  <div className={styles.label}>{v.label}:</div>
                    <div className={styles.value}>
                      {v.value.join(', ')}
                    </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.itemTitle}>Chọn thời gian học</div>
            <div className={styles.schedule}>
              {tutorInfo.availableTimes.map((item, index) => (
                <div key={index} className={styles.dateGroup}>
                  <h4>{item.date}</h4>
                  <div className={styles.times}>
                    {item.times.map((time, idx) => (
                      <div
                        key={idx}
                        className={`${styles.timeButton} ${selectedTime === time && selectedDay === item.date? styles.selected : ""}`}
                        onClick={() => handleSelectTime(time, index)}
                      >
                        {time}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <div className={styles.button} onClick={() => setCancel(true)}>
            <Button title="Hủy yêu cầu" type="danger" />
          </div>
          <div className={styles.button} onClick={handleSubmit}>
            <Button title="Xác nhận" />
          </div>
        </div>
      </div>
      {confirm && <AcceptedOverlay data={overlayData} type='confirm' yes = {() =>{trialRequest(id); navigate('../find-tutors')}} no={() => setConfirm(false)}/>}
      {cancel && <AcceptedOverlay data={warningData} type={confirm} yes={() => {cancelRequest(id); setSuccess(true)}} no={() => setCancel(false)} />}
      {success && <AcceptedOverlay data = {successData} yes = {() => navigate('../find-tutors')} />}
    </div>
  );
};

export default Trial;
