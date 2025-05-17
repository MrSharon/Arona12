import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { type Message } from './ChatInterface';

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble = ({ message }: MessageBubbleProps) => {
  const timeAgo = formatDistanceToNow(message.timestamp, { addSuffix: true });
  
  const emotionIndicator = message.emotion && (
    <div 
      className="w-2 h-2 rounded-full inline-block mr-1"
      style={{ backgroundColor: message.emotion.color }}
      title={`Emotion: ${message.emotion.type}`}
    />
  );
  
  if (message.sender === 'user') {
    return (
      <div className="flex flex-col items-end">
        <div className="message-user group">
          <p>{message.text}</p>
        </div>
        <div className="text-xs text-gray-500 mt-1 mr-2">
          {timeAgo}
        </div>
      </div>
    );
  }
  
  return (
    <div className="flex flex-col items-start">
      <div className="message-bot group">
        <p>{message.text}</p>
      </div>
      <div className="text-xs text-gray-500 mt-1 ml-2 flex items-center">
        {emotionIndicator}
        <span>{timeAgo}</span>
      </div>
    </div>
  );
};

export default MessageBubble;