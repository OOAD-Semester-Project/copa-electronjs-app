
import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpService } from '../http.service';
import { ClipboardData } from '../clipboard.interface';
import { SocketService } from '../socket.service';
import { DialogOverviewComponent } from '../dialog-overview/dialog-overview.component';
import { Clipboard } from '@angular/cdk/clipboard';
import { CommentStmt } from '@angular/compiler';

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'app-desktop-clipboard-card',
    templateUrl: './desktop-clipboard-card.component.html',
    styleUrls: ['./desktop-clipboard-card.component.css']
})
export class DesktopClipboardCardComponent implements OnInit{
  clipboardDataArr: ClipboardData[];
  data: ClipboardData;

  constructor(public dialog: MatDialog, 
    private httpService: HttpService,
    private socketService: SocketService) {
  }

  addToClipboardArr(data: ClipboardData) {
    if(data != undefined) {
      if (data["from"] == "mobile"){
        return
      }
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
  ngOnInit(): void {
    this.httpService.getAllClips().subscribe((data: ClipboardData[]) => {
      console.log("Data: ", data);
      if(data.length != 0){
        this.clipboardDataArr = data.filter(i => i.from === "desktop");
        this.clipboardDataArr.forEach(data => {
          // data["timestamp"] = new Date(data["timestamp"])
          if(data["clipboardText"].length>=30) {
            data["displayMessage"] = data["clipboardText"].split(" ").slice(0,6)+"......"
          } else {
            data["displayMessage"] = data["clipboardText"]
          }
        });      
        this.clipboardDataArr.sort((a, b) => +a.timestamp > +b.timestamp ? -1 : 1) 
      }       
    });
    
    this.socketService.getClips().subscribe((data: ClipboardData) => {
      this.addToClipboardArr(data);
    })
  }
  
  openDialog(data): void {    
    const dialogRef = this.dialog.open(DialogOverviewComponent, {
      width: '550px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

}

// @Component({
//   selector: 'dialog-overview-example-dialog',
//   templateUrl: 'dialog-overview-example-dialog.html',
// })
// export class DialogOverviewExampleDialog {

//   constructor(
//     public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: ClipboardData) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

// }


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
