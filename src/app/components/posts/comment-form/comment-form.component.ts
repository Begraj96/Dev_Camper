import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css'],
})
export class CommentFormComponent implements OnInit {
  text: string = '';

  constructor(
    private http: HttpService,
    private route: ActivatedRoute,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {}

  onSubmit({ value }: { value: string }) {
    const id = this.route.snapshot.params['id'];

    this.http.addComment(value, id).subscribe((response) => {
      this.commentService.updatedComment.next(response);
    });
    this.text = '';
  }
}