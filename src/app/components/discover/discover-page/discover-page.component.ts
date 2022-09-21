import { Component, OnInit } from '@angular/core';

import { DiscoverImgsService } from 'src/app/services/discover-imgs.service';
import { PostImg } from 'src/app/interfaces/PostImg';
import { Post } from 'src/app/interfaces/Post';

@Component({
  selector: 'app-discover-page',
  templateUrl: './discover-page.component.html',
  styleUrls: ['./discover-page.component.scss']
})
export class DiscoverPageComponent implements OnInit {
  posts: Post[] = [];

  constructor(private discoverImgsService: DiscoverImgsService) { }

  ngOnInit(): void {
    this.discoverImgsService.getArrayOfImgs()
    .subscribe(imgs => {
      this.posts = imgs;
    });
  }

}
