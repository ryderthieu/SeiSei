import './DashboardHeader.scss';
import React, { useState, useRef, useEffect } from 'react';
import MessagesPanel from '../MessagesPanel/MessagesPanel';
import NotificationsPanel from '../NotificationsPanel/NotificationsPanel';

const DashboardHeader = () => {
    const [showMessages, setShowMessages] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const messagesPanelRef = useRef(null); // Ref cho MessagesPanel
    const notificationsPanelRef = useRef(null); // Ref cho NotificationsPanel

    const toggleMessages = () => {
        setShowMessages(!showMessages);
        setShowNotifications(false); // Đóng NotificationsPanel khi mở MessagesPanel
    };

    const toggleNotifications = () => {
        setShowNotifications(!showNotifications);
        setShowMessages(false); // Đóng MessagesPanel khi mở NotificationsPanel
    };

    const handleOutsideClick = (event) => {
        // Đóng MessagesPanel nếu click bên ngoài
        if (
            messagesPanelRef.current &&
            !messagesPanelRef.current.contains(event.target)
        ) {
            setShowMessages(false);
        }
        // Đóng NotificationsPanel nếu click bên ngoài
        if (
            notificationsPanelRef.current &&
            !notificationsPanelRef.current.contains(event.target)
        ) {
            setShowNotifications(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <>
            <div className="dashboard-header">
                <div
                    className="dashboard-header__icon-container"
                    onClick={toggleMessages}
                >
                    <ion-icon
                        name="chatbubble-ellipses"
                        className="dashboard-header__icon"
                    ></ion-icon>
                    <span className="dashboard-header__badge">5</span>
                    <div className="dashboard-header__label">Tin nhắn</div>
                </div>
                <div
                    className="dashboard-header__icon-container"
                    onClick={toggleNotifications}
                >
                    <ion-icon
                        name="notifications"
                        className="dashboard-header__icon"
                    ></ion-icon>
                    <span className="dashboard-header__badge">4</span>
                    <div className="dashboard-header__label">Thông báo</div>
                </div>
            </div>
            {showMessages && (
                <MessagesPanel
                    ref={messagesPanelRef}
                    onClose={() => setShowMessages(false)}
                />
            )}
            {showNotifications && (
                <NotificationsPanel
                    ref={notificationsPanelRef}
                    onClose={() => setShowNotifications(false)}
                />
            )}
        </>
    );
};

export default DashboardHeader;
