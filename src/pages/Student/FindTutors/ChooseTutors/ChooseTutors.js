import { ExtendableCard } from "../../../../components/Card/Card";
import RequestStep from "../../../../components/RequestStep/RequestStep";
import style from "./ChooseTutors.module.scss";
import AcceptedOverlay from "../../../../components/Overlay/Overlay";
import success from "../../../../assets/icon/success.gif"
import warning from "../../../../assets/icon/warning.gif"
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../../components/Button/Button";
import { DataContext } from "../../../../Context/DataContext";
const stepperData = ["Yêu cầu", "Lựa chọn", "Học thử", "Thống nhất"];
const ConfirmNoti = {
  title: 'CHẤP NHẬN ĐỀ NGHỊ THÀNH CÔNG',
  img: success,
  content: [
    {
      label: '',
      value: 'Hãy tiến hành học thử trước khi xác nhận học chính thức'
    }
  ],
  color: '#0F7CC6'
}
const Cancel = {
  title: 'XÁC NHẬN HỦY LỚP',
  img: warning,
}
const CancelSuccess = {
  title: 'HỦY LỚP THÀNH CÔNG',
  img: success,
}
const ChooseTutors = () => {
  const [isChoose, setIsChoose] = useState(false)
  const [isCancel, setIsCancel] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [requestData, setRequestData] = useState([{
    img: '',
    title: [],
    content: {
      title: '',
      content: [],
    },
    button: {
      title: '',
    },
  },])
  const {request, cancelRequest} = useContext(DataContext)
  const navigate = useNavigate()
  const {id} = useParams()
  const data = request.filter((v) => v.id === id)[0]

  useEffect(() => {
      const formattedData = data.tutors.map((item) => ({
        img: item.image,
        title: [
          { label: "Gia sư", value: item.name },
          { label: "Giới tính", value: item.gender },
        ],
        content: {
          title: "ĐỀ NGHỊ DẠY",
          content: [
            {
              label: "Ngày sinh",
              value: [item.birthday],
            },
            {
              label: "Lịch rảnh",
              value: [item.date],
            },
            {
              label: "Bằng cấp",
              value: [item.certificate], 
            },
            {
              label: "Thời gian có thể dạy thử",
              value: [item.date], 
            },
          ],
        },
        button: {
          title: "Chấp nhận",
        },
      }));
      console.log(formattedData)
      setRequestData(formattedData);
  }, []);

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.headerTitle}>DANH SÁCH ĐỀ NGHỊ DẠY</div>
      </div>
      <div className={style.contentContainer}>
        <RequestStep data={stepperData} active={1} />
        <div className={style.content}>
          <div className={style.requestCard}>
            {requestData.map((v, i) => (
              <ExtendableCard data={v} onChoose = {setIsChoose} key={i}/>
            ))}
            
          </div>
          <div className={style.courseInfo}>
            <div className={style.courseInfoTitle}>THÔNG TIN KHÓA HỌC</div>
            <div className={style.courseInfoContent}>
                <div className={style.lineContent}>
                  <div className={style.label}>
                    Môn học yêu cầu:
                  </div>
                  <div className={style.value}>
                    {data.subject}
                  </div>
                </div>
                <div className={style.lineContent}>
                  <div className={style.label}>
                    Trình độ:
                  </div>
                  <div className={style.value}>
                    {data.level}
                  </div>
                </div>
                <div className={style.lineContent}>
                  <div className={style.label}>
                    Hình thức:
                  </div>
                  <div className={style.value}>
                    {data.method}
                  </div>
                </div>
                <div className={style.lineContent}>
                  <div className={style.label}>
                    Ngân sách:
                  </div>
                  <div className={style.value}>
                    {data.price}
                  </div>
                </div>
                <div className={style.lineContent}>
                  <div className={style.label}>
                    Thời lượng:
                  </div>
                  <div className={style.value}>
                    {data.date.length} ngày /tuần
                  </div>
                </div>
                <div className={style.lineContent}>
                  <div className={style.label}>
                    Thời gian rảnh:
                  </div>
                  <div className={style.value}>
                    {data.date.join(', ')}
                  </div>
                </div>
                <div className={style.lineContent}>
                  <div className={style.label}>
                    Thông tin học viên:
                  </div>
                  <div className={style.value}>
                    {data.student.name}
                  </div>
                </div>
                <div className={style.lineContent}>
                  <div className={style.label}>
                    Yêu cầu gia sư:
                  </div>
                  <div className={style.value}>
                    {data.student.request}
                  </div>
                </div>
            </div>
            <div className={style.button} onClick={() => setIsCancel(true)}>
                <Button title='Hủy yêu cầu' type="danger"/>
              </div>
          </div>
        </div>
      </div>
     {isChoose && <AcceptedOverlay data={ConfirmNoti} yes={() => navigate('../find-tutors/trial')}/>}
     {isCancel && <AcceptedOverlay data={Cancel} type={'confirm'} yes={() => {setIsSuccess(true); cancelRequest(id)}} no={() => setIsCancel(false)}/>}
     {isSuccess && <AcceptedOverlay data={CancelSuccess} yes={() => navigate('../find-tutors')}/>}
    </div>
  );
};

export default ChooseTutors;
