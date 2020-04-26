import { Injectable } from '@angular/core';
// import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { Socket } from 'ngx-socket-io';
import { KeycloakService } from 'keycloak-angular';
// import * as io from 'socket.io-client';
// import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';



@Injectable({
  providedIn: 'root'
})
export class SocketService {  

  constructor(
    private socket: Socket,
    private keycloakAngular: KeycloakService
  ) {    
    this.socket.emit("join", {token: this.keycloakAngular.getKeycloakInstance().token});
   }

  getClips() {
      return this.socket
          .fromEvent("newData");
  }
}
