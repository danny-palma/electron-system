module.exports = class fileExplorer {
    static get main() {
        return (...args) => {
            function fileExplorerUpdateFolder(path = '/') {
                let folders = [1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
                fs.readdirSync(`${globalObject.ROOT_ROUTE}${path}`).map((value) => {
                    folders.push(value);
                })
                return hbs.compile(fs.readFileSync(`${__dirname}/index.hbs`).toString())({
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
            require('./updateexplorer');
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
