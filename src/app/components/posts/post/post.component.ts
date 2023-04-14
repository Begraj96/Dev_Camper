import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { Post } from '../post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  post: Post = {
    avatar: '',
    comments: [],
    date: '',
    likes: [],
    name: '',
    text: '',
    user: '',
    __v: 0,
    _id: '',
    dislikes: []
  };
  comments: any;
  mypost: boolean = false;
  @Output() isLoading: boolean = false;

  constructor(private http: HttpService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.isLoading = true;
    const id = this.route.snapshot.params['id'];
    console.log(id)

    this.http.getPost(id).subscribe((response:any) => {
      this.post = response;

      this.comments = response.comments;
      this.isLoading = false;
    });
  }
}