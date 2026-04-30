// src/api/client.ts
// API client configuration for backend integration

interface ApiConfig {
  baseURL: string;
  timeout: number;
  headers: Record<string, string>;
}

class ApiClient {
  private baseURL: string;
  private timeout: number;
  private headers: Record<string, string>;

  constructor(config: ApiConfig) {
    this.baseURL = config.baseURL;
    this.timeout = config.timeout;
    this.headers = config.headers;
  }

  private buildUrl(endpoint: string): string {
    return `${this.baseURL}${endpoint}`;
  }

  async get<T>(endpoint: string): Promise<T> {
    const response = await fetch(this.buildUrl(endpoint), {
      method: 'GET',
      headers: this.headers,
    });
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }
    
    return response.json();
  }

  async post<T>(endpoint: string, data: any): Promise<T> {
    const response = await fetch(this.buildUrl(endpoint), {
      method: 'POST',
      headers: {
        ...this.headers,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }
    
    return response.json();
  }

  async put<T>(endpoint: string, data: any): Promise<T> {
    const response = await fetch(this.buildUrl(endpoint), {
      method: 'PUT',
      headers: {
        ...this.headers,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }
    
    return response.json();
  }

  async delete<T>(endpoint: string): Promise<T> {
    const response = await fetch(this.buildUrl(endpoint), {
      method: 'DELETE',
      headers: this.headers,
    });
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }
    
    return response.json();
  }
}

// Initialize API client with environment variables
const apiClient = new ApiClient({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

export default apiClient;
