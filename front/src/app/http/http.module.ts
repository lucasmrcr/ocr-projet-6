import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApiService} from './api.service';
import {AuthService} from './auth.service';
import {TopicService} from './topic.service';
import {UserService} from './user.service';
import {ArticleService} from './article.service';


@NgModule({
  declarations: [],
  providers: [ApiService, AuthService, TopicService, UserService, ArticleService],
  imports: [
    CommonModule,
  ],
})
export class HttpModule {
}
