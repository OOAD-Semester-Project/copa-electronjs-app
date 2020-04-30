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
import { environment } from 'src/environments/environment';
import { KeycloakService } from './keycloak.service';
import * as jwt_decode from 'jwt-decode';
import { ClipboardData } from './clipboard.interface';
// import { KeycloakService } from 'keycloak-angular';
// import { LOGIN_URL, LOGIN_AUTH } from 'src/app/_constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class HttpService {  
  private getAllClipsApi: string =  environment.clipboardserver.baseUrl + "/clips/"
  private addClipApi: string = environment.clipboardserver.baseUrl+"/addClip/"
  private deleteApi: string = environment.clipboardserver.baseUrl+"/deleteClip/"

  private options;
  constructor(private http: HttpClient,
    protected keycloak: KeycloakService) {
      
    }

  // Function for making a GET request for getting all clips of a user
  getAllClips() {
    let options = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer `+this.keycloak.getToken())
    }
    let decodedToken = jwt_decode(this.keycloak.getToken()); 
    console.log("decoded token: ", decodedToken);
    let userId = decodedToken["preferred_username"];
    let url: string = this.getAllClipsApi+userId;    
    return this.http.get(url, 
        options
      );
  }
  
  // Function for making a POST request to add a new clip to the database
  addClip(reqBody: any) {
    let options = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer `+this.keycloak.getToken())
    }
    return this.http.post(this.addClipApi, reqBody, 
      options
      );
  }

  // Function to make a HTTP DELETE request to delete a clip from the database
  deleteClip(clipData: ClipboardData) {
    let id = clipData._id;
    let options = {
      headers: new HttpHeaders().set('Authorization',  `Bearer `+this.keycloak.getToken()),
      body: {
        "_id": id
      }
    }
    return this.http.delete(this.deleteApi, options);
  }
}
