import React, { useState, useRef, useEffect } from 'react';
import { Send, Smile, X, Clock, Info } from 'lucide-react';
import { useEmotion } from '../../contexts/EmotionContext';
import MessageBubble from './MessageBubble';
import EmotionIndicator from './EmotionIndicator';

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  emotion?: {
    type: string;
    intensity: number;
    color: string;
  };
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi there! I'm Arona, your emotional intelligence companion. How are you feeling today?",
      sender: 'bot',
      timestamp: new Date(),
      emotion: {
        type: 'joy',
        intensity: 0.7,
        color: '#f59e0b'
      }
    }
  ]);
  
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  
  const { detectEmotion, isProcessing } = useEmotion();
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    
    // Auto resize textarea
    e.target.style.height = 'auto';
    e.target.style.height = `${Math.min(e.target.scrollHeight, 120)}px`;
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const generateUniqueId = () => {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  };
  
  const handleSendMessage = async () => {
    if (inputValue.trim() === '' || isTyping) return;
    
    // User message
    const userMessage: Message = {
      id: generateUniqueId(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
    }
    
    // Analyze emotion from user message
    const emotion = await detectEmotion(inputValue);
    
    // Simulate AI response time
    setTimeout(() => {
      // This would be where you'd call your actual AI service
      // For demo purposes, we're using some predefined responses
      const possibleResponses = [
        `I can sense some ${emotion.type} in your message. Would you like to explore that feeling?`,
        `It seems like you're feeling ${emotion.type}. How long have you been feeling this way?`,
        `I notice a hint of ${emotion.type} in your tone. Is there something specific that triggered this emotion?`,
        `Thanks for sharing! I'm detecting ${emotion.type} in your message. Would you like to talk more about it?`,
        `I appreciate you opening up. I'm sensing ${emotion.type} - would you like some suggestions related to this feeling?`
      ];
      
      const randomResponse = possibleResponses[Math.floor(Math.random() * possibleResponses.length)];
      
      const botMessage: Message = {
        id: generateUniqueId(),
        text: randomResponse,
        sender: 'bot',
        timestamp: new Date(),
        emotion: {
          type: emotion.type,
          intensity: emotion.intensity,
          color: emotion.color
        }
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };
  
  const clearChat = () => {
    if (confirm('Are you sure you want to clear the chat history?')) {
      setMessages([
        {
          id: generateUniqueId(),
          text: "Hi there! I'm Arona. How are you feeling today?",
          sender: 'bot',
          timestamp: new Date(),
          emotion: {
            type: 'joy',
            intensity: 0.7,
            color: '#f59e0b'
          }
        }
      ]);
    }
  };
  
  return (
    <div className="flex flex-col h-full bg-gray-50 rounded-lg overflow-hidden shadow-sm border border-gray-200">
      <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
        <div className="flex items-center">
          <h2 className="text-lg font-semibold">Chat with Arona</h2>
          <EmotionIndicator />
        </div>
        <div className="flex space-x-2">
          <button
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => {}}
            title="Chat history"
          >
            <Clock size={18} />
          </button>
          <button
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => {}}
            title="About Arona"
          >
            <Info size={18} />
          </button>
          <button
            className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
            onClick={clearChat}
            title="Clear chat"
          >
            <X size={18} />
          </button>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
        
        {isTyping && (
          <div className="message-bot">
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-4 bg-white border-t border-gray-200">
        <div className="flex items-end space-x-2">
          <button
            className="p-2 text-gray-500 hover:text-primary-600 hover:bg-primary-50 rounded-full transition-colors"
            title="Emoji picker"
          >
            <Smile size={20} />
          </button>
          
          <div className="flex-1 relative">
            <textarea
              ref={inputRef}
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
              placeholder="Type your message..."
              className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none min-h-[44px] max-h-[120px] pr-10"
              rows={1}
            />
            
            {isProcessing && (
              <div className="absolute right-3 bottom-3 w-4 h-4">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-600"></div>
              </div>
            )}
          </div>
          
          <button
            onClick={handleSendMessage}
            disabled={inputValue.trim() === '' || isTyping}
            className={`p-3 rounded-full transition-colors ${
              inputValue.trim() === '' || isTyping
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-primary-600 text-white hover:bg-primary-700'
            }`}
            title="Send message"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;