import { Component, OnInit } from '@angular/core';
import { DiscoverImgsService } from 'src/app/services/discover-imgs.service';
import { Post } from 'src/app/interfaces/Post';
import  { PostImg } from 'src/app/interfaces/PostImg';
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})

export class SearchPageComponent implements OnInit {

  searchresult: boolean = false;
  title = 'Search';

  posts: Post[] = [];
  //postimg: PostImg[] = [];
  constructor(private discoverImgsService: DiscoverImgsService) { }

  ngOnInit(): void {
    this.searchresult = false;
  }
  getSearchedImg(searchinput: string): void {
    this.searchresult = true;
    if (searchinput == '') {
      this.discoverImgsService.getArrayOfImgs().subscribe(posts => this.posts = posts);
    } else {
      this.discoverImgsService.getArrayOfSearchedImgs(searchinput).subscribe(posts => this.posts = posts);
    }
  }
}

