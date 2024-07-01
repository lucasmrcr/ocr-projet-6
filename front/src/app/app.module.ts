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

@NgModule({
  declarations: [AppComponent, HomeComponent, ProfileComponent, TopicsComponent, NavbarComponent, TopicsListComponent],
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
  ],
  providers: [provideHttpClient(withInterceptors([authInterceptor]))],
  bootstrap: [AppComponent],
})
export class AppModule {
}
