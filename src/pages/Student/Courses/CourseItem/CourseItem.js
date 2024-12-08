import style from './CourseItem.module.scss';
import Rating from 'react-rating-stars-component';
import { useContext, useEffect, useState } from 'react';
import { FullContentCard } from '../../../../components/Card/Card';
import { useNavigate, useParams } from 'react-router-dom';
import TopTabNavigation from '../../../../components/TopTabNavigation/TopTabNavigation';
import img from '../../../../assets/images/art.png';
import tutorAvatar from '../../../../assets/images/tutor.jpg';
import TestTable from '../../../../components/Table/TestTable';
import TestSubmission from "../../../../components/TestSubmission/TestSubmission";
import Button from '../../../../components/Button/Button';
import { DataContext } from '../../../../Context/DataContext';

const TopTab = ['Lớp học', 'Thông tin gia sư', 'Hỗ trợ học viên'];

// const requestData = [
//   {
//     img: img,
//     title: [{ label: 'Lớp', value: 'Toán 10' }],
//     content: {
//       title: 'Thông tin chi tiết',
//       content: [
//         { label: 'Mã lớp', value: 'MA010' },
//         { label: 'Hình thức', value: ['Online'] },
//         { label: 'Bằng cấp', value: ['Sinh viên - Ielts 7.0'] },
//         { label: 'Số buổi', value: ['2 buổi / 1 tuần'] },
//         { label: 'Mô tả', value: 'Lớp học Toán cho học sinh lớp 10' },
//         { label: 'Thời gian học', value: '8h sáng thứ 2, 4, 6' },
//       ],
//     },
//   },
// ];

const CourseItem = () => {

  const [tab, setTab] = useState(0);
  const [tests, setTests] = useState([
    { id: 1, name: 'Định kỳ lần 1', time: '15h, 19/04/2024', status: 'Đã hoàn thành' },
    { id: 2, name: '15p đầu giờ', time: '15h, 10/05/2024', status: 'Đã hoàn thành' },
    { id: 3, name: 'Định kỳ lần 2', time: '15h, 19/05/2024', status: 'Chưa hoàn thành' },
    { id: 4, name: '15p đầu giờ', time: '15h, 25/05/2024', status: 'Chưa hoàn thành' },
  ]);
  const [showSubmissionForm, setShowSubmissionForm] = useState(true);
  const [showEditButton, setShowEditButton] = useState(false);
  const [requestData, setRequestData] = useState({ img: '', title: [], content: { title: '', content: [] } });
  const {coursesData} = useContext(DataContext)
  const { id } = useParams(); 
  const tutor = coursesData.filter((v) => v.id === id)[0].tutor
  const navigate = useNavigate();

  useEffect(() => {
    const updatedData = coursesData.filter((value) => value.id === id).map((v) => {
      return {
        img: v.image,
        title: [
          { label: 'Lớp', value: v.id },
        ],
        content: {
          title: 'Thông tin khóa học', 
          content: [
            { label: 'Môn học', value: v.subject },
            { label: 'Trình độ', value: v.level },
            { label: 'Lịch học', value: v.date.map((value, i) => (value + ' ' + v.time[i] + ' ')) },
            { label: 'Hình thức', value: v.method },
          ]
        }
      };
    });
  
    setRequestData(updatedData[0]);
  }, []);
  const handleConfirm = () => {
    setShowSubmissionForm(false);
    setShowEditButton(true);
    alert('Bài làm đã được nộp thành công.');
  };

  const handleEditSubmission = () => {
    setShowSubmissionForm(true);
    setShowEditButton(false);
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.headerTitle}>THÔNG TIN LỚP HỌC</div>
      </div>

      <div className={style.content}>
        <TopTabNavigation data={TopTab} activeTab={tab} onTabChange={setTab} />

        {tab === 0 && (
          <div>
            <div className={style.requestCard}>
              {console.log(requestData)}
              <FullContentCard data={requestData} />
            </div>

            <div className={style.headerAndButton}>
              <div className={style.headerList}>DANH SÁCH BÀI KIỂM TRA</div>
              {showEditButton && (
                <div onClick={handleEditSubmission} className={style.editButton}>
                  <Button title='Chỉnh sửa bài nộp'/>
                </div>
              )}
            </div>

            {!showSubmissionForm ? (
              <TestTable tests={tests} onEdit={handleEditSubmission} />
            ) : (
              <TestSubmission tests={tests} handleConfirm={handleConfirm} />
            )}
          </div>
        )}

        {tab === 1 && (
          <div>
            <div className={style.tutorInfo}>
              <img className={style.tutorAvatar} src={tutor.image} alt="Avatar của gia sư" />
              <div className={style.tutorDetails}>
                <h2>{tutor.name}</h2>
                <p>
                  <strong>Giới tính:</strong> {tutor.gender}
                </p>
                <p>
                  <strong>Bằng cấp:</strong> {tutor.certificate}
                </p>
                <p>
                  <strong>Giới thiệu:</strong> {tutor.describe}
                </p>
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
            <div type="submit" className={style.submitButton}>
              <Button title='Thêm nhận xét'/>
            </div>
          </div>
        )}

        {tab === 2 && (
          <div>
            <form className={style.supportForm}>
              <h3>Bạn muốn làm gì?</h3>
              <div className={style.item}>
                <input type="radio" id="cancel" name="action" value="cancel" />
                <label htmlFor="cancel">Hủy khóa học</label>
              </div>
              <div className={style.item}>
                <input
                  type="radio"
                  id="change-tutor"
                  name="action"
                  value="change-tutor"
                />
                <label htmlFor="change-tutor">Thay đổi gia sư</label>
              </div>
              <div className={style.item}>
                <input type="radio" id="other" name="action" value="other" />
                <label htmlFor="other">Khác</label>
              </div>
              <div className={style.supportButtons}>
                <label htmlFor="details">Mô tả chi tiết/lý do:</label>
                <textarea id="details" name="details" rows="4"></textarea>
              </div>
              <div type="submit" className={style.submitButton}>
                <Button title='Gửi' />
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseItem;
