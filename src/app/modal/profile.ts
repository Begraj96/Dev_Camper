import { Experince } from './experince';
import { Education } from './education';

export interface Profile {
  name:string
  bio: string;
  company: string;
  date: string;
  education: any;

  experience: any;
  githubusername: string;
  handle: string;
  location: string;
  skills: string[];
  status: string;
  user: {
    _id: string;
    name: string;
    avatar: string;
  };
  website: string;
  __v: number;
  _id: string;
}