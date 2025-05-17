import React from 'react';
import { useEmotion } from '../../contexts/EmotionContext';

const EmotionIndicator = () => {
  const { currentEmotion } = useEmotion();
  
  if (!currentEmotion) {
    return (
      <div className="w-4 h-4 bg-gray-200 rounded-full ml-2" title="No emotion detected"></div>
    );
  }
  
  return (
    <div className="flex items-center ml-2">
      <div 
        className="w-4 h-4 rounded-full" 
        style={{ 
          backgroundColor: currentEmotion.color,
          opacity: 0.3 + (currentEmotion.intensity * 0.7) 
        }}
        title={`Current emotion: ${currentEmotion.type} (${Math.round(currentEmotion.intensity * 100)}% intensity)`}
      ></div>
      <span className="ml-2 text-xs text-gray-500 hidden md:inline-block capitalize">
        {currentEmotion.type}
      </span>
    </div>
  );
};

export default EmotionIndicator;