import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {

  constructor(private apiService: ApiService) {
  }

  /**
   * Create an article
   * @param topicId The topic id
   * @param title The article title
   * @param content The article content
   */
  createArticle(topicId: number, title: string, content: string): Observable<void> {
    return this.apiService.post('/articles', {
      topicId,
      title,
      content,
    });
  }

  /**
   * Get the articles from the server
   */
  getArticles(): Observable<Article[]> {
    return this.apiService.get<Article[]>('/articles');
  }

  /**
   * Get an article by id
   * @param id The article id
   */
  getArticle(id: number): Observable<Article> {
    return this.apiService.get<Article>('/articles/' + id);
  }

  /**
   * Like an article
   * @param articleId The article id
   * @param content The article content
   */
  createComment(articleId: number, content: string): Observable<void> {
    return this.apiService.post('/articles/' + articleId + '/comments', {
      content,
    });
  }

}
