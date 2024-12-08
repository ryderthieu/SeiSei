import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TopTabNavigation from "../../../components/TopTabNavigation/TopTabNavigation";
import style from "./Courses.module.scss";
import { CourseCard } from "../../../components/Card/Card";
import { DataContext } from "../../../Context/DataContext";

const TopTab = ["Tất cả", "Đang diễn ra", "Đã hoàn thành"];

const Courses = () => {
  const [tab, setTab] = useState(0);
  const [data, setData] = useState([])
  const {coursesData} = useContext(DataContext)

   useEffect(() => {
    const updatedData = coursesData.map((v) => {
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

    setData(updatedData);
  }, [coursesData]);


  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.headerTitle}>DANH SÁCH LỚP HỌC CỦA TÔI</div>
      </div>

      <div className={style.content}>
        <TopTabNavigation data={TopTab} activeTab={tab} onTabChange={setTab} />
        <div className={style.tabContent}>
          {
            tab === 0 && data.map((item, index) => (
              <Link 
                key={index}
                className={[style.courseItem, item.status === 'Đã hoàn thành' ? style.disable : ''].join(' ')}
                to={`course-item/${item.id}`}
              >
                <CourseCard data = {item} />
              </Link>

            ))
          }
          {
            tab === 1 && data.filter((value) => value.status === 'Đang học').map((item, index) => (
              <Link 
                key={index}
                className={style.courseItem}
                to={`course-item/${item.id}`}
              >
                <CourseCard data = {item} />
              </Link>

            ))
          }
          {
            tab === 2 && data.filter((value) => value.status === 'Đã hoàn thành').map((item, index) => (
              <Link 
                key={index}
                className={[style.courseItem, style.disable].join(' ')}
                to={`course-item/${item.id}`}
              >
                <CourseCard data = {item} />
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Courses;
