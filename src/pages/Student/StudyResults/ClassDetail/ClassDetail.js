import style from './ClassDetail.module.scss';
import Rating from 'react-rating-stars-component';
import { useState } from 'react';
import { FullContentCard } from '../../../../components/Card/Card';
import { useNavigate } from 'react-router-dom';
import TopTabNavigation from '../../../../components/TopTabNavigation/TopTabNavigation';
import img from '../../../../assets/images/art.png';
import tutorAvatar from '../../../../assets/images/tutor.jpg';
import TestTable from '../../../../components/Table/TestTable';
import TestSubmission from "../../../../components/TestSubmission/TestSubmission";

const TopTab = ['Điểm kiểm tra', 'Báo cáo của gia sư'];

const CourseItem = () => {
  const [tab, setTab] = useState(0);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/student-dashboard/study-results');
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <ion-icon name="arrow-back-outline" onClick={handleBackClick}></ion-icon>
        <div className={style.headerTitle}>CHI TIẾT LỚP HỌC</div>
      </div>
      <div className={style.content}>
        <TopTabNavigation data={TopTab} activeTab={tab} onTabChange={setTab} />
      </div>
    </div>
  );
};

export default CourseItem;
