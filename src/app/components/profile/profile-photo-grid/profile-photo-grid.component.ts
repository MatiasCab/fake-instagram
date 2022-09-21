import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post } from 'src/app/interfaces/Post';
import { User } from 'src/app/interfaces/User';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-photo-grid',
  templateUrl: './profile-photo-grid.component.html',
  styleUrls: ['./profile-photo-grid.component.scss']
})
export class ProfilePhotoGridComponent implements OnInit {
  @Input() user!: User;
  posts: Post[] = [];

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getPostsByUserId(this.user.username)
    .subscribe(posts => {
      this.posts = posts;
    });
  }
}
