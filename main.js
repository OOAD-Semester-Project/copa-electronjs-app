// // In this file you can include the rest of your app's specific main process
// // code. You can also put them in separate files and require them here.


const { clipboard, ipcMain} = require('electron')
const {app, BrowserWindow} = require('electron')

// import { app, BrowserWindow, ipcMain, IpcMessageEvent } from 'electron';
const socketUrl = "http://localhost:3000/"
const socket = require('socket.io-client')(socketUrl);

socket.on('connect', function(){
  console.log("Socket connected");
});
// ipcMain.on('ping', (event) => {
//   console.log("ping event happened");
//   event.sender.send('pong');
// });
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
  socket.on('newData', function(data){
    console.log("New data arrived: ", data);
    clipboard.writeText(data["clipboardText"]);
    // ipcMain.send(data, "pong");
    // mainWindow.webContents.send("pong", data);
  });

  setInterval(function(){ 
    let text = clipboard.readText();
    let timestamp = Date.now();
    if(text !== previousText) { 
      previousText = text;
      console.log("Text: "+text);
      let clipboardData = {
        timestamp: timestamp,
        clipboardText: text,
        userId: "adam@gmail.com",
        // from: "desktop"
        from: "mobile"
      }
      // socket.emit("desktopClient", clipboardData);
      socket.emit("mobileClient", clipboardData);
    } else {
      previousText = text;
    }
  }, 100);

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  })

  // mainWindow.minimize()

}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})

