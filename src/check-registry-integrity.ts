import { join } from "path";
import { existsSync, writeFileSync, mkdirSync } from "fs";
// verification of registry
if (!existsSync(join(__dirname, "../sources/registry"))) {
    mkdirSync(join(__dirname, "../sources/registry"));
};
if (!existsSync(join(__dirname, '../sources/registry/initial-config.json'))) {
    writeFileSync(join(__dirname, '../sources/registry/initial-config.json'), JSON.stringify({
        'full-screen': false
    }));
};
if (!existsSync(join(__dirname, "../sources/registry/variables.json"))) {
    writeFileSync(join(__dirname, "../sources/registry/variables.json"), JSON.stringify({
        
    }))
}
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
            },
            {
                name: 'App Installer',
                icon_route: '/apps/app-installer/images/icon.png',
                main_route: '/apps/app-installer/main.js',
                id: '003'
            }
        ]
    }));
};
