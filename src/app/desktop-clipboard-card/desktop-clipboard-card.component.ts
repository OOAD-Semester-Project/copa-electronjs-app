
import {Component, Inject, OnInit, Input} from '@angular/core';
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
  @Input() desktopClipboardDataArr: ClipboardData[] = [];

  constructor(public dialog: MatDialog, 
    private httpService: HttpService,
    ) { }

  ngOnInit(): void { 
    
  }
  
  // Callback to be executed when the user clicks on a clipboard card
  openDialog(data): void {    
    const dialogRef = this.dialog.open(DialogOverviewComponent, {
      width: '550px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }
  
  // Callback to make a DELETE HTTP request when user clicks delete button
  deleteClip(data: ClipboardData): void {
    // This makes use of Observer pattern where the httpService is the publisher and 
    // the current class is the subscriber
    this.httpService.deleteClip(data).subscribe((resultData: any) => {
      console.log("delete response: ", resultData);
    })
  }
}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
