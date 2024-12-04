import { useState } from 'react';
import { Link } from 'react-router-dom';
import TopTabNavigation from '../../../components/TopTabNavigation/TopTabNavigation';
import style from './Courses.module.scss';
import Toan from '../../../assets/images/math1.png';
import Anh from '../../../assets/images/english.png';
import { CourseCard } from '../../../components/Card/Card';

const data = [
  {
    id: 0,
    content: [
      {
        img: Toan,
        title: 'MA010 - TOÁN 10',
        content: ['Offline - TP. Hồ Chí Minh', '2 buổi / 1 tuần'],
        color: '#AD8BC8',
      },
      {
        img: Anh,
        title: 'ENG010 - ANH 10',
        content: ['Offline - TP. Hồ Chí Minh', '2 buổi / 1 tuần'],
        color: '#05A344',
      },
    ],
  },
];

const TopTab = ['Tất cả', 'Đang diễn ra', 'Đã hoàn thành'];

function Courses() {
  const [tab, setTab] = useState(0);

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.headerTitle}>DANH SÁCH LỚP HỌC CỦA TÔI</div>
      </div>

      <div className={style.content}>
        <TopTabNavigation data={TopTab} activeTab={tab} onTabChange={setTab} />
        <div className={style.tabContent}>
          {data[tab]?.content?.length > 0 ? (
            data[tab].content.map((v, index) => (
            <Link to="course-item" className={style.courseItem}>
              <CourseCard data={v} />
            </Link>
            ))
          ) : (
            <p>No courses available in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Courses;
