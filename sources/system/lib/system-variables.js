import { system } from "./system.js";

const fs = require("fs");
const path = require("path");

let globalVariables = new class globalVariables {
    constructor() {
        let fileReaded = JSON.parse(fs.readFileSync(path.join(system.ROOT_ROUTE, 'registry/variables.json'))?.toString());
        this.systemroot = system.ROOT_ROUTE
        Object.keys(fileReaded).map((value) => {
            typeof fileReaded[value] == "string" ? fileReaded[value] = fileReaded[value].replace(/%systemroot%/g, this.systemroot) : null;
            this[value.toLowerCase()] = fileReaded[value];
        });
        Object.freeze(this);
    }
    get registerVariable() {
        return function regiterVariable(key, value) {
            if (!key) throw new Error("the key is undefined")
            if (typeof key != "string") throw new Error(`the type of the key can only are typeof string recived ${typeof key}`);
            if (typeof value == "bigint" ||
                typeof value == "symbol" ||
                typeof value == "function" ||
                value === undefined ||
                value === null) throw new Error(`the type of key can be only are typeof string, boolean, array, object recived ${typeof value}`);
            let fileReaded = JSON.parse(fs.readFileSync(path.join(system.ROOT_ROUTE, 'registry/variables.json'))?.toString());
            fileReaded[key.toLowerCase()] = value;
            fs.writeFileSync(path.join(system.ROOT_ROUTE, 'registry/variables.json'), JSON.stringify(fileReaded));
            return true;
        };
    }
}

export default globalVariables
