import { Injectable } from '@angular/core';
// import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';


@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socketApi: string = "http://localhost:3000/";
  private socket;

  constructor() {
    this.socket = io(this.socketApi);
    this.socket.on("message", function(msg) {
      console.log("Message:", msg);
    })
    this.socket.emit('join', {"userId": "adam@gmail.com"}); 
   }
  
  getClips() {
    let observable = new Observable(observer => {
      this.socket = io(this.socketApi);
      this.socket.on('newData', (data) => {
        console.log("Got new data", data);
        observer.next(data);    
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
  }
}
