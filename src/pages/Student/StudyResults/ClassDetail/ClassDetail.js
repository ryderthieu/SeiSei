import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './ClassDetail.module.scss';
import { Line } from 'react-chartjs-2';
import TopTabNavigation from '../../../../components/TopTabNavigation/TopTabNavigation';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const TopTab = ['Điểm kiểm tra', 'Báo cáo của gia sư'];

const ClassDetail = () => {
  const [tab, setTab] = useState(0);
  const navigate = useNavigate();

  const chartData = {
    labels: ['Đầu khóa', '', '', 'Giữa khóa', '', '', 'Cuối khóa'],
    datasets: [
      {
        label: 'Điểm',
        data: [4, 6, 7, 8.5],
        borderColor: '#4caf50',
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: true },
    },
  };

  const lessons = [
    { title: 'Làm quen với các phép...', score: '7.5/10' },
    { title: 'Hình học không gian', score: '9.0/10' },
    { title: 'Phương trình 3 ẩn', score: '6.5/10' },
    { title: 'Đại số', score: '8.7/10' },
  ];

  const tests = [
    { name: 'Kiểm tra thường xuyên 45p', score: '8.5/10', time : '10/10/2024' },
    { name: 'Kiểm tra 15 phút lần 2', score: '7.0/10', time : '05/10/2024' },
    { name: 'Kiểm tra 15 phút lần 1', score: '6.0/10', time : '01/11/2024' },
    { name: 'Kiểm tra chất lượng đầu vào', score: '4.0/10', time: '01/10/2024'},
  ];

  const tutorFeedback = {
    rating: 4.5,
    comments: [
      'Học sinh có sự tiến bộ đáng kể.'
    ],
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.headerTitle}>CHI TIẾT ĐIỂM SỐ</div>
      </div>
  
      <div className={style.content}>
        <TopTabNavigation data={TopTab} activeTab={tab} onTabChange={setTab} />
  
        {tab === 0 ? (
          <>
            <div className={style.chart}>
              <Line data={chartData} options={chartOptions} />
            </div>
  
            <div className={style.detailsSection}>
              <div className={style.card}>
                <h3>Các buổi đã học</h3>
                <table className={style.table}>
                  <thead>
                    <tr>
                      <th>Buổi học</th>
                      <th>Trạng thái</th>
                      <th>Điểm</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lessons.map((lesson, index) => (
                      <tr key={index}>
                        <td>{lesson.title}</td>
                        <td>Đã hoàn thành</td>
                        <td>{lesson.score}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
  
              <div className={style.card}>
                <h3>Điểm bài kiểm tra</h3>
                <table className={style.table}>
                  <thead>
                    <tr>
                      <th>Tên bài kiểm tra</th>
                      <th>Thời gian</th>
                      <th>Điểm</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tests.map((test, index) => (
                      <tr key={index}>
                        <td>{test.name}</td>
                        <td>{test.time || 'N/A'}</td>
                        <td>{test.score}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : (
          <div className={style.feedbackSection}>
            <div className={style.rating}>
              <span>Đánh giá: </span>
              {'★'.repeat(Math.floor(tutorFeedback.rating))}
              {'☆'.repeat(5 - Math.floor(tutorFeedback.rating))}
              <span> ({tutorFeedback.rating}/5)</span>
            </div>
            <h4>Nhận xét:</h4>
            <ul>
              {tutorFeedback.comments.map((comment, index) => (
                <li key={index}>{comment}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )};
export default ClassDetail;