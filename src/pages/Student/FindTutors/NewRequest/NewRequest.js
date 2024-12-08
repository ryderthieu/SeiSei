import React, { useContext, useState } from "react";
import styles from "./NewRequest.module.scss";
import RequestStep from "../../../../components/RequestStep/RequestStep";
import { SelectInput } from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import AcceptedOverlay from "../../../../components/Overlay/Overlay";
import { useNavigate } from "react-router-dom";
import successIcon from "../../../../assets/icon/success.gif"
import { DataContext } from "../../../../Context/DataContext";

const stepperData = ["Yêu cầu", "Lựa chọn", "Học thử", "Thống nhất"];

const FormSection = ({ title, children }) => {
  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader}>
        <div className={styles.title}>{title}</div>
      </div>
      {children}
    </div>
  );
};

const NewRequest = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [irequest, setIrequest] = useState("");
  const [budget, setBudget] = useState("");
  const [free, setFree] = useState([]);
  const [subject, setSubject] = useState("");
  const [level, setLevel] = useState("");
  const [sessions, setSessions] = useState("");
  const [method, setMethod] = useState("");

  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayData, setOverlayData] = useState({});
  const [success, setSuccess] = useState(false)
  const {request, addRequest} = useContext(DataContext)


  const successData = {
    title: 'ĐĂNG YÊU CẦU THÀNH CÔNG',
    img: successIcon,
    color: '#005A96'
  }
  const handleConfirm = () => {
    const formData = {
      name,
      irequest,
      budget,
      free,
      subject,
      level,
      sessions,
      method,
    };
    addRequest({
      name : name,
      request : irequest,
      subject : subject,
      level : level,
      method : method,
      price : budget,
      date : free,
    })
    setOverlayData({
      title: "XÁC NHẬN THÔNG TIN YÊU CẦU",
      color: "#005A96",
      content: [
        { label: "Tên học viên", value: name },
        { label: "Mong muốn", value: irequest },
        { label: "Ngân sách", value: `${budget} VNĐ` },
        { label: "Thời gian rảnh", value: free.join(", ") },
        { label: "Môn học", value: subject },
        { label: "Trình độ", value: level },
        { label: "Số buổi học", value: `${sessions} buổi/tuần` },
        {
          label: "Hình thức học",
          value: method === "online" ? "Online" : "Offline",
        },
      ],
    });

    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerTitle}>ĐĂNG YÊU CẦU MỚI</div>
      </div>
      <div className={styles.contentContainer}>
        <RequestStep data={stepperData} active={0} />
        <div className={styles.sectionContainer}>
          <FormSection title="I. THÔNG TIN HỌC VIÊN">
            <div className={styles.studentInfo}>
              <div className={styles.ageGroup}>
                <label htmlFor="name" className={styles.label}>
                  Họ và tên
                </label>
                <input
                  type="text"
                  id="name"
                  className={styles.input}
                  placeholder="Nhập họ và tên"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className={styles.expectations}>
                <label htmlFor="expectations" className={styles.label}>
                  Mong muốn của học viên với gia sư
                </label>
                <input
                  type="text"
                  id="expectations"
                  className={styles.input}
                  placeholder="Nhập mong muốn của học viên với gia sư"
                  value={irequest}
                  onChange={(e) => setIrequest(e.target.value)}
                />
              </div>
            </div>
          </FormSection>
        </div>

        <div className={styles.sectionContainer}>
          <FormSection title="II. THỜI GIAN VÀ HỌC PHÍ">
            <div className={styles.timeAndFee}>
              <div className={styles.budget}>
                <label htmlFor="budget" className={styles.label}>
                  Ngân sách của một buổi học
                </label>
                <div className={styles.budgetInput}>
                  <input
                    type="text"
                    id="budget"
                    className={styles.input}
                    placeholder="Nhập ngân sách một buổi học"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                  />
                  <div className={styles.currency}>VNĐ</div>
                </div>
              </div>

              <div className={styles.timeSelection}>
                <SelectInput
                  label="Thời gian rảnh"
                  placeholder="Chọn thời gian"
                  options={[
                    "Thứ Hai",
                    "Thứ Ba",
                    "Thứ Tư",
                    "Thứ Năm",
                    "Thứ Sáu",
                    "Thứ Bảy",
                    "Chủ Nhật",
                  ]}
                  multi={true}
                  onChange={(value) => setFree(value)}
                />
              </div>
            </div>
          </FormSection>
        </div>

        <div className={styles.sectionContainer}>
          <FormSection title="III. THÔNG TIN MÔN HỌC">
            <div className={styles.courseInfo}>
              <div className={styles.selects}>
                <SelectInput
                  label="Chọn môn học"
                  placeholder="Chọn môn học"
                  options={[
                    "Toán học",
                    "Vật lý",
                    "Hóa học",
                    "Lịch sử",
                    "Văn học",
                    "Tiếng Anh",
                    "Sinh học",
                    "Tin học",
                    "Tiếng Nhật",
                    "Vẽ",
                  ]}
                  onChange={(value) => setSubject(value)}
                />
                <SelectInput
                  label="Chọn trình độ"
                  placeholder="Chọn trình độ"
                  options={[
                    "Lớp 1",
                    "Lớp 2",
                    "Lớp 3",
                    "Lớp 4",
                    "Lớp 5",
                    "Lớp 6",
                    "Lớp 7",
                    "Lớp 8",
                    "Lớp 9",
                    "Lớp 10",
                    "Lớp 11",
                    "Lớp 12",
                    "N5",
                    "N4",
                    "N3",
                    "N2",
                    "N1",
                    "IELTS 4.0-5.0",
                    "IELTS 5.5-6.0",
                    "IELTS 6.5-7.0",
                    "IELTS 7.5-8.0",
                    "TOEFL 60-80",
                    "TOEFL 81-100",
                    "TOEFL 101-120",
                  ]}
                  onChange={(value) => setLevel(value)}
                />
              </div>

              <div className={styles.sessions}>
                <label htmlFor="sessions" className={styles.label}>
                  Số buổi học
                </label>
                <div className={styles.sessionsInput}>
                  <input
                    type="text"
                    id="sessions"
                    className={styles.input}
                    placeholder="Nhập số buổi học"
                    value={sessions}
                    onChange={(e) => setSessions(e.target.value)}
                  />
                  <div className={styles.unit}>buổi/tuần</div>
                </div>
              </div>

              <div className={styles.teachingMethod}>
                <div className={styles.label}>Hình thức</div>
                <div className={styles.options}>
                  <label className={styles.option}>
                    <input
                      type="radio"
                      name="method"
                      value="online"
                      checked={method === "online"}
                      onChange={(e) => setMethod(e.target.value)}
                    />
                    <span>Online</span>
                  </label>
                  <label className={styles.option}>
                    <input
                      type="radio"
                      name="method"
                      value="offline"
                      checked={method === "offline"}
                      onChange={(e) => setMethod(e.target.value)}
                    />
                    <span>Offline</span>
                  </label>
                </div>
              </div>
            </div>
          </FormSection>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.button}  onClick = {() => navigate(-1)}>
          <Button title="Hủy" type="secondary"/>
        </div>
        <div className={styles.button} onClick={handleConfirm}>
          <Button title="Xác nhận" />
        </div>
      </div>
      {showOverlay && (
        <AcceptedOverlay
          data={overlayData}
          type="confirm"
          yes={() => setSuccess(true)}
          no={handleCloseOverlay}
        />
      )}
        {success && <AcceptedOverlay data = {successData} yes = {() => navigate('../find-tutors')} />}

    </div>
  );
};

export default NewRequest;
