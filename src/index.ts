import { app, BrowserWindow } from 'electron';
import Main from './app';
import { join } from "path";
import { readFileSync } from "fs";

new Main({
    darkTheme: false,
    titleBarStyle: "hidden",
    height: 720,
    width: 1280,
    resizable: false,
    frame: true,
    fullscreen: require('../sources/registry/initial-config.json')['full-screen'],
    webPreferences: {
        nodeIntegration: true
    }
}, join(__dirname, '/../sources/apps/native/desktop/index.html'));
