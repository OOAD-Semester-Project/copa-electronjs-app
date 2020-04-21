import { Component } from '@angular/core';
import { IpcService } from './ipc.service';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'copa-electron';

  constructor(private readonly _ipc: IpcService,
    private httpService: HttpService) {
      let newData = {}
      // this._ipc.on('newClipboardTextFromElectron', (event: Electron.IpcMessageEvent, data) => {
      //   // console.log('pong');
      //   console.log("app component:  ", event, data);
      //   // newData = data;
      //   this.httpService.addClip({
      //     "clipboardText": data["clipboardText"],
      //     "timestamp": data["timestamp"],
      //     "fromType": "desktop",
      //     "from": "desktop1"
      //   }).subscribe();
      // });
      
      // this._ipc.send('ping');
  }
}
