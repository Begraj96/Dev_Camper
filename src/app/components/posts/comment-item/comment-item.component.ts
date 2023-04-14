import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';
import { HttpService } from 'src/app/services/http.service';
import { PostService } from 'src/app/services/post.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css'],
})
export class CommentItemComponent implements OnInit {
  @Input() comments:any;
  @Input() isLoading: any;

  user: string = '';
  constructor(
    private commentService: CommentService,
    private http: HttpService,
    private route: ActivatedRoute,
    private profileService: ProfileService
  ) {}

  ngOnInit() {
    const data:any = localStorage.getItem('profile')
    this.user = JSON.parse(data).user._id;
 
    this.commentService.updatedComment.subscribe((comment) => {
      this.comments = comment;
    });
  }

  onDelete(comid: string) {
    const postId = this.route.snapshot.params['id'];

    this.http.deleteComment(comid, postId).subscribe((response) => {
      this.comments = response;
    });
  }
}