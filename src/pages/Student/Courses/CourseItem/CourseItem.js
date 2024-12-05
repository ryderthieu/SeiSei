import style from './CourseItem.module.scss';
import Rating from 'react-rating-stars-component';
import { useState } from 'react';
import { FullContentCard } from '../../../../components/Card/Card';
import { useNavigate } from 'react-router-dom';
import TopTabNavigation from '../../../../components/TopTabNavigation/TopTabNavigation';
import img from '../../../../assets/images/art.png';
import tutorAvatar from '../../../../assets/images/tutor.jpg';

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

  const [rating, setRating] = useState(0);

  <Rating
    count={5}
    value={rating}
    onChange={(newRating) => setRating(newRating)}
    size={30}
    activeColor="#ffd700"
  />;

  return (
    <div className={style.container}>
      <div className={style.header}>
        <ion-icon name="arrow-back-outline" onClick={handleBackClick}></ion-icon>
        <div className={style.headerTitle}>THÔNG TIN LỚP HỌC</div>
      </div>

      <div className={style.content}>
        <TopTabNavigation data={TopTab} activeTab={tab} onTabChange={setTab} />

        {tab === 0 && (
          <div>
            <div className={style.requestCard}>
              <FullContentCard data={requestData[0]} />
            </div>

            <div className={style.headerList}>DANH SÁCH BÀI KIỂM TRA</div>
            <div className={style.testList}>
              <div className={style.testSelect}>
                <label className={style.title}>Chọn bài kiểm tra</label>
                <select className={style.select}>
                  <option value="">Chọn bài kiểm tra</option>
                  <option value="test1">Bài kiểm tra 1</option>
                  <option value="test2">Bài kiểm tra 2</option>
                </select>
              </div>
              <label className={style.title}>Bài làm</label>  
              <div className={style.testFile}>
                <ion-icon name="cloud-upload-outline"></ion-icon>
                <label>Thêm bài nộp</label>
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
              <img className={style.tutorAvatar} src={tutorAvatar} alt="Avatar của gia sư" />
              <div className={style.tutorDetails}>
                <h2>Nguyễn Văn A</h2>
                <p><strong>Giới tính:</strong> Nam</p>
                <p><strong>Bằng cấp:</strong> Ielts 7.0</p>
                <p><strong>Giới thiệu:</strong> Sinh viên năm 4 trường Đại học Khoa học Xã hội & Nhân văn, chuyên ngành Ngôn ngữ Anh.</p>
              </div>
            </div>

            <div className={style.rating}>
              <label>ĐÁNH GIÁ GIA SƯ:</label>
              <Rating
                count={5}
                onChange={(newRating) => console.log(`Đánh giá: ${newRating}`)}
                size={30}
                activeColor="#ffd700"
              />
            </div>

            <div className={style.supportButtons}>
              <label htmlFor="details">Ý KIẾN NHẬN XÉT:</label>
              <textarea id="details" name="details" rows="4"></textarea>
            </div>
            <button type="submit" className={style.submitButton}>
              Thêm nhận xét
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
