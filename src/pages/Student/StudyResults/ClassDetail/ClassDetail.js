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
          {/* Table for lessons */}
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

          {/* Table for tests */}
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
      </div>
    </div>
  );
};

export default ClassDetail;
