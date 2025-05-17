import React from 'react';
import ChatInterface from '../components/chat/ChatInterface';

const ChatPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 h-[calc(100vh-137px)]">
      <div className="h-full max-w-4xl mx-auto">
        <ChatInterface />
      </div>
    </div>
  );
};

export default ChatPage;