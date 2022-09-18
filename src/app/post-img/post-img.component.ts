import { Component, Input, OnInit } from '@angular/core';
import { PostImg } from 'src/PostImg';
import { DiscoverImgsService } from 'src/discover-imgs.service';

@Component({
  selector: 'app-post-img',
  templateUrl: './post-img.component.html',
  styleUrls: ['./post-img.component.scss']
})
export class PostImgComponent implements OnInit {

  @Input() image?: PostImg;


  constructor() { }

  ngOnInit(): void {
    
  }

  

}
