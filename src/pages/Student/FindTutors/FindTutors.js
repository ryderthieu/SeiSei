import { useState } from 'react';
import TopTabNavigation from '../../../components/TopTabNavigation/TopTabNavigation';
import style from './FindTutors.module.scss'
import Toan from '../../../assets/images/math1.png'
import Anh from '../../../assets/images/english.png'
import { CourseCard } from '../../../components/Card/Card';
import { Link } from 'react-router-dom';
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
    ]
  },
  {
    id: 2,
    content: [
      {
        img: Toan,
        title: 'MA010 - TOÁN 10',
        content: ['Offline - TP. Hồ Chí Minh', '2 buổi / 1 tuần'],
        color: '#AD8BC8',
      },
    ]
  }
]
const TopTab = ['Yêu cầu đang mở', 'Học thử', 'Yêu cầu đã đóng']
const ClassRegister = () => {
  const [tab, setTab] = useState(0)

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.headerTitle}>
          DANH SÁCH YÊU CẦU
        </div>
        <Link className={style.headerBtn}  to={'new-request'}>
          <div className={style.btnIcon}>
            <ion-icon name="newspaper-outline"></ion-icon>
          </div>
          <div className= {style.btnTitle}>
            Đăng yêu cầu mới
          </div>
        </Link>
      </div>

      <div className={style.content}>
        <TopTabNavigation data={TopTab} activeTab={tab} onTabChange={setTab}/>
        <div className={style.tabContent}>
          {data[tab]?.content?.map((v) => (
            <Link className={[style.courseItem, tab===2&&style.disable].join(' ')} to='choose-tutors'>
              <CourseCard data={v}/>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassRegister;
