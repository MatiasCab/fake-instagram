import { Component, OnInit, Input } from '@angular/core';
import { DiscoverImgsService } from 'src/discover-imgs.service';
import { PostImg } from 'src/PostImg';

@Component({
  selector: 'app-search-page-grilla',
  templateUrl: './search-page-grilla.component.html',
  styleUrls: ['./search-page-grilla.component.scss']
})
export class SearchPageGrillaComponent implements OnInit {

  @Input() imgs: PostImg[] = [];

  constructor(private discoverImgsService: DiscoverImgsService) { }

  ngOnInit(): void {
  //  this.getArrayOfImgs();
  }

  //getArrayOfImgs(): void {
//    this.discoverImgsService.getArrayOfImgs().subscribe(imgs => this.imgs = imgs);
 // }
}
