import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define emotion types
export type EmotionType = 
  | 'joy' 
  | 'sadness' 
  | 'anger' 
  | 'fear' 
  | 'surprise' 
  | 'disgust'
  | 'neutral'
  | 'love'
  | 'excitement'
  | 'confusion';

// Emotion data with colors and intensities
export interface EmotionData {
  type: EmotionType;
  intensity: number; // 0-1 scale
  color: string;
  timestamp: Date;
}

// Sample emotional response for testing
const defaultEmotions: Record<EmotionType, string> = {
  joy: '#f59e0b', // amber-500
  sadness: '#3b82f6', // blue-500
  anger: '#ef4444', // red-500
  fear: '#8b5cf6', // violet-500
  surprise: '#10b981', // emerald-500
  disgust: '#64748b', // slate-500
  neutral: '#9ca3af', // gray-400
  love: '#ec4899', // pink-500
  excitement: '#f97316', // orange-500
  confusion: '#8b5cf6', // violet-500
};

interface EmotionContextProps {
  currentEmotion: EmotionData | null;
  emotionHistory: EmotionData[];
  detectEmotion: (text: string) => Promise<EmotionData>;
  clearEmotionHistory: () => void;
  isProcessing: boolean;
}

const EmotionContext = createContext<EmotionContextProps | undefined>(undefined);

export const useEmotion = () => {
  const context = useContext(EmotionContext);
  if (!context) {
    throw new Error('useEmotion must be used within an EmotionProvider');
  }
  return context;
};

interface EmotionProviderProps {
  children: ReactNode;
}

export const EmotionProvider = ({ children }: EmotionProviderProps) => {
  const [currentEmotion, setCurrentEmotion] = useState<EmotionData | null>(null);
  const [emotionHistory, setEmotionHistory] = useState<EmotionData[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  // Mock emotion detection - in a real implementation, this would call your API
  const detectEmotion = async (text: string): Promise<EmotionData> => {
    setIsProcessing(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Mock detection logic - this would be replaced with actual API call
    // This is just for demo purposes
    const emotionTypes = Object.keys(defaultEmotions) as EmotionType[];
    const randomIndex = Math.floor(Math.random() * emotionTypes.length);
    const detectedType = emotionTypes[randomIndex];
    
    // Calculate mock intensity based on text length and complexity
    const intensity = Math.min(0.3 + Math.random() * 0.7, 1);
    
    const emotion: EmotionData = {
      type: detectedType,
      intensity: intensity,
      color: defaultEmotions[detectedType],
      timestamp: new Date()
    };
    
    setCurrentEmotion(emotion);
    setEmotionHistory(prev => [...prev, emotion]);
    setIsProcessing(false);
    
    return emotion;
  };

  const clearEmotionHistory = () => {
    setEmotionHistory([]);
    setCurrentEmotion(null);
  };

  // Set a default neutral emotion on load
  useEffect(() => {
    setCurrentEmotion({
      type: 'neutral',
      intensity: 0.5,
      color: defaultEmotions.neutral,
      timestamp: new Date()
    });
  }, []);

  return (
    <EmotionContext.Provider
      value={{
        currentEmotion,
        emotionHistory,
        detectEmotion,
        clearEmotionHistory,
        isProcessing
      }}
    >
      {children}
    </EmotionContext.Provider>
  );
};