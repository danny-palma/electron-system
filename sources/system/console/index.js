let globalConsole = new class globalConsole {
    constructor() {
        this.moduleCommands = new Map();

        fs.readdirSync(path.join(globalObject.ROOT_ROUTE, '/system/console/modules')).map((value) => {
            let requiredModule = require(path.join(globalObject.ROOT_ROUTE, '/system/console/modules', value));
            console.log(requiredModule);
            this.moduleCommands.set(requiredModule.name, requiredModule);
        });
    }
    /**
     * run command
     * @param {string} cmd command
     */
    run(cmd) {
        cmd.match(/%[a-zA-Z]+%/g)?.map((value) => {
            
        })
    };
}
