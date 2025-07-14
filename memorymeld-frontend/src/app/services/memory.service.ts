import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MemoryService {
  private API_URL = 'http://localhost:3000/api/memory';

  constructor(private http: HttpClient) {}

  saveMemory(data: { content: string; type: string }): Observable<any> {
    const token = localStorage.getItem('token');

  return this.http.post(this.API_URL, data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  }
  getAllMemories(): Observable<any[]>  {
    const token = localStorage.getItem('token');

  return this.http.get<any[]>(this.API_URL, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

}
