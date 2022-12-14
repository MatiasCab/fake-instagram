import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { PostImg } from 'src/app/interfaces/PostImg';

@Component({
  selector: 'app-search-page-sbar',
  templateUrl: './search-page-sbar.component.html',
  styleUrls: ['./search-page-sbar.component.scss']
})
export class SearchPageSbarComponent implements OnInit {
  
  @Output() searchInputEvent = new EventEmitter<string>();
  
  input = '';
  imgs: PostImg[] = [];

  constructor( ) { 
  }

  ngOnInit(): void {
  }

 search(){  
    this.searchInputEvent.emit(this.input);
 }
}
