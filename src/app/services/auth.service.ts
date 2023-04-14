
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  logout() {
    throw new Error('Method not implemented.');
  }
  isAuthenticated = new BehaviorSubject<boolean>(false)
  token: string | null;

  constructor(private router: Router, private _http: HttpClient) {
    this.token = (localStorage.getItem('token'));
    //this.isauthenticated();
  }


  getregisterData(name: string, email: string, password: number, password2: number) {
    return this._http.post("http://localhost:5000/api/users/register",
      { name, email, password, password2, returnSecureToken: true }, httpOptions)
  }

  getloginData(email: string, password: number) {
    return this._http.post('http://localhost:5000/api/users/login',
      { email: email, password: password, returnSecureToken: true }, httpOptions)
  };


  setToken(token: string) {
    //  console.log('token', token)
    localStorage.setItem('token', JSON.stringify(token));
    console.log('token', token)
    //  this.isauthenticated();
  }

  getToken(): string {
    return JSON.parse(localStorage.getItem('token') ?? '');
  }



  isLoggedIn(): boolean {
    let a = localStorage.getItem('token') ? true : false;
   // console.log(a)
    if (a == false) {
      this.router.navigate(['login'])
    }
    return a;
  }


}
