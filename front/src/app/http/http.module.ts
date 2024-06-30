import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApiService} from './api.service';
import {AuthService} from './auth.service';


@NgModule({
  declarations: [],
  providers: [ApiService, AuthService],
  imports: [
    CommonModule,
  ],
})
export class HttpModule {
}
