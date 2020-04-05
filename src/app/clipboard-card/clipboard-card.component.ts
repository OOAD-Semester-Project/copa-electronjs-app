
import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpService } from '../http.service';
import { ClipboardData } from '../clipboard.interface';
import { SocketService } from '../socket.service';
import { DialogOverviewComponent } from '../dialog-overview/dialog-overview.component';

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'app-clipboard-card',
    templateUrl: './clipboard-card.component.html',
    styleUrls: ['./clipboard-card.component.css']
})
export class ClipboardCardComponent {
  clipboardDataArr: ClipboardData[];

  constructor(public dialog: MatDialog, 
    private httpService: HttpService,
    private socketService: SocketService) {
    let url: string = "http://34.94.157.63:3000/clips/adam";
    // let url: string = "http://5e51a1f8f2c0d300147c08e9.mockapi.io/temp-api-3";

    setInterval(() => {
      this.httpService.getRequest().subscribe((data: ClipboardData[]) => {
        // console.log(data);
        this.clipboardDataArr = data.filter(i => i.from === "desktop");
        this.clipboardDataArr.forEach(data => {
          // data["timestamp"] = new Date(data["timestamp"])
          if(data["message"].length>=30) {
            data["displayMessage"] = data["message"].substring(0,30)+"......"
          } else {
            data["displayMessage"] = data["message"]
          }
        })
        this.clipboardDataArr.sort((a, b) => +a.timestamp > +b.timestamp ? -1 : 1)
        
      });
    }, 1000);
    // this.socketService.getHorseData({"a":"b"}).subscribe((data: ClipboardData[]) => {
    //   console.log(data);
    //   // this.clipboardDataArr = data.filter(i => i.from === "mobile");;
    //   // this.clipboardDataArr.forEach(data => {
    //   //   if(data["message"].length>=30) {
    //   //     data["displayMessage"] = data["message"].substring(0,30)+"......"
    //   //   } else {
    //   //     data["displayMessage"] = data["message"]
    //   //   }
    //   // })
    // }, (error) => {
    //   console.error(error);
    // })
    
    
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
