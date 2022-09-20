import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostImg } from 'src/app/interfaces/PostImg';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../interfaces/Post';

@Injectable({
  providedIn: 'root'
})
export class DiscoverImgsService {

  constructor(private http: HttpClient) { }

  private imgsUrl = 'api/posts';

  getArrayOfImgs(): Observable<Post[]> {
    return this.http.get<Post[]>(this.imgsUrl);
  }
  getArrayOfSearchedImgs(value: string): Observable<Post[]> {
    return this.http.get<Post[]>(this.imgsUrl + `?tags=${value}`);
  }
}
