import Main from './app';
import { join } from "path";

new Main({
    darkTheme: false,
    titleBarStyle: "hidden",
    height: 720,
    width: 1280,
    resizable: false,
    frame: false,
    fullscreen: require('../sources/registry/initial-config.json')['full-screen'],
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
    },
    
}, join(__dirname, '/../sources/apps/native/desktop/index.html'));
