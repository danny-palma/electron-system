import { BrowserWindow, BrowserWindowConstructorOptions, App, app } from 'electron';

export default class Main {
    public window: BrowserWindow | undefined;
    public app: App = app;
    constructor(args: BrowserWindowConstructorOptions, urlToLoad: string) {
        const load = () => {
            this.window = new BrowserWindow(args);
            this.window.loadURL(urlToLoad);
        };
        if (app.isReady()) {
            load()
        } else {
            app.on('ready', load)
        };
        this.listeners();
    };
    private listeners() {
        app.on('window-all-closed', () => {
            console.log('goodbye :D')
            app.quit();
        });
    }
};
