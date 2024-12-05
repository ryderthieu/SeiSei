import React from 'react';
import './BoxChat.scss';

const ChatBox = ({ selectedMessage }) => {
    return (
        <div className="chat-box">
            {/* Header */}
            <div className="chat-box__header">
                <div className="chat-box__avatar">{selectedMessage.avatar || '👤'}</div>
                <div className="chat-box__sender">{selectedMessage.sender}</div>
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

            <div className="chat-box__input">
                <input
                    type="text"
                    className="chat-box__input-field"
                />
                <button className="chat-box__input-button">Send</button>
            </div>
        </div>
    );
};

export default ChatBox;
