import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../http/article.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
})
export class FeedComponent implements OnInit {

  articles: Article[] = [];

  constructor(private articleService: ArticleService) {
  }

  ngOnInit(): void {
    this.articleService.getArticles().subscribe((articles) => this.articles = articles);
  }
}
