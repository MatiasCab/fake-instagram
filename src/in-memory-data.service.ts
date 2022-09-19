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
      { user: {name:'user2', username:'username2', iconImgLink:'./img/img2.jpg'}, idImg: 'Dr Nice', link: '../assets/img/cat1.jpg', category: ['gato', 'cat', 'animal'] },
      { user: {name:'user3', username:'username3', iconImgLink:'./img/img3.jpg'}, idImg: 'Dr Nice', link: '../assets/img/cat2.jpg', category: ['gato', 'cat', 'animal'] },
      { user: {name:'user4', username:'username4', iconImgLink:'./img/img4.jpg'}, idImg: 'Dr Nice', link: '../assets/img/cat3.jpg', category: ['gato', 'cat', 'animal'] },
      { user: {name:'user5', username:'username5', iconImgLink:'./img/img1.jpg'}, idImg: 'Dr Nice', link: '../assets/img/cat4.jpg', category: ['gato', 'cat', 'animal'] },
      { user: {name:'user5', username:'username5', iconImgLink:'./img/img1.jpg'}, idImg: 'Dr Nice', link: '../assets/img/cat5.jpg', category: ['gato', 'cat', 'animal'] },
      { user: {name:'user5', username:'username5', iconImgLink:'./img/img1.jpg'}, idImg: 'Dr Nice', link: '../assets/img/cat6.jpg', category: ['gato', 'cat', 'animal'] },
      { user: {name:'user2', username:'username2', iconImgLink:'./img/img2.jpg'}, idImg: 'Dr Nice', link: '../assets/img/dog1.jpg', category: ['perro', 'dog', 'animal'] },
      { user: {name:'user3', username:'username3', iconImgLink:'./img/img3.jpg'}, idImg: 'Dr Nice', link: '../assets/img/dog2.jpg', category: ['perro', 'dog', 'animal'] },
      { user: {name:'user4', username:'username4', iconImgLink:'./img/img4.jpg'}, idImg: 'Dr Nice', link: '../assets/img/dog3.jpg', category: ['perro', 'dog', 'animal'] },
      { user: {name:'user5', username:'username5', iconImgLink:'./img/img1.jpg'}, idImg: 'Dr Nice', link: '../assets/img/dog4.jpg', category: ['perro', 'dog', 'animal'] },
      { user: {name:'user5', username:'username5', iconImgLink:'./img/img1.jpg'}, idImg: 'Dr Nice', link: '../assets/img/dog5.jpg', category: ['perro', 'dog', 'animal'] },
      { user: {name:'user5', username:'username5', iconImgLink:'./img/img1.jpg'}, idImg: 'Dr Nice', link: '../assets/img/dog6.jpg', category: ['perro', 'dog', 'animal'] },
      { user: {name:'user5', username:'username5', iconImgLink:'./img/img1.jpg'}, idImg: 'Dr Nice', link: '../assets/img/img1.jpg', category: ['naturaleza', 'nature', 'outdoor'] }
    ];

    return {imgs};
  }
}
