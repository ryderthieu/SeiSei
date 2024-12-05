import "./Dashboard.scss";
import HeaderImg from "../../../assets/images/dashboard-header-item.png"
import Calendar from "../../../components/Calendar/Calendar";
import Table from "../../../components/Table/Table";
import { Link } from "react-router-dom";
import {CourseCard} from "../../../components/Card/Card";
import Toan from '../../../assets/images/math1.png'
import Anh from '../../../assets/images/english.png'
const Dashboard = () => {
  const courses = [
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
    }
  ]
  const data = [
    {
      'Môn học': 'Hóa 12',
      'Bắt đầu': '19h, 19/05/2024',
      'Kết thúc': '21h, 19/05/2024'
    },
    {
      'Môn học': 'Hóa 12',
      'Bắt đầu': '19h, 19/05/2024',
      'Kết thúc': '21h, 19/05/2024'
    },
    {
      'Môn học': 'Hóa 12',
      'Bắt đầu': '19h, 19/05/2024',
      'Kết thúc': '21h, 19/05/2024'
    },
    {
      'Môn học': 'Hóa 12',
      'Bắt đầu': '19h, 19/05/2024',
      'Kết thúc': '21h, 19/05/2024'
    },
  ]
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="dashboard-header-title">
          CHÀO BẠN
        </div>
        <div className="dashboard-header-content">
          Chúc bạn có một ngày làm việc năng suất và tràn đầy năng lượng cùng với SeiSei nha!
        </div>
        <img src={HeaderImg} className="dashboard-header-img"/>
      </div>
      <div className="dashboard-content">
        <div className="dashboard-content-left">
          <div className="content-left__item">
            <div className="content-left__item__header">
              <div className="content-left__header__title">
                Thời khóa biểu
              </div>
              <Link className="content-left__header__btn" to={"find-tutors"}>
                Xem thêm
              </Link>
            </div>
            <Table data={data} />
          </div>
          <div className="content-left__item">
            <div className="content-left__item__header">
              <div className="content-left__header__title">
                Lớp học của bạn
              </div>
              <Link className="content-left__header__btn" to={"courses"}>
                Xem thêm
              </Link>
            </div>
            <div className="content-left__content_items">
              <div className="content-left__content_item">
                <CourseCard data={courses[0]}/>
              </div>
              <div className="content-left__content_item">
                <CourseCard data={courses[1]}/>
              </div>
            </div>
          </div>
        </div>
        <div className="calendar">
          <Calendar />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
