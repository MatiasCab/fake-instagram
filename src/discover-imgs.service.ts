import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostImg } from './PostImg';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DiscoverImgsService {

  constructor(private http: HttpClient) { }

  private imgsUrl = "api/imgs"

  getArrayOfImgs(): Observable<PostImg[]> {
    return this.http.get<PostImg[]>(this.imgsUrl);
  }
}
