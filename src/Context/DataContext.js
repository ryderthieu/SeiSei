import React, { createContext, useState } from 'react';
import Toan from "../assets/images/math1.png";
import Anh from "../assets/images/english.png";
import Nhat from "../assets/images/japanese1.png"
import avt1 from "../assets/images/giasu.jpg"
const DataContext = createContext();

const DataProvider = ({ children }) => {
  // Dữ liệu các khóa học
  const [coursesData, setCoursesData] = useState([
    {
      id: 'MA001',
      name: 'TOÁN 10',
      subject: 'Toán',
      level: 'Lớp 10',
      image: Toan,
      method: 'Online',
      price: '200.000 /buổi',
      date: ['Thứ Hai', 'Thứ Năm'],
      time: ['08:00 - 10:00', '14:00 - 16:00'],
      tutor: {
        name: 'Huỳnh Văn Thiệu',
        image: avt1,
        gender: 'Nam',
        describe: 'Sinh viên năm 2 đại học Công nghệ Thông tin',
        certificate: 'N2'
      },
      student : {
        name: 'Nguyễn Văn A',
        age: 16,
        gender: 'Nam',
      },
      status: 'Đang học',
      color: '#AD8BC8',
    },
    {
      id: 'EN001',
      name: 'TIẾNG ANH 10',
      subject: 'Tiếng Anh',
      level: 'Lớp 10',
      image: Anh,
      method: 'Online',
      price: '250.000 /buổi',
      date: ['Thứ Ba', 'Thứ Năm'],
      time: ['08:00 - 10:00', '12:00 - 14:00'],
      teacher: {
        name: 'Lê Thiện Nhi',
        image: avt1,
        gender: 'Nữ',
        describe: 'Có kinh nghiệm dạy tiếng Anh nhiều năm',
        certificate: 'IELTS 7.0'
      },
      student : {
        name: 'Nguyễn Văn B',
        age: 16,
        gender: 'Nam',
      },
      status: 'Đang học',
      color: '#05A344',
    },
    {
      id: 'EN002',
      name: 'TIẾNG ANH 9',
      subject: 'Tiếng Anh',
      level: 'Lớp 9',
      image: Anh,
      method: 'Online',
      price: '250.000 /buổi',
      date: ['Thứ Tư', 'Thứ Sáu'],
      time: ['08:00 - 10:00', '12:00 - 14:00'],
      teacher: {
        name: 'Lê Thiện Nhi',
        image: avt1,
        describe: 'Có kinh nghiệm dạy tiếng Anh nhiều năm',
        certificate: 'IELTS 7.0'
      },
      student : {
        name: 'Nguyễn Văn B',
        age: 16,
        gender: 'Nam',
      },
      status: 'Đã hoàn thành',
      color: '#05A344',
    },
    {
      id: 'MA002',
      name: 'TOÁN 9',
      subject: 'Toán',
      level: 'Lớp 9',
      image: Toan,
      method: 'Online',
      price: '200.000 /buổi',
      date: ['Thứ Hai', 'Thứ Năm'],
      time: ['08:00 - 10:00', '14:00 - 16:00'],
      teacher: {
        name: 'Huỳnh Văn Thiệu',
        image: avt1,
        describe: 'Sinh viên năm 2 đại học Công nghệ Thông tin',
        certificate: 'N2'
      },
      student : {
        name: 'Nguyễn Văn A',
        age: 16,
        gender: 'Nam',
      },
      status: 'Đã hoàn thành',
      color: '#AD8BC8',
    },
    {
      id: 'JA001',
      name: 'JLPT N3',
      subject: 'Tiếng Nhật',
      level: 'N3',
      image: Nhat,
      method: 'Online',
      price: '300.000 /buổi',
      date: ['Thứ Hai', 'Thứ Bảy'],
      time: ['19:00 - 21:00', '19:00 - 21:00'],
      teacher: {
        name: 'Huỳnh Văn Thiệu',
        image: avt1,
        describe: 'Sinh viên năm 2 đại học Công nghệ Thông tin',
        certificate: 'N2'
      },
      student : {
        name: 'Nguyễn Văn A',
        age: 16,
        gender: 'Nam',
      },
      status: 'Đang học',
      color: '#dc635b',
    },
  ]);
  // Dữ liệu các đề nghị
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
