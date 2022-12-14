import { Component, OnInit, Input } from '@angular/core';
import { PostImg } from 'src/app/interfaces/PostImg';
import { trigger, style, animate, transition} from '@angular/animations';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-full-sized-image',
  templateUrl: './full-sized-image.component.html',
  styleUrls: ['./full-sized-image.component.scss'],
  animations: [ 
    trigger("openClose", [
    transition("* => open", [
      style({ transform: "translateY(100%)"}),
      animate('0.2s', style({ transform: "translateY(0%)"}))
    ]),
    transition("open => *", [
      style({ transform: "translateY(0%)"}),
      animate('0.2s', style({ transform: "translateY(100%)"}))
    ])
  ])]
})
export class FullSizedImageComponent implements OnInit {

  constructor() { }

 
  @Input() image!: PostImg;
  @Input() user!: User;
  isDisplaying: boolean = false;

  ngOnInit(): void {
  }

  show(): void {
    this.isDisplaying = true;
  }

  hide(): void {
    this.isDisplaying = false;
  }

}
