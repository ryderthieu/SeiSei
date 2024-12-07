import { useState } from "react";
import { Link } from "react-router-dom";
import TopTabNavigation from "../../../components/TopTabNavigation/TopTabNavigation";
import style from "./Courses.module.scss";
import Toan from "../../../assets/images/math1.png";
import Anh from "../../../assets/images/english.png";
import { CourseCard } from "../../../components/Card/Card";

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

const TopTab = ["Tất cả", "Đang diễn ra", "Đã hoàn thành"];

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
          {data[tab]?.content.map((v, i) => (
            <Link
            key={i}
              className={[style.courseItem, tab === 2 && style.disable].join(
                " "
              )}
              to="course-item"
            >
              <CourseCard data={v} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
