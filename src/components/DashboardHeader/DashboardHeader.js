import './DashboardHeader.scss'


const DashboardHeader = () => {
    return (
        <div className="dashboard-header">
            <div className="icon-wrapper">
                <ion-icon name="chatbubble-ellipses"></ion-icon>
                <span className="icon-badge">5</span>
                <div className="icon-label">Tin nhắn</div>
            </div>

            <div className="icon-wrapper">
                <ion-icon name="notifications"></ion-icon>
                <span className="icon-badge">4</span>
                <div className="icon-label">Thông báo</div>
            </div>
            
            <div className="dashboard-header__user">
                <div className="dashboard-header__user-avatar"></div>
                <div className="avatar-label">Tài khoản</div>
            </div>
        </div>
    )
}

export default DashboardHeader