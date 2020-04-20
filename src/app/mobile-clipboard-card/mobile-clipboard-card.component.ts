
import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpService } from '../http.service';
import { ClipboardData } from '../clipboard.interface';
import { SocketService } from '../socket.service';
import { DialogOverviewComponent } from '../dialog-overview/dialog-overview.component';
// import { url } from 'inspector';

/**
 * @title Dialog Overview
 */
@Component({
    selector: 'app-mobile-clipboard-card',
    templateUrl: './mobile-clipboard-card.component.html',
    styleUrls: ['./mobile-clipboard-card.component.css']
})
export class MobileClipboardCardComponent implements OnInit{
  clipboardDataArr: ClipboardData[] = [];
  constructor(public dialog: MatDialog, 
  private httpService: HttpService, 
  private socketService: SocketService) { }

  addToClipboardArr(data: ClipboardData) {
    if(data != undefined) {
      if (data["fromType"] !== "desktop"){
        if(data["clipboardText"].length>=30) {
          data["displayMessage"] = data["clipboardText"].split(" ").slice(0,6)+"......"
          } else {
          data["displayMessage"] = data["clipboardText"]
          }
          console.log("Desktop component: ", data);
          this.clipboardDataArr.push(data);
          this.clipboardDataArr.sort((a, b) => +a.timestamp > +b.timestamp ? -1 : 1) 
      }      
    }
  }

  ngOnInit(): void {
    this.httpService.getAllClips().subscribe((data: ClipboardData[]) => {
      console.log(data);
      // if(data.length != 0){
      // this.clipboardDataArr = data.filter(i => i.from === "mobile");
      // this.clipboardDataArr.forEach(data => {
      //     // data["timestamp"] = new Date(data["timestamp"])
      //     if(data["clipboardText"].length>=30) {
      //     data["displayMessage"] = data["clipboardText"].split(" ").slice(0,6)+"......"
      //     } else {
      //     data["displayMessage"] = data["clipboardText"]
      //     }
      // });      
      // this.clipboardDataArr.sort((a, b) => +a.timestamp > +b.timestamp ? -1 : 1) 
      // }     
      data.forEach((d: ClipboardData) => {
        this.addToClipboardArr(d);
      })
      
    });

    this.socketService.getClips().subscribe((data: ClipboardData) => {
      console.log("New data in mobile component: ", data);
      this.addToClipboardArr(data);
    })
  }

  openDialog(data): void {
  const dialogRef = this.dialog.open(DialogOverviewComponent, {
    width: '350px',
    data: data
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
  }

}

/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
