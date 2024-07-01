import {Injectable} from '@angular/core';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private apiService: ApiService) {
  }

  getMe() {
    return this.apiService.get<User>('/users/me');
  }
}
