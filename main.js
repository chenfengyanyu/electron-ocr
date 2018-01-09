const electron = require('electron')
const {app, BrowserWindow, Menu, ipcMain, ipcRenderer} = electron;

const path = require('path')
const url = require('url')

let mainWindow;
let isDevelopment = true;

if (isDevelopment) {
  require('electron-reload')(__dirname, {
      ignored: /node_modules|[\/\\]\./
  });
}

function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600})

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true,
    icon: 'public/image/icon.png'
  }))

  if (isDevelopment) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on('closed', function () {
    mainWindow = null;
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})