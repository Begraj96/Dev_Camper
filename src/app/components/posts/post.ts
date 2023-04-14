export interface Post {
    dislikes: any;
    avatar: string;
    comments: [];
    date: string;
    likes: Array<{ _id?: string; user?: string }>;
    name: string;
    text: string;
    user: string;
    __v: number;
    _id: string;
  }