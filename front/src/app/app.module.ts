import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {NgOptimizedImage} from '@angular/common';
import {AuthModule} from './auth/auth.module';
import {Button} from 'primeng/button';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgOptimizedImage,
    AuthModule,
    Button,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
