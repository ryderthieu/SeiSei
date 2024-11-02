import './DashboardHeader.scss'


const DashboardHeader = () => {
    return (
        <>
            <h1 className="dashboard-header">
                <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                <ion-icon name="notifications-outline"></ion-icon>
                <div className="dashboard-header__user">
                    <div className="dashboard-header__user-avatar"></div>
                </div>
            </h1>
        </>
    )
}

export default DashboardHeader