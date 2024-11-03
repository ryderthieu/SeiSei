import { Outlet } from "react-router-dom";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import Sidebar from "../../components/Student/Sidebar/Sidebar";

import './Layout.scss'

const Layout = () => {
  return (
    <div className="layout-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="layout-content">
        <div className="layout-header" >
            <DashboardHeader />
        </div>
        <div className="content">
            <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout