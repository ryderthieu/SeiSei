import React, { createContext, useState } from 'react';
import Toan from "../assets/images/math1.png";
import Anh from "../assets/images/english.png";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  // Dữ liệu các lớp
  const [coursesData, setCoursesData] = useState([
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
      ],
    },
  ]);

  // Dữ liệu đề xuất
  const [suggest, setSuggest] = useState([
    {
      img: Anh,
      title: [
        {
          label: "Gia sư",
          value: "Nguyễn Văn A",
        },
        {
          label: "Giới tính",
          value: "Nam",
        },
      ],
      content: {
        title: "ĐỀ NGHỊ DẠY",
        content: [
          {
            label: "Ngày sinh",
            value: ["21/11/2001"],
          },
          {
            label: "Lịch rảnh",
            value: ["Thứ Hai", "Thứ Tư"],
            tag: ["#D00000", "#359508"],
          },
          {
            label: "Bằng cấp",
            value: ["Sinh viên - Ielts 7.0"],
          },
          {
            label: "Thời gian có thể dạy thử",
            value: ["Thứ Năm"],
            tag: ["#D00000"],
          },
        ],
      },
      button: {
        title: "Chấp nhận",
      },
    },
  ]);

  // Dữ liệu yêu cầu
  const [request, setRequest] = useState([
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
      ],
    },
  ]);

  // Hàm thêm khóa học
  const addCourse = (newCourse) => {
    setCoursesData([...coursesData, newCourse]);
  };

  // Hàm xóa khóa học
  const deleteCourse = (courseId) => {
    setCoursesData(coursesData.filter((course) => course.id !== courseId));
  };

  // Hàm sửa khóa học
  const editCourse = (updatedCourse) => {
    setCoursesData(
      coursesData.map((course) =>
        course.id === updatedCourse.id ? updatedCourse : course
      )
    );
  };

  // Hàm thêm đề xuất
  const addSuggest = (newSuggest) => {
    setSuggest([...suggest, newSuggest]);
  };

  // Hàm xóa đề xuất
  const deleteSuggest = (suggestIndex) => {
    setSuggest(suggest.filter((_, index) => index !== suggestIndex));
  };

  // Hàm sửa đề xuất
  const editSuggest = (suggestIndex, updatedSuggest) => {
    setSuggest(
      suggest.map((item, index) =>
        index === suggestIndex ? updatedSuggest : item
      )
    );
  };

  // Hàm thêm yêu cầu
  const addRequest = (newRequest) => {
    setRequest([...request, newRequest]);
  };

  // Hàm xóa yêu cầu
  const deleteRequest = (requestId) => {
    setRequest(request.filter((req) => req.id !== requestId));
  };

  // Hàm sửa yêu cầu
  const editRequest = (updatedRequest) => {
    setRequest(
      request.map((req) =>
        req.id === updatedRequest.id ? updatedRequest : req
      )
    );
  };

  return (
    <DataContext.Provider
      value={{
        coursesData,
        addCourse,
        deleteCourse,
        editCourse,
        suggest,
        addSuggest,
        deleteSuggest,
        editSuggest,
        request,
        addRequest,
        deleteRequest,
        editRequest,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
