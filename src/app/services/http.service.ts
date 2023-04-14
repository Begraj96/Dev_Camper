import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateProfile } from '../modal/createProfile';
import { Education } from '../modal/education';
import { Experince } from '../modal/experince';

import { AuthService } from './auth.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  register(value: any) {
    const url = 'http://localhost:5000/api/users/register';
    const body = {
      name: value.name,
      email: value.email,
      password: value.password1,
      password2: value.password2,
    };

    return this.http.post<any>(url, body, httpOptions);
  }

  login(value: any) {
    const url = 'http://localhost:5000/api/users/login';

    const body = {
      email: value.email,
      password: value.password,
    };

    return
    this.http.post(url, body, httpOptions);
  }


  getProfile(): Observable<any> {
    const url = 'http://localhost:5000/api/profile/';
    const token = this.authService.getToken();
    //console.log(token)

    const httpOptionsToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
    };
    console.log("hello", httpOptionsToken);
    return this.http.get(url, httpOptionsToken);
  }


  getProfiles(): Observable<any> {
    const url = 'http://localhost:5000/api/profile/all';

    return this.http.get(url, httpOptions);
  }


  createProfile(value: CreateProfile): Observable<any> {
    const url = 'http://localhost:5000/api/profile';
    const token = this.authService.getToken();

    const httpOptionsToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
    };
    return this.http.post(url, value, httpOptionsToken);
  }

  addEducation(value: Education): Observable<any> {
    const url = 'http://localhost:5000/api/profile/education';
    const token = this.authService.getToken();

    const httpOptionsToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
    };
    return this.http.post(url, value, httpOptionsToken);
  }

  addExperience(value: Experince): Observable<any> {
    const url = 'http://localhost:5000/api/profile/experience';
    const token = this.authService.getToken();

    const httpOptionsToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
    };
    return this.http.post(url, value, httpOptionsToken);
  }


  deleteEducation(id: string): Observable<any> {
    const url = `http://localhost:5000/api/profile/education/${id}`;
    const token = this.authService.getToken();

    const httpOptionsToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
    };
    return this.http.delete(url, httpOptionsToken);
  }

  deleteExperience(id: string): Observable<any> {
    const url = `http://localhost:5000/api/profile/experience/${id}`;
    const token = this.authService.getToken();

    const httpOptionsToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
    };
    return this.http.delete(url, httpOptionsToken);
  }

  deleteProfile(): Observable<any> {
    const url = 'http://localhost:5000/api/profile';
    const token = this.authService.getToken();

    const httpOptionsToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
    };
    return this.http.delete(url, httpOptionsToken);
  }


  createPost(value: string): Observable<any> {
    const url = 'http://localhost:5000/api/posts';
    const token = this.authService.getToken();

    const httpOptionsToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
    };
    return this.http.post(url, value, httpOptionsToken);
  }

  getPosts(): Observable<any> {
    const url = 'http://localhost:5000/api/posts';
    const token = this.authService.getToken();

    const httpOptionsToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
    };
    return this.http.get(url, httpOptionsToken);
  }

  deletePost(id: string): Observable<any> {
    const url = `http://localhost:5000/api/posts/${id}`;
    const token = this.authService.getToken();

    const httpOptionsToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
    };
    return this.http.delete(url, httpOptionsToken);
  }

  like(id: string): Observable<any> {
    const url = `http://localhost:5000/api/posts/like/${id}`;
    const token = this.authService.getToken();

    const httpOptionsToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
    };
    return this.http.put(url, {}, httpOptionsToken);
  }

  dislike(id: string): Observable<any> {
    const url = `http://localhost:5000/api/posts/unlike/${id}`;
    const token = this.authService.getToken();

    const httpOptionsToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
    };
    return this.http.put(url, {}, httpOptionsToken);
  }

  addComment(value: string, id: string): Observable<any> {
    const url = `http://localhost:5000/api/posts/comment/${id}`;
    const token = this.authService.getToken();

    const httpOptionsToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
    };
    return this.http.post(url, value, httpOptionsToken);
  }

  getPost(id: string): Observable<any> {
    const url = `http://localhost:5000/api/posts/${id}`;
    const token = this.authService.getToken();

    const httpOptionsToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
    };
    return this.http.get(url, httpOptionsToken);
  }

  deleteComment(comid: string, postId: string): Observable<any> {
    const url = `http://localhost:5000/api/posts/comment/${postId}/${comid}`;
    const token = this.authService.getToken();

    const httpOptionsToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
    };
    return this.http.delete(url, httpOptionsToken);
  }


  getProfileByHandle(handle: string): Observable<any> {
    const url = `http://localhost:5000/api/profile/handle/${handle}`;

    return this.http.get(url);
  }


}