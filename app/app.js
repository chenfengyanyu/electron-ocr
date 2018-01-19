/* eslint-disable */
import { app, BrowserWindow, Menu, ipcMain, ipcRenderer, globalShortcut, dialog, clipboard } from 'electron';
// const globalShortcut = require('electron').;
// const dialog = require('electron').;
const path = require('path');
const url = require('url');

let mainWindow;
const isDevelopment = true;

if (isDevelopment) {
  /* eslint-disable */
  require('electron-reload')(__dirname, {
    electron: require('${__dirname}/../../node_modules/electron'),
    ignored: /node_modules|[\/\\]\./
  });
}

function createWindow() {
  mainWindow = new BrowserWindow({ width: 800, height: 600, resizable: true });

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, './index.html'),
    protocol: 'file:',
    slashes: true,
    icon: 'image/icon.png',
  }));

  // if (isDevelopment) {
  //   mainWindow.webContents.openDevTools();
  // }

  mainWindow.on('closed', function () {
    mainWindow = null;
  })
}

app.on('ready', function() {
  createWindow();

  // 注册 'command+c' 按键监听
  // let ret = globalShortcut.register('command+c', function() {
    // clipboard.writeText('Hello Jartto!');
    // dialog.showErrorBox('Electron-OCR', '识别文本已复制！');
  // })

  // if (!ret) {
    // dialog.showErrorBox('Electron-OCR', 'registration failed');
  // }
})

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

// app.on('will-quit', function() {
//   // Unregister a shortcut.
//   globalShortcut.unregister('command+c');

//   // Unregister all shortcuts.
//   globalShortcut.unregisterAll();
// });