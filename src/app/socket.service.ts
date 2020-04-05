// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class SocketService {

//   constructor() { }
// }


import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
// import { resolve } from 'path';
// import { reject } from 'q';
// import { HORSE_SOCKET_URL, RACE_SOCKET_URL } from '../_constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  url: string = "http://34.94.157.63:3000/desktopClient";
  constructor(
    // private socket: Socket
    ) { }
    
    async getRaceData() {


      
      return new Promise((resolve, reject) => {
        let ws = new WebSocket(this.url);

        ws.onopen = function() {
          console.log('Websocket connection opened');
          ws.send('Hello, from Websocket client');
        }
        ws.onmessage = function(data) {
          console.log(data);
          resolve(data);
        }  
      })
    }

    getHorseData(reqBody: {}) {
      const simpleObservable = new Observable((observer) => {
          
        // observable execution
        let ws = new WebSocket(this.url);

          ws.onopen = function() {
            console.log('websocket connection opened', reqBody);
            ws.send(JSON.stringify(reqBody));
          }
          
          ws.onmessage = function(data) {
            console.log(" details from socket - ", data);
            // resolve(data);
            observer.next(data)
          }  
        //   observer.next("bla bla bla")

        // observer.complete()
      })

      return simpleObservable;
    }
    
}
