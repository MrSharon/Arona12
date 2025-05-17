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

  public async healthCheck(): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseUrl}/health`);
      const data = await this.handleResponse<{ status: string }>(response);
      return data.status === 'ok';
    } catch (error) {
      console.error('Health check failed:', error);
      return false;
    }
  }

  public async detectEmotion(text: string): Promise<EmotionResponse> {
    const response = await fetch(`${this.baseUrl}/detect_emotion`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    return this.handleResponse<EmotionResponse>(response);
  }

  public async batchDetectEmotion(texts: string[]): Promise<EmotionResponse[]> {
    const response = await fetch(`${this.baseUrl}/batch_detect_emotion`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ texts }),
    });

    return this.handleResponse<EmotionResponse[]>(response);
  }
}

export const emotionApi = EmotionApiService.getInstance();