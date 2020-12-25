const fs = require('fs');
const path = require('path');
const ipcRenderer = require('electron').ipcRenderer

const globalObject = new class SystemInfo {
    TASKBAR_IS_OPEN = false;
    OPEN_WINDOWS = [];

    get ROOT_ROUTE() {
        return path.resolve(path.join(__dirname, '../../'));
    };
    
    /**
     * @param {string} propietyName the name of the propiety
     * @param {any} propiety the value on the propiety
     */
    get addPropiety() {
        return function addPropiety(propietyName, propiety) {
            if (!propietyName || !propiety) throw new Error('propietyName or propiety was not provided');
            if (typeof propietyName != "string") throw new Error('the propiety name was not a string');
            if (typeof propiety == "function") throw new Error('the property cannot be a function');
            console.log(`new propiety! key: ${propietyName}\nvalue: ${propiety}`);
            this[propietyName] = propiety;
        }
    }

    get loadFileFromRoute() {
        return function loadFileFromRoute(route) {
            if (!route) return null;
            return fs.readFileSync(`${globalObject.ROOT_ROUTE}${path.sep}${route}`);
        }
    }

    get readDirFromRoute() {
        return function readDirFromRoute(route = '') {
            return fs.readdirSync(`${globalObject.ROOT_ROUTE}${path.sep}${route}`);
        }
    }

    get saveValueOnRegistry() {
        return function saveValueOnRegistry(key, value) {
            const initialConfig = require('../../registry/initial-config.json');
            initialConfig[key] = value;
            fs.writeFileSync(`${__dirname}../../registry/initial-config.json`, JSON.stringify(initialConfig));
        }
    }

    get initApp() {
        return function initApp(id, ...args) {
            let installedApps = require('../../registry/installed-apps.json').apps;
            let targetApp = installedApps.find(value => value.id == id);
            if (!targetApp) throw new Error(`cannot find the app with this id (${id})`);
            try {
                require(path.join(globalObject.ROOT_ROUTE, targetApp.main_route)).main(args);
            } catch (err) {
                let date = new Date();
                alert(`ERROR: ${err}\n\nApp: ${targetApp.name}\n\nLOG FILE: /registry/ErrorLog-${date.getTime()}.log`);
                fs.writeFileSync(`${globalObject.ROOT_ROUTE}/registry/ErrorLog-${date.getTime()}.log`,
                    `App Error: ${targetApp.name}\nDate: ${date.toTimeString()}\n\nError Details:\n${err}\n\nError Stack:\n${err.stack ? err.stack : null}`)
            };
        }
    }

    get shutDown() {
        return function shutDown() {
            ipcRenderer.send('shut-down');
        };
    }

    get reboot() {
        return function reboot() {
            ipcRenderer.send('reboot');
        }
    }

    get changeFullScreen() {
        return function changeFullScreen(type) {
            if (typeof type == 'boolean') {
                ipcRenderer.send('change-full-screeen', type)
            } else {
                throw new Error(`the type argument musbe type of boolean recived: ${typeof type}`)
            };
        };
    }

};
