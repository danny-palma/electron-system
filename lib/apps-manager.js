module.exports = new class Apps_Manager {
    electron = require("electron");
    path = require("path");
    appObject = require("./app-object");
    excuteApp(id){
        console.log(__dirname);
        // if (typeof this.electron == "string") {
        //     throw new Error("please execute this function with electron cli");
        // };
        // let pathregistry;
        // let pathsources;
        // let pathElectronBin;
        // if (this.electron.app.isPackaged) {
        //     pathregistry = this.path.resolve("./resources/app/sources/registry/installed-apps.json");
        //     pathsources = this.path.resolve("./resources/app/sources");
        //     pathElectronBin = this.path.resolve("./resouces/app/node_modules/.bin")
        // } else {
        //     pathregistry = this.path.resolve("../sources/registry/installed-apps.json");
        //     pathsources = this.path.resolve("../sources");
        //     pathElectronBin = this.path.resolve("../node_modules/.bin")
        // };
        // let installedApps = JSON.parse(readFileSync(pathregistry, "utf-8").toString());
        // let targetApp = installedApps.apps.find((value) => value.id == id);
        // try {
        //     logOnRegistry("INFO", `initialization of app: ${targetApp.name}`);
        //     let fileExecuted = spawn(`${pathElectronBin}${pathstep}electron ${this.path.resolve(pathsources + targetApp.main_route)}`, {
        //         cwd: pathsources,
        //         env: process.env
        //     });
            
        //     fileExecuted.stdout.on('data', (data) => {
        //         logOnRegistry("INFO", `stdout: ${data}`);
        //     });

        //     fileExecuted.stderr.on('data', (data) => {
        //         logOnRegistry("ERROR", `stderr: ${data}`);
        //     });

        //     fileExecuted.on("exit", (code) => {
        //         logOnRegistry("INFO", `child process (${targetApp.name}) exited with code ${code}\n\n`);
        //     });

        // } catch (err) {
        //     logOnRegistry("ERROR", err);
        // }
    }
}();
