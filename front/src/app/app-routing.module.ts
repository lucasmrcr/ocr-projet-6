import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {LoginComponent} from './auth/pages/login/login.component';
import {RegisterComponent} from './auth/pages/register/register.component';
import {TopicsComponent} from './pages/topics/topics.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {FeedComponent} from './pages/feed/feed.component';
import {CreateComponent as CreateArticleComponent} from './pages/articles/create/create.component';
import {AuthGuard} from './auth/auth.guard';
import {DetailsComponent as DetailsArticleComponent} from './pages/articles/details/details.component';

// consider a guard combined with canLoad / canActivate route option
// to manage unauthenticated user to access private routes
const routes: Routes = [
  {path: 'auth/login', component: LoginComponent},
  {path: 'auth/register', component: RegisterComponent},
  {path: 'topics', component: TopicsComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'feed', component: FeedComponent, canActivate: [AuthGuard]},
  {path: 'articles/create', component: CreateArticleComponent, canActivate: [AuthGuard]},
  {path: 'articles/:id', component: DetailsArticleComponent, canActivate: [AuthGuard]},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
