import { Component, OnInit } from '@angular/core';
import { SearchPageSbarComponent } from '../search-page-sbar/search-page-sbar.component';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  title = 'Search';
  constructor() { }

  ngOnInit(): void {
  }

}
