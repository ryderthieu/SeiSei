import style from './CourseItem.module.scss';
import { useState } from 'react';
import { FullContentCard } from '../../../../components/Card/Card'; // Import FullContentCard thay cho ExtendableCard
import { useNavigate } from 'react-router-dom';
import TopTabNavigation from '../../../../components/TopTabNavigation/TopTabNavigation';
import img from '../../../../assets/images/art.png';

const TopTab = ['Lớp học', 'Thông tin gia sư', 'Hỗ trợ học viên'];
const requestData = [
  {
    img: img,
    title: [
      { label: 'Lớp', value: 'Toán 10' },
    ],
    content: {
      title: 'Thông tin chi tiết',
      content: [
        { label: 'Mã lớp', value: 'MA010' },
        { label: 'Hình thức', value: ['Online'] },
        { label: 'Bằng cấp', value: ['Sinh viên - Ielts 7.0'] },
        { label: 'Số buổi', value: ['2 buổi / 1 tuần'] },
        { label: 'Mô tả', value: 'Lớp học Toán cho học sinh lớp 10' },
        { label: 'Thời gian học', value: '8h sáng thứ 2, 4, 6' },
      ],
    },
  },
];

const CourseItem = () => {
  const [tab, setTab] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/student-dashboard/courses');
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleCancel = () => {
    setSelectedFile(null); // Reset the selected file
  };

  const handleConfirm = () => {
    if (selectedFile) {
      // Logic for file upload
      alert('Bài làm đã được xác nhận.');
    } else {
      alert("Vui lòng chọn một bài làm.");
    }
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <ion-icon name="arrow-back-outline" onClick={handleBackClick}></ion-icon>
        <div className={style.headerTitle}>THÔNG TIN LỚP HỌC</div>
      </div>

      <div className={style.content}>
        <TopTabNavigation data={TopTab} activeTab={tab} onTabChange={setTab} />
        <div className={style.requestCard}>
          <FullContentCard data={requestData[0]} />
        </div>

        <div className={style.headerList}>DANH SÁCH BÀI KIỂM TRA</div>
        <div className={style.testList}>
          <div className={style.testSelect}>
            <select className={style.select}>
              <option value="">Chọn bài kiểm tra</option>
            </select>
          </div>
          <div className={style.testFile}>
            <label>Bài làm:</label>
            <input type="file" onChange={handleFileChange} />
          </div>
          <div className={style.buttons}>
            <button className={style.cancelButton} onClick={handleCancel}>Hủy</button>
            <button className={style.confirmButton} onClick={handleConfirm}>Xác nhận</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
