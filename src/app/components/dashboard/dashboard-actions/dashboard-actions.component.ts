import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/modal/profile';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-dashboard-actions',
  templateUrl: './dashboard-actions.component.html',
  styleUrls: ['./dashboard-actions.component.css'],
})
export class DashboardActionsComponent implements OnInit {
  profile: Profile;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profileService.profile.subscribe((profile) => {
      this.profile = profile;
      console.log('profile', this.profile)
    });
  }
}