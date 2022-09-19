import { Component, OnInit } from '@angular/core';
import { DiscoverImgsService } from 'src/discover-imgs.service';
import { PostImg } from 'src/PostImg';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  searchresult: boolean = false;
  title = 'Search';

  imgs: PostImg[] = [];

  constructor(private discoverImgsService: DiscoverImgsService) { }

  ngOnInit(): void {
    this.searchresult = false;
  }
  getSearchedImg(searchinput: string): void {
    this.searchresult = true;
    if (searchinput == '') {
      this.discoverImgsService.getArrayOfImgs().subscribe(imgs => this.imgs = imgs);
    } else {
      this.discoverImgsService.getArrayOfImgs().subscribe(imgs => this.imgs = imgs.filter(img => img.category.includes(searchinput)));
    }
  }
}
