let logger = require("./registry-logger");
let targetApp = {
    "name": "File Explorer",
    "icon_route": "/apps/FileExplorer/images/icon-file-explorer.png",
    "main_route": "/apps/FileExplorer/index.js",
    "id": "001"
}
module.exports = class app {
    /**
     * @param {targetApp} targetApp
     * @param {1|2|3|4|5} permissions 
     */
    constructor(targetApp, permissions) {
        this.name = targetApp.name;
        this.id = targetApp.id;
        this.permissions = permissions;
        this.logger = new logger(targetApp.main_route);
    };
}
