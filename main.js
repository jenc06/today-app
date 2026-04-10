const { app, BrowserWindow } = require('electron');
const path = require('path');

app.setPath('userData', path.join(app.getPath('home'), '.today-app-data'));

function createWindow() {
  const win = new BrowserWindow({
    width: 780,
    height: 900,
    titleBarStyle: 'hiddenInset',
    backgroundColor: '#F0EBE1',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      partition: 'persist:today'
    }
  });
  win.loadFile('today-todo.html');
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
