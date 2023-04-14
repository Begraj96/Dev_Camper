import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogin: boolean = false;
  userId: string | undefined;
  constructor(private router: Router, private authService: AuthService, private postService: PostService) { }

  ngOnInit(): void {
    this.userId = this.postService.getUserID();
    this.router.events.subscribe((val: any) => {
      // console.log("value: ", val);
      if (val.url) {

        if (localStorage.getItem('token') && val.url.includes('/')) {

          this.isLogin = true;
        } else {
          // this.menuType = 'default';
          this.isLogin = false
        }
      }

    });
  }
  logout() {
    localStorage.removeItem('token');
    // console.log("logout")`
    this.router.navigate(['login'])
  }

}
