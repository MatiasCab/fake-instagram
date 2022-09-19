import { Component, OnInit } from '@angular/core';
import { DiscoverImgsService } from 'src/discover-imgs.service';
import { PostImg } from 'src/PostImg';

@Component({
  selector: 'app-search-page-sbar',
  templateUrl: './search-page-sbar.component.html',
  styleUrls: ['./search-page-sbar.component.scss']
})
export class SearchPageSbarComponent implements OnInit {

  imgs: PostImg[] = [];

  searchinput = "";
  constructor( private discoverImgsService: DiscoverImgsService) { }

  ngOnInit(): void {
  }
  getSearchedImg(searchinput:string): void {

    if (this.searchinput == "dog") {
      console.log(this.searchinput);
    }
    this.discoverImgsService.getArrayOfImgs().subscribe(imgs => this.imgs = imgs);
  }
  
 
}