import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PostImg } from 'src/app/interfaces/PostImg';
import { User } from 'src/app/interfaces/User';
import { FullSizedImageComponent } from '../../full-sized-image/full-sized-image.component';

@Component({
  selector: 'app-post-img',
  templateUrl: './post-img.component.html',
  styleUrls: ['./post-img.component.scss']
})
export class PostImgComponent implements OnInit {

  @Input() image!: PostImg;
  @Input() user!: User;

  constructor() { }

  ngOnInit(): void {

  }
  @ViewChild('hiddenElement') fullSizedImgElement!: FullSizedImageComponent;

  openImage(){
    this.fullSizedImgElement.show();
  }



}
