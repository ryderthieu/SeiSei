import './DashboardHeader.scss'
import React, {useState} from 'react'
import MessagesPanel from '../MessagesPanel/MessagesPanel';
import NotificationsPanel from '../NotificationsPanel/NotificationsPanel';

const DashboardHeader = () => {
    const [showMessages, setShowMessages] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);

    const toggleMessages = () => {
        setShowMessages(!showMessages);
        setShowNotifications(false);
    };

    const toggleNotifications = () => {
        setShowNotifications(!showNotifications);
        setShowMessages(false);
    }

    return (
        <>
            <div className="dashboard-header">
                <div className="icon-wrapper" onClick={toggleMessages}>
                    <ion-icon name="chatbubble-ellipses"></ion-icon>
                    <span className="icon-badge">5</span>
                    <div className="icon-label">Tin nhắn</div>
                </div>
                <div className="icon-wrapper" onClick={toggleNotifications}>
                    <ion-icon name="notifications"></ion-icon>
                    <span className="icon-badge">4</span>
                    <div className="icon-label">Thông báo</div>
                </div>
                <div className="dashboard-header__user">
                    <div className="dashboard-header__user-avatar"></div>
                    <div className="avatar-label">Tài khoản</div>
                </div>
            </div>
            {showMessages && <MessagesPanel />}
            {showNotifications && <NotificationsPanel />}
        </>
    )
}

export default DashboardHeader