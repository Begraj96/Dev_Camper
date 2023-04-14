import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateProfile } from 'src/app/modal/createProfile';
import { HttpService } from 'src/app/services/http.service';
import { ProfileService } from 'src/app/services/profile.service';
import { ToastrService } from  'ngx-toastr';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css'],
})
export class CreateProfileComponent implements OnInit {
  profile: CreateProfile = {
    status: '',
    company: '',
    website: '',
    location: '',
    skills: [],
    handle: '',
    bio: '',
    twitter: '',
    facebook: '',
    youtube: '',
    linkedin: '',
    instagram: '',
  }; 

  showsocial: boolean = false;
  isEdit = false;

  constructor(
    private router: Router,
    private http: HttpService,
    private profileService: ProfileService,
    private toast: ToastrService
  ) {}

  ngOnInit() {
    this.profileService.profile.subscribe((profile) => {
      if (profile._id) {
        this.isEdit = true;
        this.profile = profile;
        console.log(this.profile)
      }
    });
  }

  onSubmit({value} : {value:CreateProfile;}) {
    if (!value) {
       console.log('fill form correctly')
    } else {
      this.http.createProfile(value).subscribe(
        (response) => {
          console.log(response);
          this.toast.success('Successfully Created Account!!!')
          this.router.navigate(['/dashboard']);
        },
        ({error}) => {
          //console.log(error.handle);
          this.toast.error("Data not found")
        }
      );
    }
  }
  socialHandler() {
    this.showsocial = !this.showsocial;
  }
}