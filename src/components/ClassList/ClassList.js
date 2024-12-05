import React from "react";
import { Link } from "react-router-dom";
import style from "./ClassList.module.scss"; 
import mathImage from '../../assets/images/chemistry.png';
import artImage from '../../assets/images/english.png';
import chemistryImage from '../../assets/images/japanese.png';
import englishImage from '../../assets/images/english.png';

const ClassList = () => {
  const classes = [
    {
      id: 1,
      subject: "Toán 10",
      classCode: "SS0101",
      instructor: "Lê Thiện Nhi",
      mode: "Online",
      schedule: "2 buổi / 1 tuần",
      image: mathImage, 
    },
    {
      id: 2,
      subject: "Vẽ",
      classCode: "SS0102",
      instructor: "Trịnh Thị Phương Quỳnh",
      mode: "Offline - Khu vực: TP.HCM",
      schedule: "2 buổi / 1 tuần",
      image: artImage, 
    },
    {
      id: 3,
      subject: "Hóa học 11",
      classCode: "SS0103",
      instructor: "Đỗ Trọng Phúc",
      mode: "Online",
      schedule: "3 buổi / 1 tuần",
      image: chemistryImage, 
    },
    {
      id: 4,
      subject: "Tiếng Anh",
      classCode: "SS0104",
      instructor: "Phan Tường Vy",
      mode: "Online",
      schedule: "2 buổi / 1 tuần",
      image: englishImage, 
    },
    {
      id: 5,
      subject: "JLPT N3",
      classCode: "SS0105",
      instructor: "Huỳnh Quốc Tuấn",
      mode: "Online",
      schedule: "2 buổi / 1 tuần",
      image: englishImage, 
    },
  ];

  return (
    <div className={style["class-list-container"]}>
      <table className={style["class-list-table"]}>
        <thead>
          <tr>
            <th className={style["table-cell"]}>Môn học</th>
            <th className={style["table-cell"]}>Mã số lớp</th>
            <th className={style["table-cell"]}>Giáo sư</th>
            <th className={style["table-cell"]}>Hình thức học</th>
            <th className={style["table-cell"]}>Số buổi</th>
            <th className={style["table-cell"]}></th>
          </tr>
        </thead>
        <tbody>
          {classes.map((classItem) => (
            <tr key={classItem.id} className={style.row}>
              <td className={`${style["table-cell"]} ${style["subject-column"]}`}>
                <img src={classItem.image} alt={classItem.subject} />
                {classItem.subject}
              </td>
              <td className={style["table-cell"]}>{classItem.classCode}</td>
              <td className={style["table-cell"]}>{classItem.instructor}</td>
              <td className={style["table-cell"]}>{classItem.mode}</td>
              <td className={style["table-cell"]}>{classItem.schedule}</td>
              <td className={style["table-cell"]}>
                <Link
                  className={style["detail-link"]}
                  to="classdetail"
                  state={classItem}
                >
                  <button className={style["detail-button"]}>Chi tiết</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassList;
