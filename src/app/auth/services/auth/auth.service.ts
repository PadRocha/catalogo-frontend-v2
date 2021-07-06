import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { APP_CONFIG } from '../../../../environments/environment';
import { IUser } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url: string;
  private headersJSON: HttpHeaders;

  constructor(
    private http: HttpClient,
    private router: Router,
    // eslint-disable-next-line @typescript-eslint/ban-types
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {
    this.url = APP_CONFIG.httpUrl;
    this.headersJSON = new HttpHeaders().set('Content-Type', 'application/json');
  }

  setToken(value: string, expiry = true): void {
    const now = new Date();
    // `item` is an object which contains the original value
    // as well as the time when it's supposed to expire
    const item = { value, expiry: expiry ? now.getTime() + 86_400_000 : false, };
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('token', JSON.stringify(item));
    }
  }

  loginUser(user: IUser) {
    const params = JSON.stringify(user);
    return this.http.post<{ token: string }>(`${this.url}/login`, params, { headers: this.headersJSON });
  }

  logoutUser(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
    }
    this.router.navigate(['/home']);
  }

  getToken(): string {
    const token = isPlatformBrowser(this.platformId) ? localStorage.getItem('token') : null;
    if (!token) {
      return null;
    }
    const { expiry, value } = JSON.parse(token);
    const now = new Date();
    if (!!expiry && now.getTime() > expiry) {
      this.logoutUser();
      return null;
    }
    return value ?? null;
  }

  loggedIn(): boolean {
    return isPlatformBrowser(this.platformId) ? !!localStorage.getItem('token') : false;
  }
}
