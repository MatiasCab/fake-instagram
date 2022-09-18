import { Injectable } from '@angular/core';
import { PostImg } from './PostImg';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }

  createDb() {
    const imgs: PostImg[] = [
      { user: {name:'user2', username:'username2', iconImgLink:'./img/img2.jpg'}, idImg: 'Dr Nice', link: '../assets/img/img1.jpg' },
      { user: {name:'user3', username:'username3', iconImgLink:'./img/img3.jpg'}, idImg: 'Dr Nice', link: '../assets/img/img2.jpg' },
      { user: {name:'user4', username:'username4', iconImgLink:'./img/img4.jpg'}, idImg: 'Dr Nice', link: '../assets/img/img3.jpg' },
      { user: {name:'user5', username:'username5', iconImgLink:'./img/img1.jpg'}, idImg: 'Dr Nice', link: '../assets/img/img4.jpg' }
    ];

    return {imgs};
  }
}
