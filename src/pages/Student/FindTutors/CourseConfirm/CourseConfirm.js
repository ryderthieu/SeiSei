import React, { useState } from "react";
import styles from "./CourseConfirm.module.scss";
import RequestStep from "../../../../components/RequestStep/RequestStep";
import { CourseCard } from "../../../../components/Card/Card";
import Anh from "../../../../assets/images/english.png";
import Avt from "../../../../assets/images/avatar.png";
import Table from "../../../../components/Table/Table";
const CourseConfirm = () => {
  const stepperData = ["Yêu cầu", "Lựa chọn", "Học thử", "Thống nhất"];
  const data = {
    img: Anh,
    content: [
      "Mã lớp: ENG112",
      "Môn: Tiếng Anh",
      "Hình thức: Offline - TP. Hồ Chí Minh",
    ],
    color: "#05A344",
  };
  const tutor = {
    img: Avt,
    content: [
      "Họ và tên: Nguyễn Văn A",
      "Giới tính: Nam",
      "Chuyên môn: Tiếng Anh các cấp",
      "Sinh viên năm 2 trường ĐH CNTT",
    ],
    color: "#000",
  };
  const schedule = [
    {
      'STT': '1',
      'Thứ' : 'Thứ Hai',
      'Bắt đầu': '19h',
      'Kết thúc': '21h'
    },
    {
      'STT': '2',
      'Thứ' : 'Thứ Năm',
      'Bắt đầu': '19h',
      'Kết thúc': '21h'
    },
  ]
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerTitle}>THỐNG NHẤT LỊCH HỌC</div>
      </div>
      <div className={styles.contentContainer}>
        <RequestStep data={stepperData} active={3} />
        <div className={styles.content}>
          <div className={styles.item}>
            <div className={styles.itemTitle}>THÔNG TIN LỚP HỌC</div>
            <div className={styles.itemContent}>
              <div className={styles.cardContainer}>
                <CourseCard data={data} />
              </div>
              <div className={styles.cardContainer}>
                <CourseCard data={tutor} />
              </div>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.itemTitle}>DANH SÁCH BUỔI HỌC TRONG TUẦN</div>
            <div className={styles.itemContent}>
              <Table data={schedule}/>
            </div>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <div className={styles.button}>Xác nhận</div>
          <div className={[styles.button, styles.cancel].join(" ")}>Hủy</div>
        </div>
      </div>
    </div>
  );
};
export default CourseConfirm;
