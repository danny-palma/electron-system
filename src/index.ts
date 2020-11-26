import { app, BrowserWindow } from 'electron';
import Main from './app';
import { join } from "path";

new Main({
    darkTheme: false,
    titleBarStyle: "hidden",
    height: 720,
    width: 1280,
    resizable: false,
    frame: true,
    fullscreen: true,
    webPreferences: {
        nodeIntegration: true
    }
}, join(__dirname, '/../sources/apps/native/desktop/index.html'));
