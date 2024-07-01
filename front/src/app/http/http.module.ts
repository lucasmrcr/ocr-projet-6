import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApiService} from './api.service';
import {AuthService} from './auth.service';
import {TopicService} from './topic.service';
import {UserService} from './user.service';


@NgModule({
  declarations: [],
  providers: [ApiService, AuthService, TopicService, UserService],
  imports: [
    CommonModule,
  ],
})
export class HttpModule {
}
