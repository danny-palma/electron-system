module.exports = class logger {
    /* let */ fs = require("fs");
    /* let */ path = require("path");
    /**
     * create the object
     * @param {string} filePath the path to the file
     */
    constructor(filePath) {
        this.filePath = filePath;
    }
    /**
     * 
     * @param {"ERROR" | "INFO" | "WARNING" | "LOG"} type 
     * @param  {...any} data 
     */
    log(type, ...data) {
        if (!this.fs.existsSync(this.path.resolve(this.filePath))) {
            this.fs.writeFileSync(this.path.resolve(this.filePath), " ");
        };
        let executionFile = this.fs.readFileSync(this.path.resolve(this.filePath)).toString();
        let date = `${new Date().toLocaleDateString()} ${new Date().getHours()}:${new Date().getMinutes() < 10
            ? "0" + new Date().getMinutes() : new Date().getMinutes()}:${new Date().getSeconds() < 10
                ? "0" + new Date().getSeconds() : new Date().getSeconds()}`;
        executionFile = `${executionFile}\n${type} ${date} ${data.join("\n")}`;
        this.fs.writeFileSync(this.path.resolve(this.filePath), executionFile);
    }
}
