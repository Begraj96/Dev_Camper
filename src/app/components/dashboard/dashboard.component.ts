import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/modal/education';
import { Experince } from 'src/app/modal/experince';
import { Profile } from 'src/app/modal/profile';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';
import { PostService } from 'src/app/services/post.service';
import { ProfileService } from 'src/app/services/profile.service';
import { ToastrService } from  'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  profile: Profile = {
    bio: '',
    company: '',
    date: '',
    education: [],
    experience: [],
    githubusername: '',
    handle: '',
    location: '',
    skills: [],
    status: '',
    user: {
      _id: '',
      name: '',
      avatar: '',
    },
    website: '',
    __v: 0,
    _id: '',
    name: ''
  };
  @Output() experiences: Experince[] = [];
  @Output() educations: Education[] = [];
  isLoading: boolean = false;
  errors: any;

  constructor(
    private http: HttpService,
    private router: Router,
    private postService: PostService,
    private authService: AuthService,
    private profileService: ProfileService,
    private toast: ToastrService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.http.getProfile().subscribe(
      (response) => {
        console.log(response)
        this.profile = response;
        localStorage.setItem('profile', JSON.stringify(response));
        this.experiences = response.experience;
        console.log(this.experiences)
        this.educations = response.education;
        this.isLoading = false;
        this.postService.getProfile(response);
        this.profileService.profile.next(response);
        console.log(response);
      },
      ({error}) => {
        console.log("Error:", error.noprofile);
        this.toast.error(error.noprofile)
        this.errors = error.noprofile;        
        this.isLoading = false;
      }
    );
  }

   onDelete() {
    this.http.deleteProfile().subscribe((response) => {
      console.log(response);
      this.toast.success("Account Deleted!!!")
      localStorage.removeItem('token');
      localStorage.removeItem('profile');
      this.authService.isAuthenticated.next(false);
      this.router.navigate(['/login']);
    });
   }
}