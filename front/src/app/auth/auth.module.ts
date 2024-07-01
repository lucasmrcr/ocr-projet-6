import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {LoginComponent} from './pages/login/login.component';
import {CalendarModule} from 'primeng/calendar';
import {InputTextModule} from 'primeng/inputtext';
import {FloatLabelModule} from 'primeng/floatlabel';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {provideHttpClient} from '@angular/common/http';
import {MessageModule} from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {RegisterComponent} from './pages/register/register.component';
import {AuthGuard} from './auth.guard';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  providers: [MessageService, AuthGuard],
  imports: [
    CommonModule,
    CalendarModule,
    InputTextModule,
    FloatLabelModule,
    FormsModule,
    ReactiveFormsModule,
    MessageModule,
    MessagesModule,
    ToastModule,
    NgOptimizedImage,
  ],
})
export class AuthModule {
}
