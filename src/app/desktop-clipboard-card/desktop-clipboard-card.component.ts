
import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpService } from '../http.service';
import { ClipboardData } from '../clipboard.interface';
import { SocketService } from '../socket.service';
import { DialogOverviewComponent } from '../dialog-overview/dialog-overview.component';
import { Clipboard } from '@angular/cdk/clipboard';
import { CommentStmt } from '@angular/compiler';
import { IpcService } from '../ipc.service';

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'app-desktop-clipboard-card',
    templateUrl: './desktop-clipboard-card.component.html',
    styleUrls: ['./desktop-clipboard-card.component.css']
})
export class DesktopClipboardCardComponent implements OnInit{
  private _clipboardDataArr: ClipboardData[] = [];
  private _data: ClipboardData;

  public get clipboardDataArr(): ClipboardData[] {
    return this._clipboardDataArr;
  }

  constructor(public dialog: MatDialog, 
    private httpService: HttpService,
    private socketService: SocketService,
    private ipcService: IpcService) {
  }

  addToClipboardArr(data: ClipboardData) {
    if(data != undefined) {
      if (data["fromType"] !== "mobile"){
        if(data["clipboardText"].length>=30) {
          data["displayMessage"] = data["clipboardText"].split(" ").slice(0,6)+"......"
        } else {
          data["displayMessage"] = data["clipboardText"]
        }
        console.log("Desktop component: ", data);
        this._clipboardDataArr.push(data);
        this._clipboardDataArr.sort((a, b) => +a.timestamp > +b.timestamp ? -1 : 1) 
      }      
    }
  }
  ngOnInit(): void {
    this.httpService.getAllClips().subscribe((data: any) => {
      console.log("Data: ", data);
      data.forEach((d: ClipboardData) => {
        this.addToClipboardArr(d);
      })      
    });
    
    this.socketService.getClips().subscribe((data: ClipboardData) => {
      console.log("New data in desktop component: ", data);
      this.addToClipboardArr(data);
      this.ipcService.send("newData", data);
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
  
  deleteClip(data: ClipboardData): void {
    this.httpService.deleteClip(data).subscribe((resultData: any) => {
      console.log("delete response: ", resultData);
      this._clipboardDataArr = this._clipboardDataArr.filter(function( obj ) {
        return obj._id !== data._id;
      });
    })
  }
}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
