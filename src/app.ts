import { BrowserWindow, BrowserWindowConstructorOptions, App, app, ipcMain } from 'electron';
import { resolve, sep as pathstep } from "path";
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { spawn,exec,spawnSync,execFile } from "child_process";
import saveValue from "./save-value-on-registry";

export default class Main {
    public window: BrowserWindow | undefined;
    public app: App = app;
    constructor(args: BrowserWindowConstructorOptions, urlToLoad: string) {
        const load = () => {
            this.window = new BrowserWindow(args);
            this.window.loadURL(urlToLoad);
            this.window.once("ready-to-show", () => {
                this.window?.show();
            })
        };
        if (this.app.isReady()) {
            load()
        } else {
            this.app.on('ready', load)
        };
        console.log(app.getPath("appData"));
        this.listeners();
        this.ipcListeners();
    };
    private listeners() {
        this.app.on('window-all-closed', () => {
            console.log('goodbye :D')
            this.app.quit();
        });
    }
    private ipcListeners() {
        ipcMain.on('shut-down', () => {
            this.app.exit();
        });
        ipcMain.on('reboot', () => {
            this.app.relaunch();
            this.app.quit();
        });
        ipcMain.on('change-full-screeen', (ev, ...args) => {
            this.window?.setFullScreen(args[0]);
            saveValue('full-screen', args[0])
        });
        ipcMain.on("init-app", (ev, id, ...args) => {
            console.log(__dirname);
        })
    }
};
