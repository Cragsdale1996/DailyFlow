// Initial Declarations

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

// Helpers

function createWindow() {

  mainWindow = new BrowserWindow({
    width:          2560,
    height:         1600,
    titleBarStyle:  "hidden",
    webPreferences: { nodeIntegration: true }
  });

  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);

  if (isDev) {
    // Open the DevTools
    // mainWindow.webContents.openDevTools();
  }

  mainWindow.on('closed', () => mainWindow = null);

}

// Electron Callbacks (Main Functions)

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});