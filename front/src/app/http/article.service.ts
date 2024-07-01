import {Injectable} from '@angular/core';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {

  constructor(private apiService: ApiService) {
  }

  createArticle(topicId: number, title: string, content: string) {
    return this.apiService.post('/articles', {
      topicId,
      title,
      content,
    });
  }

  getArticles() {
    return this.apiService.get<Article[]>('/articles');
  }

  getArticle(id: number) {
    return this.apiService.get<Article>('/articles/' + id);
  }

  createComment(articleId: number, content: string) {
    return this.apiService.post('/articles/' + articleId + '/comments', {
      content,
    });
  }

}
