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
            let pathregistry: string;
            let pathsources: string;
            let pathElectronBin: string;
            if (this.app.isPackaged) {
                pathregistry = resolve("./resources/app/sources/registry/installed-apps.json");
                pathsources = resolve("./resources/app/sources");
                pathElectronBin = resolve("./resouces/app/node_modules/.bin")
            } else {
                pathregistry = resolve("../sources/registry/installed-apps.json");
                pathsources = resolve("../sources");
                pathElectronBin = resolve("../node_modules/.bin")
            };
            logOnRegistry("INFO", `using paths ${pathsources}`);
            let installedApps = JSON.parse(readFileSync(pathregistry, "utf-8").toString());
            let targetApp = installedApps.apps.find((value: any) => value.id == id);
            try {
                logOnRegistry("INFO", `initialization of app: ${targetApp.name}`);
                let fileExecuted = spawn(`${pathElectronBin}${pathstep}electron ${resolve(pathsources + targetApp.main_route)}`, {
                    cwd: pathsources,
                    env: process.env
                });
                
                fileExecuted.stdout.on('data', (data) => {
                    logOnRegistry("INFO", `stdout: ${data}`);
                });

                fileExecuted.stderr.on('data', (data) => {
                    logOnRegistry("ERROR", `stderr: ${data}`);
                });

                fileExecuted.on("exit", (code) => {
                    logOnRegistry("INFO", `child process (${targetApp.name}) exited with code ${code}\n\n`);
                });

            } catch (err) {
                logOnRegistry("ERROR", err);
            }
            function logOnRegistry(type: string, ...data: string[]) {
                if (!existsSync(resolve(`${pathsources}/registry/executionFile.log`))) writeFileSync(resolve(`${pathsources}/registry/executionFile.log`), " ");
                let executionFile: string = readFileSync(resolve(`${pathsources}/registry/executionFile.log`)).toString();
                executionFile = `${executionFile}\n${type} ${new Date().toLocaleDateString()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds() < 10 ? "0" + new Date().getSeconds() : new Date().getSeconds()} ${data.join("\n")}`;
                writeFileSync(resolve(`${pathsources}/registry/executionFile.log`), executionFile);
            }
        })
    }
};
