import React from 'react';
import './ClassCard.scss';

const ClassCard = ({classItem}) => {
    return (
        <div className={`class-card class-card--${classItem.status}`}>
            <div className="class-card__header">
                <div className="class-card__title">{classItem.name}</div>
                <span className={`class-card__status class-card__status--${classItem.status}`}>
                    {classItem.status === 'ongoing' && 'Đang diễn ra'}
                    {classItem.status === 'upcoming' && 'Sắp diễn ra'}
                    {classItem.status === 'completed' && 'Đã kết thúc'}
                </span>
            </div>
            <div className="class-card__content">
                <p>Gia sư: {classItem.teacher}</p>
                <p>Thời gian: {classItem.time}</p>
                <p>Ngày: {classItem.date}</p>
                {/* {classItem.status === 'ongoing' && (
                <button className="class-card__button">Tham gia lớp học</button>
                )} */}
            </div>
        </div>
    )
}

export default ClassCard;