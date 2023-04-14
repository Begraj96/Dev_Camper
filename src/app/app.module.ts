import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { SkillComponent } from './components/profiles/skill/skill.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { DashboardActionsComponent } from './components/dashboard/dashboard-actions/dashboard-actions.component';
import { CreateProfileComponent } from './components/dashboard/dashboard-actions/create-profile/create-profile.component';
import { AddEducationComponent } from './components/dashboard/dashboard-actions/add-education/add-education.component';
import { AddExperienceComponent } from './components/dashboard/dashboard-actions/add-experience/add-experience.component';
import { EducationComponent } from './components/dashboard/education/education.component';
import { ExperienceComponent } from './components/dashboard/experience/experience.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/posts/post/post.component';
import { PostItemComponent } from './components/posts/post-item/post-item.component';
import { PostFormComponent } from './components/posts/post-form/post-form.component';
import { CommentItemComponent } from './components/posts/comment-item/comment-item.component';
import { CommentFormComponent } from './components/posts/comment-form/comment-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        HomeComponent,
        RegisterComponent,
        LoginComponent,
        NavbarComponent,
        ProfilesComponent,
        SkillComponent,
        SpinnerComponent,
        DashboardActionsComponent,
        CreateProfileComponent,
        AddEducationComponent,
        AddExperienceComponent,
        EducationComponent,
        ExperienceComponent,
        ProfileComponent,
        PostsComponent,
        PostComponent,
        PostItemComponent,
        PostFormComponent,
        CommentItemComponent,
        CommentFormComponent,
        PageNotFoundComponent,
    ],
   
    imports: [
        FormsModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ToastrModule.forRoot({
            timeOut: 2000,
            positionClass: 'toast-top-right',
            preventDuplicates: true,
        }),
        BrowserAnimationsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
