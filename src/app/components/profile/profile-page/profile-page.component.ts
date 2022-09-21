import { ProfileService } from './../../../services/profile.service';
import { ActivatedRoute } from '@angular/router';
import { User } from './../../../interfaces/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  user!: User;

  constructor(private activatedRoute: ActivatedRoute, private profileService: ProfileService) { }

  ngOnInit(): void {
    const username = this.activatedRoute.snapshot.paramMap.get('username');
    if (username) {
      this.user = this.profileService.getUserById(username);
    }
  }

}
