import './NotificationsPanel.scss';
import React, { useState } from 'react';

const NotificationsPanel = () => {
    const [notifications, setNotifications] = useState([
        { id: 1, content: 'Bạn nhận được đề nghị dạy của gia sư.', time: '2 phút trước', icon: 'notifications-outline' },
        { id: 2, content: 'Nạp tiền vào ví thành công.', time: '1 giờ trước', icon: 'card-outline' },
        { id: 3, content: 'Bạn có lịch học môn Toán vào lúc 14h.', time: '3 giờ trước', icon: 'book-outline' },
        { id: 4, content: 'Lịch học của bạn đã được cập nhật.', time: '1 ngày trước', icon: 'calendar-outline' },
    ]);

    return (
        <div className="notifications-panel">
            <div className="panel-header">Thông báo</div>
            {notifications.map(notification => (
                <div key={notification.id} className="notification-item">
                    <div className="notification-content-wrapper">
                        <div className="notification-icon-wrapper">
                            <ion-icon name={notification.icon} className="notification-icon"></ion-icon>
                        </div>
                        <div className="notification-content">{notification.content}</div>
                    </div>
                    <div className="notification-time">{notification.time}</div>
                </div>
            ))}
        </div>
    );
};

export default NotificationsPanel;