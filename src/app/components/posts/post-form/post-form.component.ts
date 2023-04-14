import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Post } from '../post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  text: string = '';
  @Output() updatePost: EventEmitter<Post> = new EventEmitter();

  constructor(private http: HttpService) {}

  ngOnInit(): void {}

  onSubmit({ value }: { value: string }) {
    this.http.createPost(value).subscribe((response) => {
      console.log(response);
      this.updatePost.emit(response);
    });
    this.text = '';
  }
}
