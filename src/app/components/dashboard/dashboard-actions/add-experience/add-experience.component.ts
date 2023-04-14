import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experince } from 'src/app/modal/experince';
import { HttpService } from 'src/app/services/http.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css'],
})
export class AddExperienceComponent implements OnInit {
  experience: Experince = {
    title: '',
    company: '',
    location: '',
    from: '',
    current: false,
    to: '',
    description: '',
  };

  constructor(
    private http: HttpService,
    private router: Router,
    private toast: ToastrService

  ) { }

  ngOnInit(): void { }

  onSubmit({ value, valid }: { value: Experince; valid: boolean | null }) {
    if (!valid) {
      this.toast.error('Fill form correctly!!!')
    } else {
      this.http.addExperience(value).subscribe(
        (response) => {
          console.log(response);
          this.toast.success('Successfully add experience!!!')
          this.router.navigate(['/dashboard']);
        },
        (error: any) => {
          console.log("Error:", error.errors);
        }
      );
    }
  }
}