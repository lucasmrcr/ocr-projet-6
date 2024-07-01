import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {LoginComponent} from './auth/pages/login/login.component';
import {RegisterComponent} from './auth/pages/register/register.component';
import {TopicsComponent} from './pages/topics/topics.component';
import {ProfileComponent} from './pages/profile/profile.component';

// consider a guard combined with canLoad / canActivate route option
// to manage unauthenticated user to access private routes
const routes: Routes = [
  {path: 'auth/login', component: LoginComponent},
  {path: 'auth/register', component: RegisterComponent},
  {path: 'topics', component: TopicsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
