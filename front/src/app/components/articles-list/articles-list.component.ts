import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../http/article.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-component-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.scss',
})
export class ArticlesListComponent implements OnInit {

  articles: Article[] = [];

  constructor(private articleService: ArticleService, private router: Router) {
  }

  navigateTo(article: Article) {
    void this.router.navigateByUrl('/articles/' + article.id);
  }

  ngOnInit(): void {
    this.articleService.getArticles()
      .subscribe(articles => this.articles = articles.sort(this.dateDescendingComparator));
  }

  dateDescendingComparator(a: Article, b: Article): number {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  }
}
