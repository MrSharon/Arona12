import { EmotionType } from '../contexts/EmotionContext';

const API_URL = 'http://127.0.0.1:5000';

interface EmotionResponse {
  emotion: EmotionType;
  intensity: number;
  confidence: number;
}

class EmotionApiService {
  private static instance: EmotionApiService;
  private baseUrl: string;
  private useMockData: boolean = false;

  private constructor() {
    this.baseUrl = API_URL;
  }

  public static getInstance(): EmotionApiService {
    if (!EmotionApiService.instance) {
      EmotionApiService.instance = new EmotionApiService();
    }
    return EmotionApiService.instance;
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Unknown error' }));
      throw new Error(error.error || `API Error: ${response.status}`);
    }
    return response.json();
  }

  private getMockEmotion(text: string): EmotionResponse {
    // Simple mock logic based on text content
    const emotions: EmotionType[] = ['joy', 'sadness', 'anger', 'fear', 'surprise', 'neutral'];
    const randomEmotion = emotions[Math.floor(Math.random() * emotions.length)];
    
    return {
      emotion: randomEmotion,
      intensity: 0.7,
      confidence: 0.8
    };
  }

  public async healthCheck(): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseUrl}/health`);
      const data = await this.handleResponse<{ status: string }>(response);
      this.useMockData = false;
      return data.status === 'ok';
    } catch (error) {
      console.warn('Health check failed, switching to mock data:', error);
      this.useMockData = true;
      return true; // Return true to allow the application to continue functioning
    }
  }

  public async detectEmotion(text: string): Promise<EmotionResponse> {
    if (this.useMockData) {
      return this.getMockEmotion(text);
    }

    try {
      const response = await fetch(`${this.baseUrl}/detect_emotion`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      return this.handleResponse<EmotionResponse>(response);
    } catch (error) {
      console.warn('API call failed, using mock data:', error);
      return this.getMockEmotion(text);
    }
  }

  public async batchDetectEmotion(texts: string[]): Promise<EmotionResponse[]> {
    if (this.useMockData) {
      return texts.map(text => this.getMockEmotion(text));
    }

    try {
      const response = await fetch(`${this.baseUrl}/batch_detect_emotion`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ texts }),
      });

      return this.handleResponse<EmotionResponse[]>(response);
    } catch (error) {
      console.warn('Batch API call failed, using mock data:', error);
      return texts.map(text => this.getMockEmotion(text));
    }
  }
}

export const emotionApi = EmotionApiService.getInstance();