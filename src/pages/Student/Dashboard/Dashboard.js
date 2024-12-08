import "./Dashboard.scss";
import HeaderImg from "../../../assets/images/dashboard-header-item.png"
import Calendar from "../../../components/Calendar/Calendar";
import Table from "../../../components/Table/Table";
import { Link } from "react-router-dom";
import {CourseCard} from "../../../components/Card/Card";
import Anh from '../../../assets/images/english.png'
import Button from "../../../components/Button/Button";
import { useContext } from "react";
import { DataContext } from "../../../Context/DataContext";
const Dashboard = () => {
  const {coursesData} = useContext(DataContext)

  const courses = [
    {
      title: coursesData[0].name,
      color: coursesData[0].color,
      img: coursesData[0].image,
      content: [
        {
          value: [coursesData[0].method]
        },
        {
          value: coursesData[0].date  
        }
      ]
    },
    {
      title: coursesData[1].name,
      color: coursesData[1].color,
      img: coursesData[1].image,
      content: [
        {
          value: [coursesData[1].method]
        },
        {
          value: coursesData[1].date  
        }
      ]
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
                <Button title='Xem thêm'/>
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
                <Button title='Xem thêm'/>
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
