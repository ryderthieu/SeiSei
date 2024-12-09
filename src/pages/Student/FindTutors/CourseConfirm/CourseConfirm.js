import React, { useContext, useEffect, useState } from "react";
import styles from "./CourseConfirm.module.scss";
import RequestStep from "../../../../components/RequestStep/RequestStep";
import { CourseCard } from "../../../../components/Card/Card";
import Anh from "../../../../assets/images/english.png";
import Avt from "../../../../assets/images/student.jpg";
import Table from "../../../../components/Table/Table";
import Button from "../../../../components/Button/Button";
import AcceptedOverlay from "../../../../components/Overlay/Overlay";
import warning from "../../../../assets/icon/warning.gif"
import successIcon from "../../../../assets/icon/success.gif";
import { useNavigate, useParams } from "react-router-dom";
import { DataContext } from "../../../../Context/DataContext";


const stepperData = ["Yêu cầu", "Lựa chọn", "Học thử", "Thống nhất"];
  const overlayData = {
    title: 'ĐĂNG KÝ LỚP THÀNH CÔNG',
    img: successIcon,
    content: [
      {
        value: ['Bạn đã đăng ký lớp thành công, chúc bạn học tập tốt!']
      }
    ],
    color: '#005A96'
  }
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
const CourseConfirm = () => {
  const navigate = useNavigate()
  const [overlay, setOverlay] = useState(false)
  const [cancel, setCancel] = useState(false)
  const [success, setSuccess] = useState(false)
  const [data, setData] = useState({img: '', content:[], color: ''})
  const [tutor, setTutor] = useState({img: '', content: []})
  const {request, addCourse, cancelRequest} = useContext(DataContext)
  const {id} = useParams()
  const currentRequest = request.filter((v) => v.id === id)[0]
  useEffect(() =>{
    const newData = {
      img: currentRequest.image,
      content: [
        {
          label: 'Mã lớp',
          value: [currentRequest.id],
        },
        {
          label: 'Môn',
          value: [currentRequest.subject]
        },
        {
          label: 'Hình thức',
          value: [currentRequest.method]
        }
      ]
    }
    console.log('confirm',currentRequest)
    const selectedTutor = {
      img: currentRequest.tutor.image,
      content: [
        {label: "Tên gia sư", value: [currentRequest.tutor.name]},
        {label: "Giới tính", value: [currentRequest.tutor.gender]},
        {label: "Bằng cấp", value: [currentRequest.tutor.certificate]},
        {label: "Giới thiệu", value: [currentRequest.tutor.describe]},
      ]
    }
    console.log('comfirm',selectedTutor)
    setTutor(selectedTutor)
    setData(newData)
  }, [])
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
        <div className={styles.button} onClick={() => setCancel(true)}>
            <Button title='Hủy khóa học' type="danger"/>
          </div>
          <div className={styles.button} onClick={() => setOverlay(true)}>
            <Button title='Xác nhận' />
          </div>
        </div>
      </div>
      {overlay && <AcceptedOverlay data={overlayData} yes={() =>{ navigate('../courses') ; addCourse(id); cancelRequest(id)}}/>}
      {cancel && <AcceptedOverlay data={warningData} type={'confirm'} yes={() =>{cancelRequest(id); setSuccess(true)} } no={() => setCancel(false)} />}
      {success && <AcceptedOverlay data = {successData} yes = {() => navigate('../find-tutors')} />}
    </div>
  );
};
export default CourseConfirm;
