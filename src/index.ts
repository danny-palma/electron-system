import("./check-registry-integrity");
import { join } from "path";

import Main from './app';

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
    show: false
}, join(__dirname, '/../sources/system/desktop/index.html'));
