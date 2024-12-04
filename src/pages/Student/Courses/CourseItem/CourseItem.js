import style from './CourseItem.module.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopTabNavigation from '../../../../components/TopTabNavigation/TopTabNavigation';

const TopTab = ['Lớp học', 'Thông tin gia sư', 'Hỗ trợ học viên'];

const CourseItem = () => {
  const [tab, setTab] = useState(0);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/student-dashboard/courses');
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <ion-icon
          name="arrow-back-outline"
          onClick={handleBackClick}
        ></ion-icon>
        <div className={style.headerTitle}>
          THÔNG TIN LỚP HỌC
        </div>
      </div>

      <div className={style.content}>
        <TopTabNavigation data={TopTab} activeTab={tab} onTabChange={setTab} />
      </div>
    </div>
  );
};

export default CourseItem;
