import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private apiService: ApiService) {
  }

  /**
   * Get the user information
   */
  getMe(): Observable<User> {
    return this.apiService.get<User>('/users/me');
  }

  /**
   * Update the user information
   * @param username The user username
   * @param email The user email
   */
  updateMe(username: string, email: string): Observable<User> {
    return this.apiService.put<User>('/users/me', {username, email});
  }

}
