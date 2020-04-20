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
  private jwtToken: string = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJMX3dTaUlMdG9Ob0lFSWpCdkxnQlFoNFNWa2k5bnU5UEhhX0xYdHREYWxnIn0.eyJqdGkiOiIyNDk5YzllOS0yOTg1LTQyM2YtOGFmMC1lOTM4NDM1Y2YzNDEiLCJleHAiOjE1ODc0NDU2MDMsIm5iZiI6MCwiaWF0IjoxNTg3NDA5NjAzLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvYXV0aC9yZWFsbXMvY29wYSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiI3ZmUzNDgyMS03OWQ3LTRlYzEtYTEzZC02YWM5NjRhM2U5NGYiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJjbGlwYm9hcmQtc2VydmVyIiwiYXV0aF90aW1lIjowLCJzZXNzaW9uX3N0YXRlIjoiYjM3YTU0NjAtYjQ1Ny00NzM2LWIxYmItMTUxMTk5YzEzOWMyIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwOi8vbG9jYWxob3N0OjMwMDAiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6Ik1hZGh1c3VkaGFuIEFpdGhhbCIsInByZWZlcnJlZF91c2VybmFtZSI6Im1hZGh1YWl0aGFsIiwiZ2l2ZW5fbmFtZSI6Ik1hZGh1c3VkaGFuIiwiZmFtaWx5X25hbWUiOiJBaXRoYWwiLCJlbWFpbCI6Im1hZGh1YWl0aGFsQG1haWwuY29tIn0.eC5eDRbEu7kAvLWpCGNjN86klS6P7IRBVq-xmODP-1SURAMYN-9EbJf8kzyQtNNVlWN6TZLunXdAwKWPPlSH884qewoD6HgpOv9F0NB27kNmontAPNkD-ImN5eBl6g9KDiUbVo7HxWVnAVR2IXlpVajfYfVwTmDw7bxxV-UJTMU4tFRXbqQ504dN7GOZkCah5KOCvXiSJ6msRLmrutRDok7dZnPkw7BbFphuxqRqy5ITw6Uj_3iiUDt0o1EZT9nAkhojCjcD-d9smyP0GAatQgvNl6KusOQ4u-j62XbdjffWmHYVwA34TcSBDm-JXI3q6HP5xTXw12uytS4z-oHoqA"

  constructor(private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute) {}

  // getRequest() {
  //   let url: string = "http://localhost:3000/clips/"+;
  //   return this.http.get(url);
  // }

  getAllClips() {
    let userId = "adam@gmail.com";
    let url: string = this.getAllClipsApi+userId;    
    let options = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer `+this.jwtToken)
    }
    return this.http.get(url, options);
  }

  postRequest(url: string, reqBody: any) {
    return this.http.post(url, reqBody);
  }
}
