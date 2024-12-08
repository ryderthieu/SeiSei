import { useState } from 'react';
import TopTabNavigation from '../../../components/TopTabNavigation/TopTabNavigation';
import style from './FindTutors.module.scss'
import Toan from '../../../assets/images/math1.png'
import Anh from '../../../assets/images/english.png'
import { CourseCard } from '../../../components/Card/Card';
import { Link, useNavigate } from 'react-router-dom';
import AcceptedOverlay from '../../../components/Overlay/Overlay';

const data = [
  {
    id: 0,
    content: [
      {
        img: Toan,
        title: "MA010 - TOÁN 10",
        content: [
          { label: "", value: ["Offline - TP. Hồ Chí Minh"] },
          { value: ["2 buổi / 1 tuần"] },
        ],
        color: "#AD8BC8",
      },
      {
        img: Anh,
        title: "ENG010 - ANH 10",
        content: [
          { value: ["Offline - Vũng Tàu"] },
          { value: ["2 buổi / 1 tuần"] },
        ],
        color: "#05A344",
      },
      {
        img: Anh,
        title: "ENG010 - ANH 10",
        content: [
          { value: ["Offline - Vũng Tàu"] },
          { value: ["2 buổi / 1 tuần"] },
        ],
        color: "#05A344",
      },
      {
        img: Anh,
        title: "ENG010 - ANH 10",
        content: [
          { value: ["Offline - Vũng Tàu"] },
          { value: ["2 buổi / 1 tuần"] },
        ],
        color: "#05A344",
      },
    ],
  },
  {
    id: 1,
    content: [
      {
        img: Toan,
        title: "MA010 - TOÁN 10",
        content: [
          { label: "", value: ["Offline - TP. Hồ Chí Minh"] },
          { value: ["2 buổi / 1 tuần"] },
        ],
        color: "#AD8BC8",
      },
    ],
  },
  {
    id: 2,
    content: [
      {
        img: Toan,
        title: "MA010 - TOÁN 10",
        content: [
          { label: "", value: ["Offline - TP. Hồ Chí Minh"] },
          { value: ["2 buổi / 1 tuần"] },
        ],
        color: "#AD8BC8",
      },
    ],
  },
];

const TopTab = ['Yêu cầu đang mở', 'Học thử', 'Yêu cầu đã đóng']

const overlayData = {
  title: 'THÔNG TIN BUỔI HỌC THỬ',
  content: [
    {
      label: 'Ngày học',
      value: '20/11/2024'
    },
    {
      label: 'Thời gian',
      value: '19h00 - 21h00'
    },
    {
      label: 'Hình thức',
      value: 'Online'
    },
    {
      label: 'Tình trạng',
      value: 'Chưa hoàn thành'
    },
  ],
  color: '#005A96'
}
const ClassRegister = () => {
  const [tab, setTab] = useState(0)
  const [overlay, setOverlay] = useState(false)

  const navigate = useNavigate()
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
            <div
            className={[style.courseItem, tab === 2 && style.disable].join(' ')}
            onClick={() => {
              if (tab === 1) {
                setOverlay(true);
              }
              else if (tab ===0) {
                navigate('choose-tutors');
              }
            }}
          >
            <CourseCard data={v} />
          </div>
          ))}
        </div>
      </div>
      {overlay && <AcceptedOverlay data={overlayData} no = {() => setOverlay(false)} yes = {() => navigate('confirm')} type='confirm'/> }

    </div>
  );
};

export default ClassRegister;
