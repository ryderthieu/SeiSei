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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
);

const TopTab = ['Điểm kiểm tra', 'Báo cáo của gia sư'];

const ClassDetail = () => {
  const [tab, setTab] = useState(0);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/student-dashboard/study-results');
  };

  const chartData = {
    labels: ['Đầu khóa', 'Giữa khóa', 'Cuối khóa'],
    datasets: [
      {
        label: 'Điểm',
        data: [2, 4, 6, 7, 9],
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
    { name: 'Kiểm tra thường xuyên 45p', score: '8.5/10' },
    { name: 'Kiểm tra 15 phút lần 1', score: '6.0/10' },
    { name: 'Kiểm tra 15 phút lần 2', score: '9.0/10' },
    { name: 'Kiểm tra chất lượng đầu vào', score: '7.7/10' },
  ];

  return (
    <div className={style.container}>
      <div className={style.header}>
        <ion-icon name="arrow-back-outline" onClick={handleBackClick}></ion-icon>
        <div className={style.headerTitle}>CHI TIẾT LỚP HỌC</div>
      </div>
      <div className={style.content}>
        <TopTabNavigation data={TopTab} activeTab={tab} onTabChange={setTab} />

        <div className={style.chart}>
          <Line data={chartData} options={chartOptions} />
        </div>

        <div className={style.detailsSection}>
        {/* Card for lessons */}
        <div className={style.card}>
          <h3>Các buổi đã học</h3>
          <ul className={style.list}>
            {lessons.map((lesson, index) => (
              <li key={index} className={style.item}>
                <div className={style.title}>
                  <span className={style.icon}>
                    <ion-icon name="checkmark-circle-outline"></ion-icon>
                  </span>
                  {lesson.title}
                  <span className={style.status}>Đã hoàn thành</span>
                </div>
                <div className={style.score}>{lesson.score}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Card for tests */}
        <div className={style.card}>
          <h3>Điểm bài kiểm tra</h3>
          <ul className={style.list}>
            {tests.map((test, index) => (
              <li key={index} className={style.item}>
                <div className={style.title}>
                  {test.name}
                  <span className={style.time}>Thời gian: {test.time || 'N/A'}</span>
                </div>
                <div className={style.score}>{test.score}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ClassDetail;
