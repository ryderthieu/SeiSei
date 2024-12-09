import React, { useState } from 'react';
import './BoxChat.scss';

const ChatBox = ({ selectedMessage, onClose }) => {
    const [inputText, setInputText] = useState('');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSendMessage = () => {
        if (inputText.trim()) {
            console.log(`Message sent: ${inputText}`);
            setInputText('');
        }
    };

    return (
        <div className="chat-box">
            {/* Header */}
            <div className="chat-box__header">
                <div className="chat-box__avatar">{selectedMessage.avatar}</div>
                <div className="chat-box__sender">{selectedMessage.sender}</div>
                <div className="chat-box__close" onClick={onClose}>
                    <ion-icon name="close-outline"></ion-icon>
                </div>
            </div>

            {/* Message Content */}
            <div className="chat-box__content">
                <div className="chat-box__message">
                    <div className="chat-box__message-avatar">{selectedMessage.avatar}</div>
                    <div className="chat-box__message-main">
                        <div className="chat-box__message-sender">{selectedMessage.sender}</div>
                        <div className="chat-box__message-content">{selectedMessage.content}</div>
                        <div className="chat-box__message-timestamp">{selectedMessage.timestamp}</div>
                    </div>
                </div>
            </div>

            {/* Input Section */}
            <div className="chat-box__input">
                <input
                    type="text"
                    className="chat-box__input-field"
                    placeholder="Type a message..."
                    value={inputText}
                    onChange={handleInputChange}
                />
                <button className="chat-box__input-button" onClick={handleSendMessage}>
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatBox;
