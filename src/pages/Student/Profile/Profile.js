import React, {useState} from "react";
import "./Profile.scss";
import ChangPassword from "../../../components/ChangePassword/ChangePassword";
import PersonalAccount from "../../../components/PersonalAccount/PersonalAccount";
import ProfileInfo from "../../../components/ProfileInfo/ProfileInfo";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("information");

  return (
    <div className="profile__container">
      <div className="profile__header">
        <div className="profile__header--title">TÀI KHOẢN</div>
      </div>

      <div className="profile__main">
        <div className="profile__main--account">
            <PersonalAccount />
        </div>
        <div className="profile__main--settings">
            <div className="profile__main--header">
                <div
                    className={`profile__main--tab ${activeTab === "information" ? "profile__main-active" : ""}`}
                    onClick={() => setActiveTab("information")}
                >
                    <p className="profile__main--header-title">THÔNG TIN CÁ NHÂN</p>
                </div>
                <div
                    className={`profile__main--tab ${activeTab === "password" ? "profile__main-active" : ""}`}
                    onClick={() => setActiveTab("password")}
                >
                    <p className="profile__main--header-title">ĐỔI MẬT KHẨU</p>
                </div>
            </div>
            {activeTab === "information" ? (
                <div className="profile__main--information">
                    <ProfileInfo />
                </div>
                ) : (
                <div className="profile__main--change-password">
                    <ChangPassword />
                </div>
                )
            }
        </div>
      </div> 
    </div>
  );
};

export default Profile;
