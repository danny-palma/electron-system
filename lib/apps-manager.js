module.exports = new class Apps_Manager {
    electron = require("electron");
    path = require("path");
    async excuteApp(id){
        let pathregistry;
        let pathsources;
        let pathElectronBin;
        if (this.electron.app.isPackaged) {
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
        let targetApp = installedApps.apps.find((value) => value.id == id);
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
    }
}
