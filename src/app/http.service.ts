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
  private jwtToken: string = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJMX3dTaUlMdG9Ob0lFSWpCdkxnQlFoNFNWa2k5bnU5UEhhX0xYdHREYWxnIn0.eyJqdGkiOiI2OGRlNWY0Mi02ZjVmLTRlOTUtYTc2YS1kYjZjMjJlMjk3MmYiLCJleHAiOjE1ODc1NDQxNjIsIm5iZiI6MCwiaWF0IjoxNTg3NTQzOTgyLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvYXV0aC9yZWFsbXMvY29wYSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJiMTVjZDYxZC0wODBiLTRmYWUtOTk0NC0yM2Y3NzlhZWQ2ZWEiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJjbGlwYm9hcmQtc2VydmVyIiwiYXV0aF90aW1lIjowLCJzZXNzaW9uX3N0YXRlIjoiMDI2MTFmMzItZmJmOC00Nzk3LWFiOTctYmE3MjE1NDMxZDUyIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwOi8vbG9jYWxob3N0OjMwMDAiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsIm5hbWUiOiJNYWRodXN1ZGhhbiBBaXRoYWwiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJtYWRodSIsImdpdmVuX25hbWUiOiJNYWRodXN1ZGhhbiIsImZhbWlseV9uYW1lIjoiQWl0aGFsIiwiZW1haWwiOiJtYWRodUBtYWlsLmNvbSJ9.G8jJroiBgPwC_dQt5dcp3SWUdBS2fYzB7yF8zp6XtpLyZURxQ2g5ByTIg78yFTxFHu-HR0tyAJCt_6EPQtw6amEj-9lzgYfrU546zIsNSuySFNA-EmqomP37IQSc5rdSQ65imTm9bSWMKkb0T24z_-zeYeotu_Sw9ZEOtMtRoq59DTTQ9cyDW_r_3elfKArcNSqghqDPHVkEZrd0fySWcPCy7lvSHIFsO9mFlpB6GdNsWttqjVdAcRX-kUR9tJgDFKZqiKhkqK_PpLY6vxOhk562y7tstH9ebBkkvrRvEKgzsC1gDkDdqgjHIsC0isPfIkDDm2_3dAl_qhr9UnRUOw"
  private options = {
    headers: new HttpHeaders()
      .set('Authorization',  `Bearer `+this.jwtToken)
  }
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
    
    return this.http.get(url, this.options);
  }

  // postRequest(url: string, reqBody: any) {
  //   return this.http.post(url, reqBody);
  // }

  logout() {
    let url: string = "http://localhost:3000/logout"
    return this.http.get(url, this.options);
  }

  addClip(reqBody: any) {
    
    return this.http.post(this.addClipApi, reqBody, this.options);
  }
}
