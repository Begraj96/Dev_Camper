import { Component, OnInit, Output } from '@angular/core';
import { Profile } from 'src/app/modal/profile';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css'],
})
export class ProfilesComponent implements OnInit {
  profiles: Profile[] = [];
  @Output() skills: string[] = [];
  isLoading: boolean = false;

  constructor(private http: HttpService) {}

  ngOnInit() {
    this.isLoading = true;
    this.http.getProfiles().subscribe((response: Profile[]) => {
      this.profiles = response;
      this.isLoading = false;
    });
  }
}