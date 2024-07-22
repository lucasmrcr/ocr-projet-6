import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ArticleService} from '../../../http/article.service';
import {FormControl, Validators} from '@angular/forms';
import {MessageService} from 'primeng/api';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-articles-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit, OnDestroy {

  commentForm: FormControl<string | null> = new FormControl('', [Validators.required]);
  article: Article | undefined;

  private createCommentSubscription: Subscription;
  private getArticleSubscription: Subscription;
  private routeSubscription: Subscription;

  constructor(private route: ActivatedRoute, private articleService: ArticleService, private messageService: MessageService, private router: Router) {
  }

  /**
   * Unsubscribe from the createCommentSubscription, getArticleSubscription and routeSubscription when the component is destroyed
   */
  ngOnDestroy(): void {
    this.createCommentSubscription?.unsubscribe();
    this.getArticleSubscription?.unsubscribe();
    this.routeSubscription?.unsubscribe();
  }

  /**
   * Submit the form
   */
  submit(): void {
    if (this.commentForm.invalid || !this.article) {
      return;
    }

    this.createCommentSubscription = this.articleService.createComment(this.article.id, this.commentForm.value!).subscribe(() => {
      this.messageService.add({severity: 'success', summary: 'Commentaire créé.'});
    });
  }

  /**
   * Get the article from the server
   */
  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe(params =>
      this.getArticleSubscription = this.articleService.getArticle(params['id']).subscribe({
        next: article => this.article = article,
        error: () => this.router.navigate(['/feed']),
      }),
    );
  }

}
