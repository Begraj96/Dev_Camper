import { Component, Input, OnInit } from '@angular/core';
import { Education } from 'src/app/modal/education';
import { HttpService } from 'src/app/services/http.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  @Input('educations') educations: Education[] = [];

  constructor(
    private http: HttpService,
    private toast: ToastrService
  ) { }

  ngOnInit(): void { }

  onDelete(id: any) {
    this.http.deleteEducation(id).subscribe((response) => {
      console.log(response);
      this.toast.success("Successfully Deleted!!!")
      this.educations = response.education;
      console.log(this.educations)
    });
  }
}