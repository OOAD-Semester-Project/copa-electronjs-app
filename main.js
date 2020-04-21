// // In this file you can include the rest of your app's specific main process
// // code. You can also put them in separate files and require them here.


const { clipboard, ipcMain} = require('electron')
const {app, BrowserWindow} = require('electron')

// import { app, BrowserWindow, ipcMain, IpcMessageEvent } from 'electron';
// const socketUrl = "http://localhost:3000/"
// const socket = require('socket.io-client')(socketUrl);

// socket.on('connect', function(){
//   console.log("Socket connected");
// });
ipcMain.on('newData', (data) => {
  console.log("newData event happened");
  clipboard.writeText(data["clipboardText"]);
  // event.sender.send('pong');
});
const url = require("url");
const path = require("path");
const { net } = require('electron')

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
  // socket.on('newData', function(data){
  //   console.log("New data arrived: ", data);
  //   clipboard.writeText(data["clipboardText"]);
  //   // ipcMain.send(data, "pong");
  //   // mainWindow.webContents.send("pong", data);
  // });

  setInterval(function(){ 
    let text = clipboard.readText();
    let timestamp = Date.now();
    if(text !== previousText) { 
      previousText = text;
      console.log("Text: "+text);
      
      let token = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJMX3dTaUlMdG9Ob0lFSWpCdkxnQlFoNFNWa2k5bnU5UEhhX0xYdHREYWxnIn0.eyJqdGkiOiJjMDUxNzYwZi0wMTIzLTQ5Y2EtOWFiYy1iODE5NDJlNTg2YTQiLCJleHAiOjE1ODc0NzE5OTEsIm5iZiI6MCwiaWF0IjoxNTg3NDM1OTkxLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvYXV0aC9yZWFsbXMvY29wYSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJiMTVjZDYxZC0wODBiLTRmYWUtOTk0NC0yM2Y3NzlhZWQ2ZWEiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJjbGlwYm9hcmQtc2VydmVyIiwiYXV0aF90aW1lIjowLCJzZXNzaW9uX3N0YXRlIjoiYWY5YjcwMGUtNTYwMC00YTg0LTg0MWItZDIxNTYzMjBmZDU3IiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwOi8vbG9jYWxob3N0OjMwMDAiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsIm5hbWUiOiJNYWRodXN1ZGhhbiBBaXRoYWwiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJtYWRodSIsImdpdmVuX25hbWUiOiJNYWRodXN1ZGhhbiIsImZhbWlseV9uYW1lIjoiQWl0aGFsIiwiZW1haWwiOiJtYWRodUBtYWlsLmNvbSJ9.LjXrdrEGYKS6JBe0LTTxI_lIq25hCIJuRA_Xq00Pb6EQuPZT0vcxi80vA3Seo7gf1ky55XdTpsKRA0XnfrIJRbIs7Xbr18sEIe7gt0-GhdCcDkdbWV9e9TwXFWgvbYJWzGnFPAI4bSyalf5PfwJClNFqmrgEGvB3R_A81AuuCZ_jg7SjnJ2Z39__yi5-zEP9LxUsyfsK3qFRnHJklZGN6RZNDY1mBEyXxUsz1Rox0VjdWWKR3ogHawifu2EOEBGYhTc3YhlxxJsXIZZv-Y0QVwOjEwNVyM7kNcdwVbj5I9YjfABYBe8jTQzEyzwc9npT7KlyeIXjSXT6heb8G8MeaA";
      let userId = "madhu"
      let clipboardData = {
        timestamp: timestamp,
        clipboardText: text,
        userId: userId,
        fromType: "desktop",
        from: "desktop1"          
      }
      let options = {
        method: "POST",
        url: "http://localhost:3000/addClip",
        headers: {
          Authorization: "Bearer "+token
        }, 
        body: clipboardData
      }
      const request = net.request(options);
      
      request.on('response', (response) => {
        console.log(`STATUS: ${response.statusCode}`)
        console.log(`HEADERS: ${JSON.stringify(response.headers)}`)
        response.on('data', (chunk) => {
          console.log(`BODY: ${chunk}`)
        })
        response.on('end', () => {
          console.log('No more data in response.')
        })
      })
      request.end();
      // socket.emit("desktopClient", clipboardData);
      // mainWindow.webContents.send("newClipboardTextFromElectron", clipboardData);
      // socket.emit("mobileClient", clipboardData);
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

