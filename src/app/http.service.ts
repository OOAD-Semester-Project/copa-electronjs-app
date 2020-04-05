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

  getRequest() {
    let url: string = "http://34.94.157.63:3000/clips/adam";
    return this.http.get(url);
  }

  // getVoucherRequest(url: string, queryParams: {}) {
  //   console.log("get voucher request", queryParams);
  //   return this.http.get(url, queryParams);
  // }

  postRequest(url: string, reqBody: any) {
    return this.http.post(url, reqBody);
  }

  // login(reqBody: any) {
  //   //console.log("ssss")
  //   console.log(reqBody['qrcode']);
  //   const headers = new Headers({'Content-Type':'application/json'});
  //   return this.http.post(LOGIN_AUTH, reqBody['qrcode'], {headers: new HttpHeaders().set('Content-Type', 'application/json')});
  // }

}
