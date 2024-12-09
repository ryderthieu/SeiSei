import React, { createContext, useState } from 'react';
import Toan from "../assets/images/math1.png";
import Anh from "../assets/images/english.png";
import Nhat from "../assets/images/japanese1.png"
import Ve from "../assets/images/art.png"
import Hoa from "../assets/images/chemistry.png"
import Sinh from "../assets/images/biology.png"
import avt1 from "../assets/images/giasu.jpg"
import ltn from "../assets/images/ltnhi.png"
import pg from "../assets/images/pg.png"
const DataContext = createContext();

const DataProvider = ({ children }) => {
  //Dữ liệu môn học
  const subjectConfig = {
    'Toán': {id:'MA00', color: "#AD8BC8", image: Toan },
    'Tiếng Anh': {id:'EN00', color: "#05A344", image: Anh },
    'Lý': {id: 'PH00', color: "#E76F51", image: Toan },
    'Hóa': {id: 'CH00', color: "#f6b2cb", image: Hoa },
    'Sinh': {id: 'BI00', color: "#52819d", image: Sinh },
    'Tiếng Nhật': {id: 'JA00', color :"#f56968", image: Nhat},
    'Vẽ': {id: 'AR00', color: "#80bee7", image: Ve}
    // Thêm các môn học khác nếu cần
  };
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
      tutor: {
        name: 'Lê Thiện Nhi',
        image: ltn,
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
      tutor: {
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
      color: '#dc635b',
    },
  ]);
  // Dữ liệu các đề nghị
  const [request, setRequest] = useState([
      {
        id: 'MA003',
        name: 'TOÁN 10',
        subject: 'Toán',
        level: 'Lớp 10',
        image: Toan,
        method: 'Online',
        price: '200.000 /buổi',
        date: ['Thứ Hai', 'Thứ Năm'],
        time: ['08:00 - 10:00', '14:00 - 16:00'],
        tutor: {},
        tutors: [
          {
            id: 'GS001',
            name: 'Huỳnh Văn Thiệu',
            image: avt1,
            gender: 'Nam',
            birthday: '06/06/2004',
            describe: 'Sinh viên năm 2 đại học Công nghệ Thông tin',
            certificate: 'N2',
            free: ['Thứ hai', 'Thứ Năm'],
            date: ['12/11/2024', '13/11/2024', '15/11/2024'],
            time: [['07h00 - 09h00', '09h00 - 11h00', '14h00 - 16h00'],
                   ['07h00 - 09h00', '13h00 - 15h00', '19h00 - 21h00'],
                   ['13h00 - 15h00', '17h00 - 19h00']]
          },
          {
            id: 'GS002',
            name: 'Lê Thiện Nhi',
            image: ltn,
            gender: 'Nữ',
            birthday: '06/06/2004',
            describe: 'Có kinh nghiệm dạy tiếng Nhật nhiều năm',
            certificate: 'N2',
            free: ['Thứ hai', 'Thứ Năm'],
            date: ['12/11/2024', '13/11/2024', '15/11/2024'],
            time: [['07h00 - 09h00', '09h00 - 11h00', '14h00 - 16h00'],
                   ['07h00 - 09h00', '13h00 - 15h00', '19h00 - 21h00'],
                   ['13h00 - 15h00', '17h00 - 19h00']]
          },
          {
            id: 'GS003',
            name: 'Trịnh Thị Phương Quỳnh',
            image: pg,
            gender: 'Nữ',
            birthday: '06/06/2004',
            describe: 'Có kinh nghiệm dạy tiếng Nhật nhiều năm',
            certificate: 'N2',
            free: ['Thứ hai', 'Thứ Năm'],
            date: ['12/11/2024', '13/11/2024', '15/11/2024'],
            time: [['07h00 - 09h00', '09h00 - 11h00', '14h00 - 16h00'],
                   ['07h00 - 09h00', '13h00 - 15h00', '19h00 - 21h00'],
                   ['13h00 - 15h00', '17h00 - 19h00']]
          }
        ],
        student : {
          name: 'Nguyễn Văn A',
          age: 16,
          gender: 'Nam',
          request: 'Yêu cầu gia sư nữ, có kinh nghiệm dạy 2 năm trở lên',
        },
        status: 'Đang mở',
        color: '#AD8BC8',
      },
      {
        id: 'MA004',
        name: 'TOÁN 10',
        subject: 'Toán',
        level: 'Lớp 10',
        image: Toan,
        method: 'Online',
        price: '200.000 /buổi',
        date: ['Thứ Hai', 'Thứ Năm'],
        time: ['08:00 - 10:00', '14:00 - 16:00'],
        tutors: [
          {
            name: 'Huỳnh Văn Thiệu',
            image: avt1,
            gender: 'Nam',
            describe: 'Sinh viên năm 2 đại học Công nghệ Thông tin',
            certificate: 'N2'
          },
          {
            name: 'Lê Thiện Nhi',
            image: ltn,
            gender: 'Nữ',
            describe: 'Có kinh nghiệm dạy tiếng Nhật nhiều năm',
            certificate: 'N2'
          },
          {
            name: 'Trịnh Thị Phương Quỳnh',
            image: pg,
            gender: 'Nữ',
            describe: 'Có kinh nghiệm dạy tiếng Nhật nhiều năm',
            certificate: 'N2'
          }
        ],
        student : {
          name: 'Nguyễn Văn A',
          age: 16,
          gender: 'Nam',
        },
        status: 'Học thử',
        color: '#AD8BC8',
      },
      {
        id: 'MA005',
        name: 'TOÁN 10',
        subject: 'Toán',
        level: 'Lớp 10',
        image: Toan,
        method: 'Online',
        price: '200.000 /buổi',
        date: ['Thứ Hai', 'Thứ Năm'],
        time: ['08:00 - 10:00', '14:00 - 16:00'],
        tutors: [
          {
            name: 'Huỳnh Văn Thiệu',
            image: avt1,
            gender: 'Nam',
            describe: 'Sinh viên năm 2 đại học Công nghệ Thông tin',
            certificate: 'N2'
          },
          {
            name: 'Lê Thiện Nhi',
            image: avt1,
            gender: 'Nữ',
            describe: 'Có kinh nghiệm dạy tiếng Nhật nhiều năm',
            certificate: 'N2'
          },
          {
            name: 'Trịnh Thị Phương Quỳnh',
            image: pg,
            gender: 'Nữ',
            describe: 'Có kinh nghiệm dạy tiếng Nhật nhiều năm',
            certificate: 'N2'
          }
        ],
        student : {
          name: 'Nguyễn Văn A',
          age: 16,
          gender: 'Nam',
        },
        status: 'Đã đóng',
        color: '#AD8BC8',
      },
    ]);

  const addRequest = ({subject, level, price, date, request, method, name, time }) => {
      const { id, color, image } = subjectConfig[subject] || { id: "DEFAULT", color: "#000", image: Toan };
    
      const newId = `${id}${request.length + 1}`;
      const newName = subject + ' ' + level
      const newRequest = {
        id: newId,  
        name: newName,
        subject: subject,
        level: level,
        image: image,
        method: method,
        price: price,
        date: date,
        time: time || ['19:00 - 21:00', '19:00 - 21:00'],
        tutors: [],
        student: {
          name: name,
          // age: request.age,
          // gender: request.gender,
          request: request,
        },
        status: 'Đang mở',
        color: color, 
      };
    
      setRequest((prevRequest) => [...prevRequest, newRequest]);
  }

  const cancelRequest = (id) => {
    setRequest((prevRequest) =>
      prevRequest.map((item) =>
        item.id === id ? { ...item, status: "Đã đóng" } : item
      )
    );
  };
  const trialRequest = (id) => {
    setRequest((prevRequest) =>
      prevRequest.map((item) =>
        item.id === id ? { ...item, status: "Học thử" } : item
      )
    );
  };
  const addCourse = (requestId) => {
    
    const selectRequest = request.filter((v) => v.id === requestId)[0]
    const newCourse = {
      id: selectRequest.id,
      name: selectRequest.name,
      subject: selectRequest.subject,
      level: selectRequest.level,
      image: selectRequest.image,
      method: selectRequest.method,
      price: selectRequest.price,
      date: selectRequest.date,
      time: selectRequest.time,
      student: selectRequest.student,
      tutor: selectRequest.tutor,
      status: "Đang học",
      color: selectRequest.color,
    };
  
    // Thêm khóa học mới vào mảng coursesData
    setCoursesData((prevCourses) => [...prevCourses, newCourse]);
  };
  const chooseTutor = ({requestId, tutorId}) => {
    const selectRequest = request.find((v) => v.id === requestId)
    const selectTutor = selectRequest.tutors.find((v) => v.id === tutorId)
    const updatedRequests = request.map((v) =>
      v.id === requestId ? { ...v, tutor: selectTutor } : v
  );
  console.log(updatedRequests)
    setRequest(updatedRequests)
  }

  
  return (
    <DataContext.Provider
      value={{
        coursesData,
        request,
        cancelRequest,
        trialRequest,
        addRequest,
        addCourse,
        chooseTutor
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
