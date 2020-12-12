module.exports = class fileExplorer {
    static main() {
        function fileExplorerUpdateFolder(path = '/') {
            let folders = [];
            fs.readdirSync(`${globalInfoSystemObject.ROOT_ROUTE}${path}`).map((value) => {
                folders.push(value);
            })
            return hbs.compile(fs.readFileSync(`${__dirname}/index.hbs`).toString())({
                folders
            });
        };
        loadWindowWithString(
            fileExplorerUpdateFolder(),
            720,
            480,
            'file explorer',
            '/apps/fileExplorer/images/icon-file-explorer.png'
        );
        require('./updateexplorer');
    }
};
