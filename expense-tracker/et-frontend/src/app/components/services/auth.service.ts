import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api'; // Your Spring Boot API base URL

  constructor(private http: HttpClient) {}
  login(email: string, password: string): Observable<any> {
    // Assuming the API is available at this URL
    return this.http.post('/api/auth/login', { email, password });
  }
  getData() {
    return this.http.get(`${this.apiUrl}/endpoint`);
  }

  logout() {
    // Clear user session and token
    localStorage.clear();
  }
}
