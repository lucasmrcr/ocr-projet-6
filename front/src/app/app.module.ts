import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {NgOptimizedImage} from '@angular/common';
import {AuthModule} from './auth/auth.module';
import {Button} from 'primeng/button';
import {TopicsComponent} from './pages/topics/topics.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {MenubarModule} from 'primeng/menubar';
import {DropdownModule} from 'primeng/dropdown';
import {CardModule} from 'primeng/card';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {authInterceptor} from './auth/auth.interceptor';
import {TopicsListComponent} from './components/topics-list/topics-list.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {DividerModule} from 'primeng/divider';
import {AvatarModule} from 'primeng/avatar';
import {FeedComponent} from './pages/feed/feed.component';
import {CreateComponent as CreateArticleComponent} from './pages/articles/create/create.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FloatLabelModule} from 'primeng/floatlabel';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ToastModule} from 'primeng/toast';
import {ArticlesListComponent} from './components/articles-list/articles-list.component';
import {DetailsComponent as DetailsArticleComponent} from './pages/articles/details/details.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ProfileComponent, TopicsComponent, NavbarComponent, TopicsListComponent, FeedComponent, CreateArticleComponent, ArticlesListComponent, DetailsArticleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgOptimizedImage,
    AuthModule,
    Button,
    MenubarModule,
    DropdownModule,
    CardModule,
    DividerModule,
    AvatarModule,
    ReactiveFormsModule,
    FloatLabelModule,
    InputTextModule,
    InputTextareaModule,
    ToastModule,
  ],
  providers: [provideHttpClient(withInterceptors([authInterceptor]))],
  bootstrap: [AppComponent],
  exports: [
    NavbarComponent,
  ],
})
export class AppModule {
}
