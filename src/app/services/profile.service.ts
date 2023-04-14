import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Profile } from '../modal/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  profile: BehaviorSubject<Profile> = new BehaviorSubject<Profile>({
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
  });

  constructor() {}
}