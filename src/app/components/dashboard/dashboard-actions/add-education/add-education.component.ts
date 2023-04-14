import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/modal/education';
import { HttpService } from 'src/app/services/http.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css'],
})
export class AddEducationComponent implements OnInit {
  education: Education = {
    school: '',
    degree: '',
    fieldofstudy: '',
    fromDate: '',
    current: false,
    toDate: '',
    description: '',
  };

  constructor(
    private router: Router,
    private http: HttpService,
    private toast: ToastrService
  ) { }

  ngOnInit(): void { }

  onSubmit({ value, valid }: { value: Education; valid: boolean | null }) {
    if (!valid) {
      this.toast.error('Fill form correctly!!!')
    } else {
      this.http.addEducation(value).subscribe(
        (response) => {
          console.log(response);
          this.toast.success('Successfully add education!!!')
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}