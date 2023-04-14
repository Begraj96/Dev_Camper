import { Injectable } from '@angular/core';
import { Profile } from '../modal/profile';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class PostService {
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

  constructor() { }

  getProfile(profile: Profile) {
    return profile;
  }

  getUserID(): string {
    return this.profile.user._id;
  }
}