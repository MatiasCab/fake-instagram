import { User } from './../../../interfaces/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  user: User = {
    name: 'Carlitos',
    username: 'carlitossoyyo',
    iconUrl: '/assets/images/img2.jpg'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
