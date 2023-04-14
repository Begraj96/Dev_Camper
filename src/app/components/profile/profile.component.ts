import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profile } from 'src/app/modal/profile';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile: Profile = {
    bio: '',
    company: '',
    date: '',
    experience: [],
    education: [],
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

  constructor(private http: HttpService, private route: ActivatedRoute) {}

  ngOnInit() {
    const handle = this.route.snapshot.params['handle'];
    console.log(this.route.snapshot.params )

    this.http.getProfileByHandle(handle).subscribe((profile) => {
      console.log('profile =>', profile)
      this.profile = profile;
    });
  }
}
