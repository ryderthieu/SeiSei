import './NotificationsPanel.scss';
import React, { useState, forwardRef } from 'react';

const NotificationsPanel = forwardRef((props, ref) => {
    const [notifications] = useState([
        { id: 1, content: 'Bạn nhận được đề nghị dạy của gia sư.', time: '2 phút trước', icon: 'notifications-outline' },
        { id: 2, content: 'Nạp tiền vào ví thành công.', time: '1 giờ trước', icon: 'card-outline' },
        { id: 3, content: 'Bạn có lịch học môn Toán vào lúc 14h.', time: '3 giờ trước', icon: 'book-outline' },
        { id: 4, content: 'Lịch học của bạn đã được cập nhật.', time: '1 ngày trước', icon: 'calendar-outline' },
    ]);

    return (
        <div className="notifications-panel" ref={ref}>
            <div className="notifications-panel__header">Thông báo</div>
            {notifications.map(notification => (
                <div key={notification.id} className="notifications-panel__item">
                    <div className="notifications-panel__content-wrapper">
                        <div className="notifications-panel__icon-wrapper">
                            <ion-icon name={notification.icon} className="notifications-panel__icon"></ion-icon>
                        </div>
                        <div className="notifications-panel__text">{notification.content}</div>
                    </div>
                    <div className="notifications-panel__time">{notification.time}</div>
                </div>
            ))}
        </div>
    );
});

export default NotificationsPanel;
