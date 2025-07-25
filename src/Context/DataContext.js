import React, { createContext, useState } from 'react';
import Toan from "../assets/images/math1.png";
import Anh from "../assets/images/english.png";
import Nhat from "../assets/images/japanese1.png"
import Ve from "../assets/images/art.png"
import Hoa from "../assets/images/chemistry.png"
import Sinh from "../assets/images/biology.png"
import avt1 from "../assets/images/thieu.png"
import ltn from "../assets/images/ltnhi.png"
import pq from "../assets/images/pq.png"
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
        name: 'Trịnh Thị Phương Quỳnh',
        image: pq,
        gender: 'Nữ',
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
            image: pq,
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
        name: 'Hóa 10',
        subject: 'Hóa',
        level: 'Lớp 10',
        image: Hoa,
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
            image: pq,
            gender: 'Nữ',
            describe: 'Có kinh nghiệm dạy tiếng Nhật nhiều năm',
            certificate: 'N2'
          }
        ],
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
        status: 'Học thử',
        color: "#f6b2cb",
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
            image: pq,
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
  const [payment, setPayment] = useState([
    {
      paymentId: 'HD001',
      id: 'MA001',
      price: '250.000 /buổi',
      time: '11/2024',
      sessions: '6 buổi',
      total: '1.500.000 VND',
      color: "rgba(237, 102, 158, 1)",
      backgroundColor: "rgba(237, 102, 158, 0.2)",
      status: 'Chưa thanh toán'
    },
    {
      paymentId: 'HD002',
      id: 'EN001',
      price: '300.000 /buổi',
      time: '11/2024',
      sessions: '8 buổi',
      total: '2.400.000 VND',
      color: "rgba(255, 193, 7, 1)",
      backgroundColor: "rgba(255, 193, 7, 0.2)",
      status: 'Chưa thanh toán'
    },
    {
      paymentId: 'HD003',
      id: 'JA001',
      price: '240.000 /buổi',
      time: '11/2024',
      sessions: '10 buổi',
      total: '2.400.000 VND',
      color: "rgba(99, 218, 93, 1)",
      backgroundColor: "rgba(99, 218, 93, 0.2)",
      status: 'Chưa thanh toán'
    },
    {
      paymentId: 'HD004',
      id: 'MA001',
      price: '250.000 /buổi',
      time: '11/2024',
      sessions: '6 buổi',
      total: '1.500.000 VND',
      color: "rgba(99, 183, 255, 1)",
      backgroundColor: "rgba(99, 183, 255, 0.2)",
      status: 'Chưa thanh toán'
    },
    {
      paymentId: 'HD005',
      id: 'JA001',
      price: '240.000 /buổi',
      time: '10/2024',
      sessions: '10 buổi',
      total: '2.400.000 VND',
      color: "rgba(99, 218, 93, 1)",
      backgroundColor: "rgba(99, 218, 93, 0.2)",
      status: 'Đã thanh toán',
      datePaid: '01/11/2024'
    },
    {
      paymentId: 'HD006',
      id: 'MA001',
      price: '250.000 /buổi',
      time: '10/2024',
      sessions: '6 buổi',
      total: '1.500.000 VND',
      color: "rgba(99, 183, 255, 1)",
      backgroundColor: "rgba(99, 183, 255, 0.2)",
      status: 'Đã thanh toán',
      datePaid: '31/10/2024'
    },
  ])
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
  
    setCoursesData((prevCourses) => [...prevCourses, newCourse]);
  };
  const chooseTutor = ({requestId, tutorId}) => {
    const selectRequest = request.find((v) => v.id === requestId)
    const selectTutor = selectRequest.tutors.find((v) => v.id === tutorId)
    const updatedRequests = request.map((v) =>
      v.id === requestId ? { ...v, tutor: selectTutor } : v
  );
    setRequest(updatedRequests)
  }

  const pay = (id) => {
    const today = new Date().toLocaleDateString('vi-VN')
    setPayment((prev) =>
      prev.map((item) =>
        item.paymentId === id ? { ...item, status: "Đã thanh toán", datePaid: today } : item
      )
    );
  };
  return (
    <DataContext.Provider
      value={{
        coursesData,
        request,
        cancelRequest,
        trialRequest,
        addRequest,
        addCourse,
        chooseTutor,
        payment,
        pay
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
