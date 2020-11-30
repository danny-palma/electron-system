const fs = require('fs');
const path = require('path');
const ipcRenderer = require('electron').ipcRenderer

const globalInfoSystemObject = new class globalInfoSystemObject {
    TASKBAR_IS_OPEN = false;
    ROOT_ROUTE = path.resolve(path.join(__dirname, '../../../'));
    OPEN_WINDOWS = [];
    /**
     * @param {string} propietyName the name of the propiety
     * @param {any} propiety the value on the propiety
     */
    addPropiety(propietyName, propiety) {
        if (!propietyName || !propiety) throw 'propietyName or propiety was not provided';
        if (typeof propietyName != "string") throw 'the propiety name was not a string';
        if (typeof propiety == "function") throw 'the property cannot be a function';
        console.log(`new propiety! key: ${propietyName}\nvalue: ${propiety}`);
        this[propietyName] = propiety;
    };
};

function shutDown() {
    ipcRenderer.send('shut-down');
}

function reboot() {
    ipcRenderer.send('reboot');
}

function changeFullScreen(type) {
    ipcRenderer.send('change-full-screeen', type);
}
