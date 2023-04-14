import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { PostService } from 'src/app/services/post.service';
import { Post } from './post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  loadedPost: Post[] = [];
  isLoading: boolean = false;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.isLoading = true;
    this.http.getPosts().subscribe((response: Array<Post>) => {
      this.loadedPost = response;
      this.isLoading = false;
    });
  }
 
  onUpdatePost(post: Post) {
    this.loadedPost.unshift(post);
  }
  onRemovePost(id: string) {
    this.loadedPost.forEach((post: Post, index: number) => {
      if (post._id === id) {
        this.loadedPost.splice(index, 1);
      }
    });
  }
} 