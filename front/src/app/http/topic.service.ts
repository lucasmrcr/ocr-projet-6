import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TopicService {

  constructor(private apiService: ApiService) {
  }

  /**
   * Get all topics
   * @param followed If the user is following the topic
   */
  getAllTopics(followed: boolean = false): Observable<Topic[]> {
    return this.apiService.get<Topic[]>('/topics?followed=' + followed);
  }

  /**
   * Get a topic by id
   * @param topic The topic id
   */
  like(topic: Topic): Observable<void> {
    return this.apiService.put(`/users/me/topics/${topic.id}`, {});
  }

  /**
   * Dislike a topic
   * @param topic The topic to dislike
   */
  dislike(topic: Topic): Observable<void> {
    return this.apiService.delete(`/users/me/topics/${topic.id}`);
  }

}
