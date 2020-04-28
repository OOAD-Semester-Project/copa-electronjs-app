import { Component, OnInit } from '@angular/core';
import { IpcService } from './ipc.service';
import { HttpService } from './http.service';
import { ClipboardData } from './clipboard.interface';
import { SocketService } from './socket.service';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'copa-electron';
  clipboardDataArr: ClipboardData[] = [];
  mobileClipboardDataArr: ClipboardData[] = [];
  desktopClipboardDataArr: ClipboardData[] = [];
  timeout: any;

  constructor(private readonly _ipc: IpcService,
    private httpService: HttpService,
    private socketService: SocketService) {  }

  addToClipboardArr(data: ClipboardData) {
    
    if(data != undefined) {
      let date = new Date(Number(data["timestamp"]));
      data["displayDate"] = date;
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

  ngOnInit(): void {
    this.httpService.getAllClips().subscribe((data: any) => {
      console.log(data);      
      data.forEach((d: ClipboardData) => {
        this.addToClipboardArr(d);
      })      
    });
    

    this.socketService.getClips().subscribe((data: ClipboardData) => {
      console.log("New data in mobile component: ", data);
      // this.addToClipboardArr(data);
      this.clipboardDataArr = [];
      this.desktopClipboardDataArr = [];
      this.mobileClipboardDataArr = [];
      this.httpService.getAllClips().subscribe((data: any) => {
        console.log(data);      
        data.forEach((d: ClipboardData) => {
          this.addToClipboardArr(d);
        });
        this.desktopClipboardDataArr.sort((a, b) => +a.timestamp > +b.timestamp ? -1 : 1) 
        this.mobileClipboardDataArr.sort((a, b) => +a.timestamp > +b.timestamp ? -1 : 1) 
        
      });
      this._ipc.send('newData', data);
    })

    this.socketService.listenForNewDataArrived().subscribe((data: ClipboardData) => {
      console.log("New data in mobile component: ", data);
      // this.addToClipboardArr(data);
      this.clipboardDataArr = [];
      this.desktopClipboardDataArr = [];
      this.mobileClipboardDataArr = [];
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
      // this._ipc.send('newData', data);
    })
  }
}
