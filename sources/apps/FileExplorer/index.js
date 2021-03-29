const fs = require("fs");
const ejs = require("ejs");
import { showWindow } from "../../system/lib/window-manager.js";

export default class fileExplorer {
    static get main() {
        return (...args) => {
            function fileExplorerUpdateFolder(path = '/') {
                let folders = [1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
                fs.readdirSync(`${global.system.ROOT_ROUTE}${path}`).map((value) => {
                    folders.push(value);
                })
                return ejs.compile(fs.readFileSync(`${global.system.ROOT_ROUTE}/apps/FileExplorer/index.ejs`).toString())({
                    folders
                });
            };
            showWindow({
                type: 'string',
                stringBody: fileExplorerUpdateFolder(),
                width: 720,
                heigth: 480,
                title: 'file explorer',
                icon: '/apps/fileExplorer/images/icon-file-explorer.png'
            });
        }
    }
    static onclose() {
        console.log("app is closed");
    }
    static onminimize() {
        console.log("app is minimized");
    }
    static onmaximized() {
        console.log("app is maximized");
    }
};
