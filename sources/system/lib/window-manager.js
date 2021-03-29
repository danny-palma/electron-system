import { system } from "./system.js";
const path = require("path");
const fs = require("fs");
const hbs = require('ejs');

// little interface
/**
 * @param {{
        type: 'string' | 'file',
        width: number,
        height: number,
        title: string,
        icon: string,
        htmlPath: string,
        stringBody: string
    }} args0
 */
function showWindow({
    type,
    width,
    height,
    title,
    icon,
    htmlPath,
    stringBody
}) {
    var body;
    let divDesktop = document.getElementById('desktop');
    if (type == 'file') {
        let extname = path.extname(htmlPath);
        if (!extname || extname != '.html') {
            throw new Error('the extname file is not html');
        };
        htmlPath = path.join(system.ROOT_ROUTE, htmlPath);
        if (!fs.existsSync(htmlPath)) {
            throw new Error('the file noesn\'t exists');
        };
        body = fs.readFileSync(htmlPath).toString();
    } else if (type == 'string') {
        body = stringBody;
    } else {
        throw new Error('the type was not provided or is invalid');
    }
    const principalWindow = fs.readFileSync(path.join(system.ROOT_ROUTE, '/system/windows/principal.ejs')).toString();
    if (icon) icon = path.join(system.ROOT_ROUTE, icon);
    system.OPEN_WINDOWS.push({
        id: `${system.OPEN_WINDOWS.length + 1}-window`,
    })
    divDesktop.insertAdjacentHTML('afterbegin', hbs.compile(principalWindow)({
        width: width || 720,
        height: height || 480,
        appName: title || 'app',
        iconPath: icon,
        id: system.OPEN_WINDOWS.length,
        body: body,
    }));
    let appendWindow = document.getElementById(`${system.OPEN_WINDOWS.length}-window`);
    return appendWindow;
}

export default {
    showWindow
}

export {
    showWindow
}
