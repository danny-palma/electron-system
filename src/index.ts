import { join } from "path";
import { existsSync, writeFileSync } from "fs";
// verification of registry
if (!existsSync(join(__dirname, '../sources/registry/initial-config.json'))) {
    writeFileSync(join(__dirname, '../sources/registry/initial-config.json'), JSON.stringify({
        'full-screen': false
    }));
};
if (!existsSync(join(__dirname, '../sources/registry/installed-apps.json'))) {
    writeFileSync(join(__dirname, '../sources/registry/installed-apps.json'), JSON.stringify({
        apps: [
            {
                name: 'File Explorer',
                icon_route: '/apps/FileExplorer/images/icon-file-explorer.png',
                main_route: '/apps/FileExplorer/index.js',
                id: '001'
            },
            {
                name: 'Internet',
                icon_route: '/apps/navegador/images/icon-explorer.png',
                main_route: '/apps/navegador/main.js',
                id: '002'
            }
        ]
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
}, join(__dirname, '/../sources/system/desktop/index.html'));
