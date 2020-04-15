// // In this file you can include the rest of your app's specific main process
// // code. You can also put them in separate files and require them here.


const { clipboard, session } = require('electron')
const socketUrl = "http://localhost:3000/"
const socket = require('socket.io-client')(socketUrl);

socket.on('connect', function(){
  console.log("Socket connected");
});
const {app, BrowserWindow} = require('electron')
    const url = require("url");
    const path = require("path");

    let mainWindow;
    let previousText = "";

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

      setInterval(function(){ 
        text = clipboard.readText();
        let timestamp = Date.now();
        if(text !== previousText) { 
          previousText = text;
          console.log("Text: "+text);
          clipboardData = {
            timestamp: timestamp,
            clipboardText: text,
            userId: "adam@gmail.com",
            from: "desktop"
          }
          socket.emit("desktopClient", clipboardData);
        } else {
          previousText = text;
        }
      }, 100);

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

