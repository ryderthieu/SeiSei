import React, { useState } from 'react';
import TopTabNavigation from '../../../components/TopTabNavigation/TopTabNavigation';
import style from './Courses.module.scss';
import Toan from '../../../assets/images/math1.png';
import Anh from '../../../assets/images/english.png';
import { CourseCard } from '../../../components/BoxContent/BoxContent';

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
      {
        img: Anh,
        title: 'ENG010 - ANH 10',
        content: ['Offline - TP. Hồ Chí Minh', '2 buổi / 1 tuần'],
        color: '#05A344',
      }
    ]
  },
  {
    id: 1,
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
      {
        img: Anh,
        title: 'ENG010 - ANH 10',
        content: ['Offline - TP. Hồ Chí Minh', '2 buổi / 1 tuần'],
        color: '#05A344',
      }
    ]
  },
  {
    id: 2,
    content: [] // You can add content if necessary
  }
];

const TopTab = ['Tất cả', 'Đang diễn ra', 'Đã hoàn thành'];

function MyClass() {
  const [tab, setTab] = useState(0);  // Track the selected tab

  // Handle tab change
  const handleTabChange = (index) => {
    setTab(index);
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.headerTitle}>
          DANH SÁCH LỚP HỌC CỦA TÔI
        </div>
      </div>

      <div className={style.content}>
        <TopTabNavigation data={TopTab} onTabChange={handleTabChange} />
        <div className={style.tabContent}>
          {data[tab].content.length > 0 ? (
            data[tab].content.map((v, index) => (
              <div key={index} className={style.courseItem}>
                <CourseCard data={v} />
              </div>
            ))
          ) : (
            <p>No courses available for this tab.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyClass;
