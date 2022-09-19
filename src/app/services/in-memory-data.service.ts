import { Injectable } from '@angular/core';
import { PostImg } from '../interfaces/PostImg';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }

  createDb() {
    const imgs: PostImg[] = [
      { postedBy: {name:'user2', username:'username2', iconUrl:'/assets/images/img2.jpg'}, id: 'Dr Nice1', url: '/assets/images/img1.jpg' },
      { postedBy: {name:'user3', username:'username3', iconUrl:'/assets/images/img3.jpg'}, id: 'Dr Nice2', url: '/assets/images/img2.jpg' },
      { postedBy: {name:'user4', username:'username4', iconUrl:'/assets/images/img4.jpg'}, id: 'Dr Nice3', url: '/assets/images/img3.jpg' },
      { postedBy: {name:'user5', username:'username5', iconUrl:'/assets/images/img1.jpg'}, id: 'Dr Nice4', url: '/assets/images/img4.jpg' }
    ];

    return {imgs};
  }
}
