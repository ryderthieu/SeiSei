import { ExtendableCard } from "../../../../components/Card/Card";
import RequestStep from "../../../../components/RequestStep/RequestStep";
import style from "./ChooseTutors.module.scss";
import img from "../../../../assets/images/art.png";
import AcceptedOverlay from "../../../../components/Overlay/Overlay";
import success from "../../../../assets/icon/success.gif"
import warning from "../../../../assets/icon/warning.gif"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const stepperData = ["Yêu cầu", "Lựa chọn", "Học thử", "Thống nhất"];
const requestData = [
  {
    img: img,
    title: [
      {
        label: "Gia sư",
        value: "Nguyễn Văn A",
      },
      {
        label: "Giới tính",
        value: "Nam",
      },
    ],
    content: {
      title: "ĐỀ NGHỊ DẠY",
      content: [
        {
          label: "Ngày sinh",
          value: ["21/11/2001"],
        },
        {
          label: "Lịch rảnh",
          value: ["Thứ Hai", "Thứ Tư"],
          tag: ["#D00000", "#359508"],
        },
        {
          label: "Bằng cấp",
          value: ["Sinh viên - Ielts 7.0"],
        },
        {
          label: "Thời gian có thể dạy thử",
          value: ["Thứ Năm"],
          tag: ["#D00000"],
        },
      ],
    },
    button: {
      title: "Chấp nhận",
    },
  },
];
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
const ConfirmNoti = {
  title: 'CHẤP NHẬN ĐỀ NGHỊ THÀNH CÔNG',
  img: success,
  content: 'Hãy tiến hành học thử trước khi xác nhận học chính thức'
}
const Cancel = {
  title: 'XÁC NHẬN HỦY LỚP',
  img: warning,
}
const ChooseTutors = () => {
  const [isChoose, setIsChoose] = useState(false)
  const [isCancel, setIsCancel] = useState(false)
  const navigate = useNavigate()
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.headerTitle}>DANH SÁCH ĐỀ NGHỊ DẠY</div>
      </div>
      <div className={style.contentContainer}>
        <RequestStep data={stepperData} active={1} />
        <div className={style.content}>
          <div className={style.requestCard}>
            <ExtendableCard data={requestData[0]} onChoose = {setIsChoose}/>
            <ExtendableCard data={requestData[0]} onChoose = {setIsChoose}/>
            <ExtendableCard data={requestData[0]} onChoose = {setIsChoose}/>
          </div>
          <div className={style.courseInfo}>
            <div className={style.courseInfoTitle}>THÔNG TIN KHÓA HỌC</div>
            <div className={style.courseInfoContent}>
              {courseInfo.map((v, i) => {
                return (
                  <div className={style.lineContent}>
                    <div className={style.label}>{v.label}:</div>
                    {v.value.map((item, idx) => (
                      <div
                        key={idx}
                        className={style.value}
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
            <div className={style.button} onClick={() => setIsCancel(true)}>
                Hủy yêu cầu
              </div>
          </div>
        </div>
      </div>
     {isChoose && <AcceptedOverlay data={ConfirmNoti} yes={() => navigate('./try-learning')}/>}
     {isCancel && <AcceptedOverlay data={Cancel} type={'confirm'} yes={() => navigate('../find-tutors')} no={() => setIsCancel(false)}/>}
    </div>
  );
};

export default ChooseTutors;
