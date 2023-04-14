import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { CreateProfileComponent } from './components/dashboard/dashboard-actions/create-profile/create-profile.component';
import { AddEducationComponent } from './components/dashboard/dashboard-actions/add-education/add-education.component';
import { AddExperienceComponent } from './components/dashboard/dashboard-actions/add-experience/add-experience.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/posts/post/post.component';
import { PostFormComponent } from './components/posts/post-form/post-form.component';
import { AuthGuard } from './auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profiles', component: ProfilesComponent },
  { path: 'profile/:handle', component: ProfileComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'create-profile', component: CreateProfileComponent, canActivate: [AuthGuard] },
  { path: 'add-education', component: AddEducationComponent, canActivate: [AuthGuard] },
  { path: 'add-experience', component: AddExperienceComponent, canActivate: [AuthGuard] },
  { path: 'posts', component: PostsComponent, canActivate: [AuthGuard] },
  { path: 'posts/:id', component: PostComponent, canActivate: [AuthGuard] },
  { path: 'post-form', component: PostFormComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
