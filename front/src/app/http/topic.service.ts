import {Injectable} from '@angular/core';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root',
})
export class TopicService {

  constructor(private apiService: ApiService) {
  }

  getAllTopics(followed: boolean = false) {
    return this.apiService.get<Topic[]>('/topics?followed=' + followed);
  }

  like(topic: Topic) {
    return this.apiService.put(`/users/me/topics/${topic.id}`, {});
  }

  dislike(topic: Topic) {
    return this.apiService.delete(`/users/me/topics/${topic.id}`);
  }

}
