import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClipboardData } from '../clipboard.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'dialog-overview',
  templateUrl: 'dialog-overview.component.html',
})
export class DialogOverviewComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ClipboardData,
    private _snackBar: MatSnackBar) {    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  // Function to get the clipboardText from 'data'
  public get clipboardText(): string {
    return this.data["clipboardText"];
  }

  // Callback to copy the text to clipboard
  copyText(val: string){    
    this._snackBar.open('Copied to clipboard', '', {
      duration: 1500
    });

    let selBox = document.createElement('textarea');
      selBox.style.position = 'fixed';
      selBox.style.left = '0';
      selBox.style.top = '0';
      selBox.style.opacity = '0';
      selBox.value = val;
      document.body.appendChild(selBox);
      selBox.focus();
      selBox.select();
      document.execCommand('copy');
      document.body.removeChild(selBox);
    }
}