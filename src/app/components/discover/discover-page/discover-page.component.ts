import { Component, OnInit } from '@angular/core';

import { DiscoverImgsService } from 'src/app/services/discover-imgs.service';
import { PostImg } from 'src/app/interfaces/PostImg';

@Component({
  selector: 'app-discover-page',
  templateUrl: './discover-page.component.html',
  styleUrls: ['./discover-page.component.scss']
})
export class DiscoverPageComponent implements OnInit {
  postImgs: PostImg[] = [];

  constructor(private discoverImgsService: DiscoverImgsService) { }

  ngOnInit(): void {
    this.discoverImgsService.getArrayOfImgs()
    .subscribe(imgs => {
      this.postImgs = imgs;
    });
  }

}
