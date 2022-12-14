import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {NgbCarousel, NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { Post } from 'src/app/interfaces/Post';

import { PostImg } from 'src/app/interfaces/PostImg';

@Component({
  selector: 'app-post-carousel',
  templateUrl: './post-carousel.component.html',
  styleUrls: ['./post-carousel.component.scss'],
  providers: [NgbCarouselConfig]
})
export class PostCarouselComponent implements OnInit {
  @Input() posts!: Post[];

  swipeStartXPos?: number = undefined;

  // NGB Carousel reference and config
  @ViewChild('ngcarousel', { static: false }) ngCarousel!: NgbCarousel;
  showNavigationArrows = false;
  showNavigationIndicators = false;

  constructor(config: NgbCarouselConfig) {
    config.interval = 0;
  }

  ngOnInit(): void {
  }

  captureSwipeStart($event: TouchEvent) {
    this.swipeStartXPos = $event.changedTouches[0].clientX;
  }

  swipePost($event: TouchEvent) {
    if (this.swipeStartXPos === undefined) {
      return;
    }

    const swipeFinalXPos = $event.changedTouches[0].clientX;
    const xDifference = swipeFinalXPos - this.swipeStartXPos;
    if (Math.abs(xDifference) > 70) {
      if (xDifference < 0) {
        this.ngCarousel.next();
      } else {
        this.ngCarousel.prev();
      }
    }

    this.swipeStartXPos = undefined;
  }

}
