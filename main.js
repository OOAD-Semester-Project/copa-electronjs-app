// Not using this file as of now because of the Keycloak integration issue with electron.js

// // In this file you can include the rest of your app's specific main process
// // code. You can also put them in separate files and require them here.


const { clipboard, ipcMain} = require('electron')
const {app, BrowserWindow} = require('electron')

ipcMain.on('newData', (data) => {
  console.log("newData event happened");
  clipboard.writeText(data["clipboardText"]);
});

const url = require("url");
const path = require("path");
const { net } = require('electron')
const baseUrl = "http://clipboard-syncronization-app.appspot.com"
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
    let text = clipboard.readText();
    let timestamp = Date.now();
    if(text !== previousText) { 
      previousText = text;
      console.log("Text: "+text);
      
      let token = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJQcHZzeVdqVHBQZ2JmVmJrNXhpbXI0aGxEczJYZlB0cFQ2elE1VTg3UzFrIn0.eyJleHAiOjE1ODc5MjgzOTUsImlhdCI6MTU4NzkyODA5NSwianRpIjoiNzY0OWJhZjEtMjFmOS00NDMwLWI0YTAtYTcyYmU2ZWNhMzNmIiwiaXNzIjoiaHR0cHM6Ly9jb3BhLWtleWNsb2FrLmhlcm9rdWFwcC5jb20vYXV0aC9yZWFsbXMvY29wYSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJiYzc4YmY3MC0yZjVhLTQxNWUtOWJhZi05Y2VhZWI5NjM5MjMiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJjbGlwYm9hcmQtc2VydmVyIiwic2Vzc2lvbl9zdGF0ZSI6Ijk0ZGYxYTk4LTY0Y2MtNGE4NC04MTRiLThmNjQ3YzdkOTA4YSIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2NsaXBib2FyZC1zeW5jcm9uaXphdGlvbi1hcHAuYXBwc3BvdC5jb20vKiIsImh0dHA6Ly9sb2NhbGhvc3Q6NDIwMC8qIiwiaHR0cDovL2xvY2FsaG9zdDozMDAwLyJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6Ik1hZGh1IEFpdGhhbCIsInByZWZlcnJlZF91c2VybmFtZSI6Im1hZGh1IiwiZ2l2ZW5fbmFtZSI6Ik1hZGh1IiwiZmFtaWx5X25hbWUiOiJBaXRoYWwiLCJlbWFpbCI6Im1hZGh1QG1haWwuY29tIn0.e6AmkW0AsOm-mmX14zJ23HkQBjR17yIKCKM8HnuOPwXAdiWRkppV3WphErVOWVE66jXjdTBvVoMKtPPAVQKhkY4CW6_opBSontzfY3TkVupr1kQQMR4OgXj6EQjnQxJWMdQk2c2ZHeWfN276rnQVt-ghH3K-6g21EwSEHZWI9Qw8JnSHGJFEDTqqTy0nIU1Yekn3aE2kaVPRm9CFd9KeZm7FpJEg_yy_kufNdQvACbce08_1aW3NjfNsPpUaoMg_5XZoSf-Ppwo_f_5W4DfY10uisgrnTy4Yms62PW42Q1ZU_oUVyVdy2XlvcX--HKxZOEy-0UihToT2EOqaNMkXSQ";
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
        url: baseUrl+"/addClip",
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
      
    } else {
      previousText = text;
    }
  }, 100);

  // Open the DevTools.
  mainWindow.webContents.openDevTools()
  console.log("URL: ", mainWindow.webContents);
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

