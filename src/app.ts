import { BrowserWindow, BrowserWindowConstructorOptions, App, app } from 'electron';

export default class Main {
    public window: BrowserWindow | undefined;
    public app: App = app;
    constructor(args: BrowserWindowConstructorOptions, urlToLoad: string) {
        const load = () => {
            this.window = new BrowserWindow(args);
            this.window.loadURL(urlToLoad);
        };
        if (this.app.isReady()) {
            load()
        } else {
            this.app.on('ready', load)
        };
        this.listeners();
    };
    private listeners() {
        this.app.on('window-all-closed', () => {
            console.log('goodbye :D')
            this.app.quit();
        });
    }
};
