import React, { useState } from "react";
import "./MeetingChatBox.scss";
import TutorAvatar from '../../assets/images/giasu.jpg';
import StudentAvatar from '../../assets/images/student.jpg';
const MeetingChatBox = ({isOpen, onClose}) => {
  const [chatMessages, setChatMessages] = useState([
    { 
      id: 1, 
      avatar: TutorAvatar, 
      text: "Chào em !", 
      sender: "Gia sư",  
      time: "10:30"  
    },
    { 
      id: 2, 
      avatar: StudentAvatar, 
      text: "Câu này khó quá cô ơi", 
      sender: "Bạn", 
      time: "10:32" 
    },
  ]);

  if (!isOpen) return null;

  return (
    <div className="meeting-chat-box">
      <div className="meeting-chat-box__header">
        <div className="meeting-chat-box__header-title">Cuộc trò chuyện</div>
      </div>

      <div className="meeting-chat-box__messages">
        {chatMessages.map((message) => (
          <div
            key={message.id}
            className={`meeting-chat-box__message ${
              message.sender === "Bạn"
                ? "meeting-chat-box__message--sent"
                : "meeting-chat-box__message--received"
            }`}
          >
            <div className="meeting-chat-box__avatar">
              <img src={message.avatar} alt={message.sender}/>
            </div>
            <div className="meeting-chat-box__bubble">
              <span className="meeting-chat-box__sender">{message.sender} </span>
              <span className="meeting-chat-box__text">{message.text}</span>
              <div className="meeting-chat-box__time">{message.time}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="meeting-chat-box__input">
        <input type="text" placeholder="Nhập tin nhắn..." />
        <button>
          <ion-icon name="send-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
};

export default MeetingChatBox;
