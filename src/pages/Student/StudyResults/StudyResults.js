<<<<<<< HEAD
import React from 'react'
import './StudyResults.scss'

function StudyResults() {
  return (
    <div>
      Study Results
    </div>
  )
}

export default StudyResults
=======
import React from 'react'
import style from './StudyResults.module.scss'
import ClassList from '../../../components/ClassList/ClassList'
function StudyResults() {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.headerTitle}>
          DANH SÁCH LỚP ĐANG HỌC
        </div>
      </div>

      <div className={style.content}>
      <ClassList />
      </div>
    </div>
  );
}

export default StudyResults
>>>>>>> 07eee045ef8c8ea1206189eabc7949776fc4abd7
