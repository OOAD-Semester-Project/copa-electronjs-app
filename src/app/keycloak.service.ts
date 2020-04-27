import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IpcService } from './ipc.service';
declare var Keycloak: any;

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {

  constructor() { 
  }

  private keycloakAuth: any;
  init(): Promise<any> {
  return new Promise((resolve, reject) => {
      const config = {
        url: 'https://copa-keycloak.herokuapp.com/auth',
        // url: 'http://localhost:8080/auth',
        realm: 'copa',
        clientId: 'angular-client'
      };
      this.keycloakAuth = new Keycloak(config);
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
  getToken(): string {
    return this.keycloakAuth.token;
  }

  logout(): void {
    return this.keycloakAuth.logout();
  }
}
