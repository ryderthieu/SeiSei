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
    title: [{ label: 'Lớp', value: 'Toán 10' }],
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
    setSelectedFile(null);
  };

  const handleConfirm = () => {
    if (selectedFile) {
      alert('Bài làm đã được xác nhận.');
    } else {
      alert('Vui lòng chọn một bài làm.');
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

        {/* Nội dung hiển thị theo từng tab */}
        {tab === 0 && (
          <div>
            <div className={style.requestCard}>
              <FullContentCard data={requestData[0]} />
            </div>

            <div className={style.headerList}>DANH SÁCH BÀI KIỂM TRA</div>
            <div className={style.testList}>
              <div className={style.testSelect}>
                <select className={style.select}>
                  <option value="">Chọn bài kiểm tra</option>
                  <option value="test1">Bài kiểm tra 1</option>
                  <option value="test2">Bài kiểm tra 2</option>
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
        )}

        {tab === 1 && (
          <div>
            <div className={style.tutorInfo}>
              <h2>Nguyễn Văn A</h2>
              <p><strong>Giới tính:</strong> Nam</p>
              <p><strong>Bằng cấp:</strong> Ielts 7.0</p>
              <p><strong>Giới thiệu:</strong> Sinh viên năm 4 trường Đại học Khoa học Xã hội & Nhân văn, chuyên ngành Ngôn ngữ Anh.</p>
            </div>
            <div className={style.supportButtons}>
                <label htmlFor="details">Đánh giá gia sư:</label>
                <textarea id="details" name="details" rows="4"></textarea>
              </div>
              <button type="submit" className={style.submitButton}>
                Gửi
              </button>
          </div>
        )}

        {tab === 2 && (
          <div>
            <form className={style.supportForm}>
              <h3>Bạn muốn làm gì?</h3>
              <div>
                <input type="radio" id="cancel" name="action" value="cancel" />
                <label htmlFor="cancel">Hủy khóa học</label>
              </div>
              <div>
                <input type="radio" id="change-tutor" name="action" value="change-tutor" />
                <label htmlFor="change-tutor">Thay đổi gia sư</label>
              </div>
              <div>
                <input type="radio" id="other" name="action" value="other" />
                <label htmlFor="other">Khác</label>
              </div>
              <div className={style.supportButtons}>
                <label htmlFor="details">Mô tả chi tiết/lý do:</label>
                <textarea id="details" name="details" rows="4"></textarea>
              </div>
              <button type="submit" className={style.submitButton}>
                Gửi
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseItem;
