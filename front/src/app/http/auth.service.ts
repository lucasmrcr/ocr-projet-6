import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private apiService: ApiService) {
  }

  /**
   * Login the user
   * @param email The user email
   * @param password The user password
   */
  login(email: string, password: string): Observable<TokenResponse> {
    return this.apiService.post<TokenResponse>('/auth/login', {email, password});
  }

  /**
   * Register the user
   * @param username The user username
   * @param email The user email
   * @param password The user password
   */
  register(username: string, email: string, password: string): Observable<TokenResponse> {
    return this.apiService.post<TokenResponse>('/auth/register', {username, email, password});
  }
}
