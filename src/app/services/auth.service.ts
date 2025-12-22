import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;  // ← MUDOU
  expiresIn: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = `${environment.baseApiUrl}auth`;
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasValidToken());
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient) {
    this.checkTokenValidity();
  }

  login(username: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.API_URL}/login`, { username, password })
      .pipe(
        tap((response) => {
          this.setToken(response.accessToken, response.expiresIn);  // ← MUDOU
          this.isAuthenticatedSubject.next(true);
        })
      );
  }

  logout(): void {
    localStorage.removeItem(environment.jwtTokenKey);
    localStorage.removeItem(environment.jwtExpiryKey);
    this.isAuthenticatedSubject.next(false);
  }

  getToken(): string | null {
    if (!this.hasValidToken()) {
      this.logout();
      return null;
    }
    return localStorage.getItem(environment.jwtTokenKey);
  }

  isAuthenticated(): boolean {
    return this.hasValidToken();
  }

  private hasValidToken(): boolean {
    const token = localStorage.getItem(environment.jwtTokenKey);
    const expiry = localStorage.getItem(environment.jwtExpiryKey);

    if (!token || !expiry) {
      return false;
    }

    return Date.now() < parseInt(expiry, 10);
  }

  private setToken(token: string, expiresInSeconds: number): void {
    const expiryTime = Date.now() + (expiresInSeconds * 1000);
    localStorage.setItem(environment.jwtTokenKey, token);
    localStorage.setItem(environment.jwtExpiryKey, expiryTime.toString());
  }

  private checkTokenValidity(): void {
    if (!this.hasValidToken()) {
      this.isAuthenticatedSubject.next(false);
    }
  }
}