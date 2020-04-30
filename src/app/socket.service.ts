import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { KeycloakService } from './keycloak.service';

@Injectable({
  providedIn: 'root'
})
export class SocketService {  

  constructor(
    private socket: Socket,
    private keycloakAngular: KeycloakService
  ) {    
    // emit a message on join channel of the socket with the access token to register itself under the given user
    this.socket.emit("join", {token: this.keycloakAngular.getToken()});
   }

  // Listener for the 'newData' event of the socket
  getClips() {
      return this.socket
          .fromEvent("newData");
  }

  // Listener for the 'newDataArrived' event of the socket which will have a new message whenever a user deletes a clip
  listenForNewDataArrived() {
    return this.socket
        .fromEvent("newDataArrived");
  }
}
