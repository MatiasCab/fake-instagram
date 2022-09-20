import { Component, OnInit, Input } from '@angular/core';
import { DiscoverImgsService } from 'src/app/services/discover-imgs.service';
import { Post } from 'src/app/interfaces/Post';
import { PostImg } from 'src/app/interfaces/PostImg';

@Component({
  selector: 'app-search-page-grilla',
  templateUrl: './search-page-grilla.component.html',
  styleUrls: ['./search-page-grilla.component.scss']
})
export class SearchPageGrillaComponent implements OnInit {

  @Input() posts: Post[] = [];

  constructor(private discoverImgsService: DiscoverImgsService) { }

  ngOnInit(): void {
  }


}
