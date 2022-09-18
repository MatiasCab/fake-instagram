import { Component, OnInit } from '@angular/core';
import { PostImg } from 'src/PostImg';
import { DiscoverImgsService } from 'src/discover-imgs.service';

@Component({
  selector: 'app-post-img',
  templateUrl: './post-img.component.html',
  styleUrls: ['./post-img.component.scss']
})
export class PostImgComponent implements OnInit {
  //Requiere servicio que traiga array de img

  images?: PostImg[];


  
  constructor(private discoverImgsService: DiscoverImgsService) { }

  ngOnInit(): void {
    //this.discoverImgsService.getArrayOfImgs().subscribe(x => this.images = x);
  }

  getImgs(){
    this.discoverImgsService.getArrayOfImgs().subscribe(x => this.images = x);
  }

}
