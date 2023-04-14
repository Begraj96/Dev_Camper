import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router, UrlSegment } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error!: String;
  response!: String;

  constructor(private router: Router, private authService: AuthService, private _http: HttpClient, private toast: ToastrService,) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]
    ),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),])
  });
  errors: any = { email: '', password: '' };


  loginSubmited(loginForm: FormGroup) {
    this.authService.getloginData(loginForm.value.email, loginForm.value.password).subscribe((response: any) => {
      if (response) {
        console.log(response)
        this.loginForm.reset();
        this.toast.success("Login Successfully!!")
        //  localStorage.setItem('userData', JSON.stringify(response))
        this.authService.setToken(response.token);

        // call authentication service

        this.router.navigate(['/']);

      } else {
        console.log('Error')
        this.toast.error("User not Found!!")
      }
    }, ({ error }) => {
      if (error.password) {
        this.toast.error(error.password)
        console.log("Error: ", error.errors);
        this.errors = error.password;
      }
      if (error.email) {
        this.toast.error(error.email)
        this.errors = error.email
      }
    })
  }

  onKeyDown(field: string) {
    this.errors[field] = '';
  }

  showpass(){
    var x: any = document.getElementById("mypassword");
    console.log(x)
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  get email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

}


function setToken() {
  throw new Error('Function not implemented.');
}

