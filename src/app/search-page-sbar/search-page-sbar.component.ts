import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page-sbar',
  templateUrl: './search-page-sbar.component.html',
  styleUrls: ['./search-page-sbar.component.scss']
})
export class SearchPageSbarComponent implements OnInit {

  searchinput = "";
  constructor() { }

  ngOnInit(): void {
  }
  getSearchedImg() {

    if (this.searchinput == "dog") {
      console.log(this.searchinput);
    }
    return true;
  }
  
}