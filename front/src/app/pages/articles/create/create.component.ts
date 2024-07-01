import {Component, OnInit} from '@angular/core';
import {TopicService} from '../../../http/topic.service';
import {FormBuilder, Validators} from '@angular/forms';
import {ArticleService} from '../../../http/article.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent implements OnInit {

  articleForm = this.formBuilder.group({
    topic: [0, [Validators.required, Validators.pattern('^[0-9]*$')]],
    title: ['', [Validators.required]],
    content: ['', [Validators.required]],
  });

  topics: Topic[] | undefined;

  constructor(private topicService: TopicService, private formBuilder: FormBuilder, private articleService: ArticleService, private messageService: MessageService, private router: Router) {
  }

  submit() {
    if (this.articleForm.valid) {
      this.articleService
        .createArticle(this.articleForm.value.topic!, this.articleForm.value.title!, this.articleForm.value.content!)
        .subscribe({
          next: () => {
            this.messageService.add({severity: 'success', detail: 'Article créé avec succès'});
            void this.router.navigate(['/feed']);
          },
          error: (httpError) => {
            this.messageService.add({severity: 'error', detail: httpError.error.message});
          },
        });
    }
  }

  ngOnInit() {
    this.topicService.getAllTopics().subscribe((topics) => this.topics = topics);
  }

}
