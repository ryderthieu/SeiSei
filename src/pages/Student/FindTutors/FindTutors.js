import { useState } from 'react';
import TopTabNavigation from '../../../components/TopTabNavigation/TopTabNavigation';
import style from './FindTutors.module.scss'
import Toan from '../../../assets/images/math1.png'
import Anh from '../../../assets/images/english.png'
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
    id: 1
  },
  {
    id: 2
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
        <div className={style.headerBtn}>
          <div className={style.btnIcon}>
            <ion-icon name="newspaper-outline"></ion-icon>
          </div>
          <div className= {style.btnTitle}>
            Đăng yêu cầu mới
          </div>
        </div>
      </div>

      <div className={style.content}>
        <TopTabNavigation data={TopTab}/>
        <div className={style.tabContent}>
          {data[tab].content.map((v) => (
            <div className={style.courseItem}>
              <CourseCard data={v} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassRegister;
