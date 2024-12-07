import React, { useState } from "react";
import "./MeetingChatBox.scss";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // Xử lý gửi tin nhắn
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: Date.now(),
          text: newMessage,
          sender: "Bạn", // Người gửi là chính bạn
          timestamp: new Date().toLocaleTimeString(),
        },
      ]);
      setNewMessage("");
    }
  };

  return (
    <div className="chat-box">
      {/* Tiêu đề chat */}
      <div className="chat-box__header">
        <h3>Trò chuyện</h3>
      </div>

      {/* Khung tin nhắn */}
      <div className="chat-box__messages">
        {messages.map((msg) => (
          <div key={msg.id} className="chat-box__message">
            <div className="chat-box__message-content">
              <strong>{msg.sender}</strong> {/* Hiển thị tên người gửi */}
              <span className="chat-box__timestamp">{msg.timestamp}</span>
              <p>{msg.text}</p> {/* Nội dung tin nhắn */}
            </div>
          </div>
        ))}
      </div>

      {/* Khung nhập tin nhắn */}
      <div className="chat-box__input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Nhập tin nhắn..."
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()} // Gửi tin nhắn khi nhấn Enter
        />
        <button onClick={handleSendMessage}>
          <ion-icon name="send-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
