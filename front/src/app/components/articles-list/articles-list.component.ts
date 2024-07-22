import {Component, OnDestroy, OnInit} from '@angular/core';
import {ArticleService} from '../../http/article.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-component-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.scss',
})
export class ArticlesListComponent implements OnInit, OnDestroy {

  articles: Article[] = [];

  private articleSubscription: Subscription;

  constructor(private articleService: ArticleService, private router: Router) {
  }

  /**
   * Unsubscribe from the articleSubscription when the component is destroyed
   */
  ngOnDestroy(): void {
    this.articleSubscription?.unsubscribe();
  }

  /**
   * Navigate to the article detail page
   * @param article The article to navigate to
   */
  navigateTo(article: Article): void {
    void this.router.navigateByUrl('/articles/' + article.id);
  }

  /**
   * Get the articles from the server and sort them by date descending
   */
  ngOnInit(): void {
    this.articleSubscription = this.articleService.getArticles()
      .subscribe(articles => this.articles = articles.sort(this.dateDescendingComparator));
  }

  /**
   * Compare two articles by date descending
   * @param a The first article
   * @param b The second article
   */
  dateDescendingComparator(a: Article, b: Article): number {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  }
}
