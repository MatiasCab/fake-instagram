import { Injectable } from '@angular/core';
import { Post } from '../interfaces/Post';
import { PostImg } from '../interfaces/PostImg';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }

  createDb() {
    const posts: Post[] = [
      {id: '1', user: {name:'user2', username:'username2', iconUrl:'/assets/images/img2.jpg', city: 'San Francisco', state: 'CA'}, postImg: { id: 'Dr Nice1', url: '/assets/images/img1.jpg' }, tags: ['perros']},
      {id: '4', user: {name:'user5', username:'username5', iconUrl:'/assets/images/img1.jpg', city: 'San Francisco', state: 'CA'}, postImg: { id: 'Dr Nice4', url: '/assets/images/img4.jpg' }, tags: ['paisaje']},
      {id: '2', user: {name:'user3', username:'username3', iconUrl:'/assets/images/img3.jpg', city: 'San Francisco', state: 'CA'}, postImg: { id: 'Dr Nice2', url: '/assets/images/img2.jpg' }, tags: ['gatos']},
      {id: '3', user: {name:'user4', username:'username4', iconUrl:'/assets/images/img4.jpg', city: 'San Francisco', state: 'CA'}, postImg: { id: 'Dr Nice3', url: '/assets/images/img3.jpg' }, tags: ['perros, gatos']},
    ]

    return {posts};
  }
}
