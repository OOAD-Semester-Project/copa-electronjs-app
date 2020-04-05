// // In this file you can include the rest of your app's specific main process
// // code. You can also put them in separate files and require them here.


const { clipboard } = require('electron')
// const clipboard = require('electron-clipboard-extended')
const socketUrl = 'ws://34.94.157.63:3000/desktopClient'
const {app, BrowserWindow} = require('electron')
    const url = require("url");
    const path = require("path");

    let mainWindow;
    let previousText = "";

    const WebSocket = require('ws');

    const ws = new WebSocket(socketUrl);

    function createWindow () {
      mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
          nodeIntegration: true,
          // webSecurity: false
        },
        // show: false
      })
      console.log("directory: "+__dirname)
      mainWindow.loadURL(
        
        url.format({          
          pathname: path.join(__dirname, `dist/index.html`),
          protocol: "file:",
          slashes: true
        })
      );
      // ws.open()
      ws.on('open', function open() {
        // ws.send('something');
        
        setInterval(function(){ 
          text = clipboard.readText();
          let timestamp = Date.now();
          if(text !== previousText) { 
            previousText = text;
            console.log("Text: "+text);
            clipboardData = {
              timestamp: timestamp,
              message: text,
              user: "adam",
              from: "desktop"
            }
            ws.send(JSON.stringify(clipboardData));          
          } else {
            previousText = text;
          }
        }, 100);
      });

      ws.on('message', function incoming(data) {
        clipboard.writeText(data);
        console.log("Message from websocket: "+data);
      });

      

      // Open the DevTools.
      mainWindow.webContents.openDevTools()

      mainWindow.on('closed', function () {
        mainWindow = null
      })

      mainWindow.minimize()

    }

    app.on('ready', createWindow)

    app.on('window-all-closed', function () {
      if (process.platform !== 'darwin') app.quit()
    })

    app.on('activate', function () {
      if (mainWindow === null) createWindow()
    })

