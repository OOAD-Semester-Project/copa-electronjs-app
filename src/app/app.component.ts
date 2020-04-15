import { Component } from '@angular/core';
import { IpcService } from './ipc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'copa-electron';

  constructor(private readonly _ipc: IpcService) {
    this._ipc.on('pong', (event: Electron.IpcMessageEvent) => {
      console.log('pong');
    });

    this._ipc.send('ping');
  }
}
