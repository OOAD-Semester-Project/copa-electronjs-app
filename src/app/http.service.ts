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
  private getAllClipsApi: string = "http://localhost:3000/clips/"
  private addClipApi: string = "http://localhost:3000/addClip/"
  private jwtToken: string = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJMX3dTaUlMdG9Ob0lFSWpCdkxnQlFoNFNWa2k5bnU5UEhhX0xYdHREYWxnIn0.eyJqdGkiOiJjMDUxNzYwZi0wMTIzLTQ5Y2EtOWFiYy1iODE5NDJlNTg2YTQiLCJleHAiOjE1ODc0NzE5OTEsIm5iZiI6MCwiaWF0IjoxNTg3NDM1OTkxLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvYXV0aC9yZWFsbXMvY29wYSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJiMTVjZDYxZC0wODBiLTRmYWUtOTk0NC0yM2Y3NzlhZWQ2ZWEiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJjbGlwYm9hcmQtc2VydmVyIiwiYXV0aF90aW1lIjowLCJzZXNzaW9uX3N0YXRlIjoiYWY5YjcwMGUtNTYwMC00YTg0LTg0MWItZDIxNTYzMjBmZDU3IiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwOi8vbG9jYWxob3N0OjMwMDAiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsIm5hbWUiOiJNYWRodXN1ZGhhbiBBaXRoYWwiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJtYWRodSIsImdpdmVuX25hbWUiOiJNYWRodXN1ZGhhbiIsImZhbWlseV9uYW1lIjoiQWl0aGFsIiwiZW1haWwiOiJtYWRodUBtYWlsLmNvbSJ9.LjXrdrEGYKS6JBe0LTTxI_lIq25hCIJuRA_Xq00Pb6EQuPZT0vcxi80vA3Seo7gf1ky55XdTpsKRA0XnfrIJRbIs7Xbr18sEIe7gt0-GhdCcDkdbWV9e9TwXFWgvbYJWzGnFPAI4bSyalf5PfwJClNFqmrgEGvB3R_A81AuuCZ_jg7SjnJ2Z39__yi5-zEP9LxUsyfsK3qFRnHJklZGN6RZNDY1mBEyXxUsz1Rox0VjdWWKR3ogHawifu2EOEBGYhTc3YhlxxJsXIZZv-Y0QVwOjEwNVyM7kNcdwVbj5I9YjfABYBe8jTQzEyzwc9npT7KlyeIXjSXT6heb8G8MeaA"

  constructor(private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute) {}

  // getRequest() {
  //   let url: string = "http://localhost:3000/clips/"+;
  //   return this.http.get(url);
  // }

  getAllClips() {
    let userId = "madhu";
    let url: string = this.getAllClipsApi+userId;    
    let options = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer `+this.jwtToken)
    }
    return this.http.get(url, options);
  }

  // postRequest(url: string, reqBody: any) {
  //   return this.http.post(url, reqBody);
  // }

  addClip(reqBody: any) {
    let options = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer `+this.jwtToken)
    }
    return this.http.post(this.addClipApi, reqBody, options);
  }
}
