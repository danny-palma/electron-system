const hbs = require('handlebars');

function loadWindowWithPath(htmlPath, width, height, appName, iconPath) {
    let divDesktop = document.getElementById('desktop-for-windows');
    let extname = path.extname(htmlPath);
    if (!extname || extname != '.html') {
        throw 'the extname file is not html';
    };
    htmlPath = path.join(globalInfoSystemObject.ROOT_ROUTE, htmlPath);
    if (!fs.existsSync(htmlPath)) {
        throw 'the file noesn\'t exists';
    };
    const principalWindow = fs.readFileSync(path.join(globalInfoSystemObject.ROOT_ROUTE, '/system/windows/principal.hbs')).toString();
    if(iconPath) iconPath = path.join(globalInfoSystemObject.ROOT_ROUTE, iconPath);
    divDesktop.insertAdjacentHTML('afterbegin', hbs.compile(principalWindow)({
        body: fs.readFileSync(htmlPath).toString(),
        width,
        height,
        appName,
        iconPath
    }));
}
function loadWindowWithString(string, width, height, appName, iconPath) {
    let divDesktop = document.getElementById('desktop-for-windows');
    const principalWindow = fs.readFileSync(path.join(globalInfoSystemObject.ROOT_ROUTE, '/system/windows/principal.hbs')).toString();
    if(iconPath) iconPath = path.join(globalInfoSystemObject.ROOT_ROUTE, iconPath);
    divDesktop.insertAdjacentHTML('afterbegin', hbs.compile(principalWindow)({
        body: string,
        width,
        height,
        appName,
        iconPath
    }));
}

