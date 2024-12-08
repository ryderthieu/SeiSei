import React from 'react'
import style from './StudyResults.module.scss'
import ClassList from '../../../components/ClassList/ClassList'
function StudyResults() {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.headerTitle}>
          KẾT QUẢ HỌC TẬP
        </div>
      </div>

      <div className={style.content}>
      <ClassList />
      </div>
    </div>
  );
}

export default StudyResults
