import React, { useState } from 'react';
import './MessagesPanel.scss';
import ChatBox from '../ChatBox/BoxChat';

const MessagesPanel = () => {
    const [messages, setMessages] = useState([
        { id: 1, sender: 'SeiSei', avatar: '👩', preview: 'Chào mừng bạn đến với SeiSei...', content: 'Chào mừng bạn đến với SeiSei, nếu có thắc mắc xin vui lòng phản hồi', timestamp: '2023-10-01 10:00' },
        { id: 2, sender: 'GS - Trịnh Thị Phương Quỳnh', avatar: '👩‍🏫', preview: 'Ngày mai học bù được hong em...', content: 'Ngày mai học bù được hong em, vào khoảng 15h-17h. Có gì nhắn lại nha', timestamp: '2023-10-02 14:30' },
        { id: 3, sender: 'Lê Thiện Nhi', avatar: '👩', preview: 'Hello', content: 'Hi there!', timestamp: '2023-10-03 09:15' },
        { id: 4, sender: 'GS - Huỳnh Văn Thiệu', avatar: '👨‍🏫', preview: 'Nhớ làm bài tập đầy đủ nhé...', content: 'Nhớ làm bài tập đầy đủ nhé, đọc lại phần nâng cao hồi nãy, không hiểu thi hỏi lại nhé', timestamp: '2023-10-04 16:45' },
    ]);    

    const [selectedMessage, setSelectedMessage] = useState(null);

    const handleClick = (message) => {
        setSelectedMessage(message);
    };

    return (
        <div className="messages-panel">
            <div className="messages-list">
                <h3 className="panel-header">Tin nhắn</h3>
                <div className="panel-content">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`message-item ${selectedMessage?.id === message.id ? 'active' : ''}`}
                            onClick={() => handleClick(message)}
                        >
                            <div className="message-icon-wrapper">
                                <div className="message-icon">{message.avatar}</div>
                            </div>
                            <div className="message-content-wrapper">
                                <div className="message-content">
                                    <div className="message-sender">{message.sender}</div>
                                    <div className="message-preview">{message.preview}</div>
                                </div>
                                <div className="message-time">{message.timestamp}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {selectedMessage && <ChatBox selectedMessage={selectedMessage} />}
        </div>
    );
};

export default MessagesPanel;
