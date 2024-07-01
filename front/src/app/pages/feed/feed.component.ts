import {Component} from '@angular/core';
import {ArticleService} from '../../http/article.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
})
export class FeedComponent {

  constructor(private articleService: ArticleService) {
  }
}
