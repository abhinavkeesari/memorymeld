import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post(`${this.baseUrl}/login`, { email, password });
  }

  register(email: string, password: string) {
    return this.http.post(`${this.baseUrl}/register`, { email, password });
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

 getToken(): string | null {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token'); // ✅ Only runs in browser
  }
  return null;
}

  logout() {
    localStorage.removeItem('token');
  }
}
