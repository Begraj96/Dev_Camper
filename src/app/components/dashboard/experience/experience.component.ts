import { Component, Input, OnInit } from '@angular/core';
import { Experince } from 'src/app/modal/experince';
import { HttpService } from 'src/app/services/http.service';
import { ToastrService } from  'ngx-toastr';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  @Input('experiences') experiences: Experince[] = [];

  constructor(
    private http: HttpService,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {}

  onDelete(id: any) {
    this.http.deleteExperience(id).subscribe((response) => {
      console.log(response);
      this.toast.success("Successfully Deleted!!!")
      this.experiences = response.experience;
      console.log(this.experiences)
    });
  }
}