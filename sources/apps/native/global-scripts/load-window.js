const hbs = require('handlebars');

function loadWindow(htmlPath, width, height, appName) {
    let divDesktop = document.getElementById('desktop-for-windows');
    let extname = path.extname(htmlPath);
    if (!extname || extname != '.html') {
        throw 'the extname file is not html';
    };
    htmlPath = path.join(globalInfoSystemObject.ROOT_ROUTE, htmlPath);
    if (!fs.existsSync(htmlPath)) {
        throw 'the file noesn\'t exists';
    };
    const principalWindow = fs.readFileSync(path.join(globalInfoSystemObject.ROOT_ROUTE, '/apps/native/windows/principal.hbs')).toString();
    divDesktop.insertAdjacentHTML('afterbegin', hbs.compile(principalWindow)({
        body: fs.readFileSync(htmlPath).toString(),
        width,
        height,
        appName
    }));

}
