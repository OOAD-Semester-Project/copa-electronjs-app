import { Component, OnInit } from '@angular/core';
import { IpcService } from './ipc.service';
import { HttpService } from './http.service';
import { ClipboardData } from './clipboard.interface';
import { SocketService } from './socket.service';
import { interval, Observable, fromEvent, merge, timer } from 'rxjs';
import { map, debounce } from 'rxjs/operators';
import { KeycloakService } from './keycloak.service';
import * as jwt_decode from 'jwt-decode';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  clipboardDataArr: ClipboardData[] = [];
  mobileClipboardDataArr: ClipboardData[] = [];
  desktopClipboardDataArr: ClipboardData[] = [];
  timeout: any;
  previousText: String = "";
  

  constructor(private readonly _ipc: IpcService,
    private httpService: HttpService,
    private socketService: SocketService,
    private keycloak: KeycloakService) { 
    }

  // Utility function to filter the data for desktop and mobile tabs
  private addToClipboardArr(data: ClipboardData) {    
    if(data != undefined) {
      let date = new Date(Number(data["timestamp"]));
      data["displayDate"] = date.toLocaleString();
      if(data["clipboardText"].length>=30) {
        data["displayMessage"] = data["clipboardText"].split(" ").slice(0,6).join(" ")+"......"
      } else {
        data["displayMessage"] = data["clipboardText"];
      }
      if (data["fromType"] === "desktop"){                
        this.desktopClipboardDataArr.push(data);        
      } else {        
        this.mobileClipboardDataArr.push(data);
      }    
    }
  }

  // Callback for copying a selected text when the user presses Ctrl+C keys
  onKeyPress($event: KeyboardEvent) {
    if(($event.ctrlKey || $event.metaKey) && $event.keyCode == 67) {
      this.getSelectionText();
    }              
  }

  // Function to bind the keypress event with the window object
  // Uses Observer pattern
  private bindKeypressEvent(): Observable<KeyboardEvent> {
      const eventsType$ = [
          fromEvent(window, 'keypress'),
          fromEvent(window, 'keydown')
      ];
      return merge(...eventsType$)
          .pipe(
              debounce(() => timer(10)),
              map(state => (state as KeyboardEvent))
          );
  }

  // Function to get the currently selected text
  getSelectionText(){
    let time = Date.now();
    let selectedText = ""
    if (window.getSelection){ // all modern browsers and IE9+
      selectedText = window.getSelection().toString()
    }
    if(selectedText!=="" && selectedText!==this.previousText) {
      let decodedToken = jwt_decode(this.keycloak.getToken()); 
      let userId = decodedToken["preferred_username"]
      let reqBody: ClipboardData = {
        "timestamp": time,
        "clipboardText": selectedText,
        "from": "desktop1",
        "fromType": "desktop",
        "userId": userId
      };
      this.httpService.addClip(reqBody).subscribe((result: any) => {
        console.log(result);
      })
    }    
  }


  ngOnInit(): void {
    this.bindKeypressEvent().subscribe(($event: KeyboardEvent) => this.onKeyPress($event));
    this.httpService.getAllClips().subscribe((data: any) => {
      console.log(data);      
      data.forEach((d: ClipboardData) => {
        this.addToClipboardArr(d);
      })      
    });
    
    // Subscriber for the socket message sent by the server whenever there is new data
    // This makes use of the Observer pattern where the socketService is the publisher
    this.socketService.getClips().subscribe((data: ClipboardData) => {
      console.log("New data in mobile component: ", data);
      this.clipboardDataArr = [];
      this.desktopClipboardDataArr = [];
      this.mobileClipboardDataArr = [];

      // Observer pattern being used here
      this.httpService.getAllClips().subscribe((data: any) => {
        console.log(data);      
        data.forEach((d: ClipboardData) => {
          this.addToClipboardArr(d);
        });
        this.desktopClipboardDataArr.sort((a, b) => +a.timestamp > +b.timestamp ? -1 : 1) 
        this.mobileClipboardDataArr.sort((a, b) => +a.timestamp > +b.timestamp ? -1 : 1) 
        
      });
    })

    // Subscriber for the socket message sent by the server when the user deletes a clipboard any of their devices
    // This makes use of the Observer pattern where the socketService is the publisher
    this.socketService.listenForNewDataArrived().subscribe((data: ClipboardData) => {
      console.log("New data in mobile component: ", data);
      this.clipboardDataArr = [];
      this.desktopClipboardDataArr = [];
      this.mobileClipboardDataArr = [];

      // Observer pattern being used here
      this.httpService.getAllClips().subscribe((data: any) => {
        console.log(data);      
        data.forEach((d: ClipboardData) => {
          this.addToClipboardArr(d);
        });
        
        this.desktopClipboardDataArr.sort((a, b) => +a.timestamp > +b.timestamp ? -1 : 1) 
        this.mobileClipboardDataArr.sort((a, b) => +a.timestamp > +b.timestamp ? -1 : 1) 
        console.log(this.desktopClipboardDataArr);
        console.log(this.mobileClipboardDataArr);
      });
    })
  }
}
