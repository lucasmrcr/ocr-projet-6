import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ArticleService} from '../../../http/article.service';
import {FormControl, Validators} from '@angular/forms';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-articles-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {

  commentForm = new FormControl('', [Validators.required]);
  article: Article | undefined;

  constructor(private route: ActivatedRoute, private articleService: ArticleService, private messageService: MessageService, private router: Router) {
  }

  submit() {
    if (this.commentForm.invalid || !this.article) {
      return;
    }

    this.articleService.createComment(this.article.id, this.commentForm.value!).subscribe(() => {
      this.messageService.add({severity: 'success', summary: 'Commentaire créé.'});
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params =>
      this.articleService.getArticle(params['id']).subscribe({
        next: article => this.article = article,
        error: () => this.router.navigate(['/feed']),
      }),
    );
  }

}
