import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  updatedComment: Subject<any> = new Subject();

  constructor() {}
}