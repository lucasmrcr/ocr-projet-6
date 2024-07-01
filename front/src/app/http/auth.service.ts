import {Injectable} from '@angular/core';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private apiService: ApiService) {
  }

  login(email: string, password: string) {
    return this.apiService.post<TokenResponse>('/auth/login', {email, password});
  }

  register(username: string, email: string, password: string) {
    return this.apiService.post<TokenResponse>('/auth/register', {username, email, password});
  }
}
