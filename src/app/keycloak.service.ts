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
  getToken(): string {
    return this.keycloakAuth.token;
  }

  logout(): void {
    return this.keycloakAuth.logout();
  }
}
