import React, { useState } from "react";
import styles from "./Trial.module.scss";
import RequestStep from "../../../../components/RequestStep/RequestStep";
import { useNavigate } from "react-router-dom";
const Trial = () => {
  const [selectedTime, setSelectedTime] = useState(null);
  const navigate = useNavigate()
  const tutorInfo = {
    name: "Nguyễn Văn A",
    subject: "Toán Lớp 10",
    bio: "Gia sư có 5 năm kinh nghiệm giảng dạy các môn học cấp 3.",
    availableTimes: [
      { date: "2024-12-06", times: ["09:00", "14:00", "16:00"] },
      { date: "2024-12-07", times: ["10:00", "15:00"] },
      { date: "2024-12-08", times: ["11:00", "13:00", "17:00"] },
    ],
  };
  const courseInfo = [
    {
      label: "Môn học yêu cầu",
      value: ["Toán"],
    },
    {
      label: "Trình độ",
      value: ["Lớp 10"],
    },
    {
      label: "Hình thức",
      value: ["Online"],
    },
    {
      label: "Ngân sách",
      value: ["300.000 VND"],
    },
    {
      label: "Thời lượng",
      value: ["2 buổi / tuần"],
    },
    {
      label: "Thời gian rảnh",
      value: ["Thứ Hai", "Thứ Năm"],
      tag: ["#D00000", "#359508"],
    },
    {
      label: "Thông tin học viên",
      value: ["Nữ, 16 tuổi"],
    },
    {
      label: "Yêu cầu gia sư",
      value: ["Nữ, có khả năng dạy tốt"],
    },
  ];
  const stepperData = ["Yêu cầu", "Lựa chọn", "Học thử", "Thống nhất"];

  const handleSelectTime = (time) => {
    setSelectedTime(time);
  };

  const handleSubmit = () => {
    alert(`Đã xác nhận lịch học vào thời gian: ${selectedTime}`);
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
              {courseInfo.map((v, i) => {
                return (
                  <div className={styles.lineContent}>
                    <div className={styles.label}>{v.label}:</div>
                    {v.value.map((item, idx) => (
                      <div
                        key={idx}
                        className={styles.value}
                        style={{
                          padding: "5px 10px",
                          borderRadius: 10,
                          fontWeight: v.tag ? "bold" : "inherit",
                          color: v.tag && v.tag[idx] ? v.tag[idx] : "inherit",
                          backgroundColor:
                            v.tag && v.tag[idx]
                              ? v.tag[idx] + "33"
                              : "transparent",
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                );
              })}
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
                      <button
                        key={idx}
                        className={`${styles.timeButton} ${selectedTime === time ? styles.selected : ""}`}
                        onClick={() => handleSelectTime(time)}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              {selectedTime && (
                <div className={styles.confirmation}>
                  <p>
                    <strong>Thời gian bạn chọn:</strong> {selectedTime}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <div className={styles.button} onClick = {() => navigate('/student-dashboard/find-tutors/confirm')}>Xác nhận</div>
          <div className={[styles.button, styles.cancel].join(" ")}>Hủy</div>
        </div>
      </div>
    </div>
  );
};

export default Trial;
