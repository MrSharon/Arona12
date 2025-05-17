import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { emotionApi } from '../services/emotionApi';

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

// Emotion colors mapping
const emotionColors: Record<EmotionType, string> = {
  joy: '#f59e0b',
  sadness: '#3b82f6',
  anger: '#ef4444',
  fear: '#8b5cf6',
  surprise: '#10b981',
  disgust: '#64748b',
  neutral: '#9ca3af',
  love: '#ec4899',
  excitement: '#f97316',
  confusion: '#8b5cf6',
};

interface EmotionContextProps {
  currentEmotion: EmotionData | null;
  emotionHistory: EmotionData[];
  detectEmotion: (text: string) => Promise<EmotionData>;
  clearEmotionHistory: () => void;
  isProcessing: boolean;
  apiStatus: 'available' | 'mock' | 'checking';
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
  const [apiStatus, setApiStatus] = useState<'available' | 'mock' | 'checking'>('checking');

  // Check API health on mount
  useEffect(() => {
    const checkApiHealth = async () => {
      setApiStatus('checking');
      const isHealthy = await emotionApi.healthCheck();
      setApiStatus(isHealthy ? 'available' : 'mock');
    };
    checkApiHealth();
  }, []);

  const detectEmotion = async (text: string): Promise<EmotionData> => {
    setIsProcessing(true);
    
    try {
      const result = await emotionApi.detectEmotion(text);
      
      const emotion: EmotionData = {
        type: result.emotion,
        intensity: result.intensity,
        color: emotionColors[result.emotion],
        timestamp: new Date()
      };
      
      setCurrentEmotion(emotion);
      setEmotionHistory(prev => [...prev, emotion]);
      
      return emotion;
    } catch (error) {
      console.error('Error detecting emotion:', error);
      // Fallback to neutral emotion on error
      const fallbackEmotion: EmotionData = {
        type: 'neutral',
        intensity: 0.5,
        color: emotionColors.neutral,
        timestamp: new Date()
      };
      
      setCurrentEmotion(fallbackEmotion);
      return fallbackEmotion;
    } finally {
      setIsProcessing(false);
    }
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
      color: emotionColors.neutral,
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
        isProcessing,
        apiStatus
      }}
    >
      {children}
    </EmotionContext.Provider>
  );
};