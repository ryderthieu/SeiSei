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

    const closeMessagesPanel = () => {
        setShowMessages(false);
    }

    return (
        <>
            <div className="dashboard-header">
                <div className="dashboard-header__icon-container" onClick={toggleMessages}>
                    <ion-icon name="chatbubble-ellipses" className="dashboard-header__icon"></ion-icon>
                    <span className="dashboard-header__badge">5</span>
                    <div className="dashboard-header__label">Tin nhắn</div>
                </div>
                <div className="dashboard-header__icon-container" onClick={toggleNotifications}>
                    <ion-icon name="notifications" className="dashboard-header__icon"></ion-icon>
                    <span className="dashboard-header__badge">4</span>
                    <div className="dashboard-header__label">Thông báo</div>
                </div>
                <div className="dashboard-header__user">
                    <div className="dashboard-header__user-avatar"></div>
                </div>
            </div>
            {showMessages && <MessagesPanel onClose={closeMessagesPanel}/>}
            {showNotifications && <NotificationsPanel />}
        </>
    )
}

export default DashboardHeader