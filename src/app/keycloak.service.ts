import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
declare var Keycloak: any;

// This class is for keycloak service which has APIs for authenticating users
@Injectable({
  providedIn: 'root'
})
export class KeycloakService {

  constructor() { 
  }

  private keycloakAuth: any;
  init(): Promise<any> {
  return new Promise((resolve, reject) => {      
      this.keycloakAuth = new Keycloak(environment.keycloak);
      this.keycloakAuth.init({ 
        onLoad: 'login-required', 
      })
        .success((authenticated) => {
          console.log("user authenticated", authenticated);          
          resolve();          
        })
        .error(() => {
          reject();
        });
      });
  }

  // get the access token
  getToken(): string {
    return this.keycloakAuth.token;
  }

  // Perform the logout operation
  logout(): void {
    return this.keycloakAuth.logout();
  }
}
