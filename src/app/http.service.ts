// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class HttpService {

//   constructor() { }
// }

import {
  Injectable
} from '@angular/core';
import {
  HttpClient, HttpHeaders
} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
// import { LOGIN_URL, LOGIN_AUTH } from 'src/app/_constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute) {}

  // getRequest() {
  //   let url: string = "http://localhost:3000/clips/"+;
  //   return this.http.get(url);
  // }

  getAllClips() {
    let userId = "adam@gmail.com";
    let url: string = "http://localhost:3000/clips/"+userId;
    return this.http.get(url);
  }

  postRequest(url: string, reqBody: any) {
    return this.http.post(url, reqBody);
  }
}
