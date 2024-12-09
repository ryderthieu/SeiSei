import React, { useState } from 'react';
import './MessagesPanel.scss';
import ChatBox from '../ChatBox/BoxChat';

const MessagesPanel = ({onClose}) => {
    const [messages] = useState([
        { id: 1, sender: 'SeiSei', avatar: '👩', preview: 'Chào mừng bạn đến với SeiSei...', content: 'Chào mừng bạn đến với SeiSei, nếu có thắc mắc xin vui lòng phản hồi', timestamp: '2023-10-01 10:00' },
        { id: 2, sender: 'GS - Trịnh Thị Phương Quỳnh', avatar: '👩‍🏫', preview: 'Ngày mai học bù được hong em...', content: 'Ngày mai học bù được hong em, vào khoảng 15h-17h. Có gì nhắn lại nha', timestamp: '2023-10-02 14:30' },
        { id: 3, sender: 'Lê Thiện Nhi', avatar: '👩', preview: 'Hello', content: 'Hi there!', timestamp: '2023-10-03 09:15' },
        { id: 4, sender: 'GS - Huỳnh Văn Thiệu', avatar: '👨‍🏫', preview: 'Nhớ làm bài tập đầy đủ nhé...', content: 'Nhớ làm bài tập đầy đủ nhé, đọc lại phần nâng cao hồi nãy, không hiểu thi hỏi lại nhé', timestamp: '2023-10-04 16:45' },
    ]);
    const [selectedMessage, setSelectedMessage] = useState(null);
    const [showChatBox, setShowChatBox] = useState(false);

    const handleClick = (message) => {
        setSelectedMessage(message);
        setShowChatBox(true);
    };

    const handleCloseChatBox = () => {
        setSelectedMessage(null);
        setShowChatBox(false);
        onClose();
    };

    return (
        <div className="messages">
            {!showChatBox ? (
                <div className="messages__panel">
                    <h3 className="messages__header">Tin nhắn</h3>
                    <div className="messages__content">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`messages__item ${selectedMessage?.id === message.id ? 'messages__item--active' : ''}`}
                                onClick={() => handleClick(message)}
                            >
                                <div className="messages__icon-wrapper">
                                    <div className="messages__icon">{message.avatar}</div>
                                </div>
                                <div className="messages__details">
                                    <div className="messages__message">
                                        <div className="messages__sender">{message.sender}</div>
                                        <div className="messages__preview">{message.preview}</div>
                                    </div>
                                    <div className="messages__time">{message.timestamp}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <ChatBox selectedMessage={selectedMessage} onClose={handleCloseChatBox} />
            )}
        </div>
    );
};

export default MessagesPanel;