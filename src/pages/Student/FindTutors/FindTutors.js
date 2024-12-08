import { useContext, useEffect, useState } from 'react';
import TopTabNavigation from '../../../components/TopTabNavigation/TopTabNavigation';
import style from './FindTutors.module.scss'
import Toan from '../../../assets/images/math1.png'
import Anh from '../../../assets/images/english.png'
import { CourseCard } from '../../../components/Card/Card';
import { Link, useNavigate } from 'react-router-dom';
import AcceptedOverlay from '../../../components/Overlay/Overlay';
import { DataContext } from '../../../Context/DataContext';

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
  const {request} = useContext(DataContext)
  const [data, setData] = useState([])
  const [id, setId] = useState(null)
  useEffect(()=> {
    const updatedData = request.map((v) => {
      return {
        id: v.id,
        img: v.image,
        title: v.name,
        content: [
          { value: [v.method] },
          { value: v.date } 
        ],
        status: v.status,
        color: v.color
      };
    });
    console.log(updatedData)
    setData(updatedData);
  }, [])
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
        {
            tab === 0 && data.filter((value) => value.status === 'Đang mở').map((item, index) => (
              <Link 
                key={index}
                className={style.courseItem}
                to={`choose-tutors/${item.id}`}
              >
                <CourseCard data = {item} />
              </Link>

            ))
          }
          {
            tab === 1 && data.filter((value) => value.status === 'Học thử').map((item, index) => (
              <Link 
                key={index}
                className={style.courseItem}
                onClick={() => {setOverlay(true); setId(item.id)}}
              >
                <CourseCard data = {item} />
              </Link>

            ))
          }
          {
            tab === 2 && data.filter((value) => value.status === 'Đã đóng').map((item, index) => (
              <div 
                key={index}
                className={[style.courseItem, style.disable].join(' ')}
              >
                <CourseCard data = {item} />
              </div>
            ))
          }
        </div>
      </div>
      {overlay && <AcceptedOverlay data={overlayData} no = {() => setOverlay(false)} yes = {() => navigate(`confirm/${id}`)} type='confirm'/> }

    </div>
  );
};

export default ClassRegister;
