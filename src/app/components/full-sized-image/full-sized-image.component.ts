import { Component, OnInit, Input } from '@angular/core';
import { PostImg } from 'src/app/interfaces/PostImg';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-full-sized-image',
  templateUrl: './full-sized-image.component.html',
  styleUrls: ['./full-sized-image.component.scss']
})
export class FullSizedImageComponent implements OnInit {

  constructor() { }

 
  @Input() image!: PostImg;
  isDisplaying: boolean = false;

  get user() {
    return this.image ? this.image.postedBy : undefined;
  }

  ngOnInit(): void {
  }

  show(): void {
    this.isDisplaying = true;
  }

  hide(): void {
    this.isDisplaying = false;
  }

}
