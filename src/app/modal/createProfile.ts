export interface CreateProfile {
    status: string;
    company: string;
    website: string;
    location: string;
    skills: string[];
    handle: string;
    bio: string;
    twitter?: string;
    facebook?: string;
    youtube?: string;
    linkedin?: string;
    instagram?: string;
  }