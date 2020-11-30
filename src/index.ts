import { join } from "path";
import { existsSync, writeFileSync,  } from "fs";
// verification of registry
if (!existsSync(join(__dirname, '../sources/registry/initial-config.json'))) {
    writeFileSync(join(__dirname, '../sources/registry/initial-config.json'), JSON.stringify({
        'full-screen': false
    }));
};
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
    }
}, join(__dirname, '/../sources/apps/native/desktop/index.html'));
