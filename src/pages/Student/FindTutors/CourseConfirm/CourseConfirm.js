import React, { useState } from "react";
import styles from "./CourseConfirm.module.scss";
import RequestStep from "../../../../components/RequestStep/RequestStep";
import { CourseCard } from "../../../../components/Card/Card";
import Anh from "../../../../assets/images/english.png";
import Avt from "../../../../assets/images/student.jpg";
import Table from "../../../../components/Table/Table";
import Button from "../../../../components/Button/Button";
import AcceptedOverlay from "../../../../components/Overlay/Overlay";
import success from "../../../../assets/icon/success.gif";
import { useNavigate } from "react-router-dom";
const CourseConfirm = () => {
  const navigate = useNavigate()
  const [overlay, setOverlay] = useState(false)
  const stepperData = ["Yêu cầu", "Lựa chọn", "Học thử", "Thống nhất"];
  const overlayData = {
    title: 'ĐĂNG KÝ LỚP THÀNH CÔNG',
    img: success,
    content: [
      {
        value: ['Bạn đã đăng ký lớp thành công, chúc bạn học tập tốt!']
      }
    ],
    color: '#005A96'
  }
  const data = {
    img: Anh,
    content: [
      {
        label: 'Mã lớp',
        value: ['ENG112']
      },
      {
        label: 'Môn',
        value: ['Tiếng Anh']
      },
      {
        label: 'Hình thức',
        value: ['Offline - Tp. Hồ Chí Minh']
      }
    ],
    color: "#05A344",
  };
  const tutor = {
    img: Avt,
    content: [
      {
        label: 'Tên gia sư',
        value: ['Nguyễn Văn A']
      },
      {
        label: 'Giới tính',
        value: ['Nam']
      },
      {
        label: 'Chuyên môn',
        value: ['Tiếng anh các cấp']
      },
      {
        label: '',
        value: ['Sinh viên năm 2 ở UIT']
      },
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
          <div className={styles.button} onClick={() => setOverlay(true)}>
            <Button title='Xác nhận' />
          </div>
        </div>
      </div>
      {overlay && <AcceptedOverlay data={overlayData} yes={() => navigate('../courses')}/>}
    </div>
  );
};
export default CourseConfirm;
