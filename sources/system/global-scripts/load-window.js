const hbs = require('handlebars');

// little interface
let interfaceArgs = {
    type: 'string' || 'file',
    width: 0,
    height: 0,
    title: '',
    icon: '',
    htmlPath: '',
    stringBody: ''
}
/**
 * @param {interfaceArgs} args
 */
function showWindow(args) {
    let divDesktop = document.getElementById('desktop-for-windows');
    if (args.type == 'file') {
        let extname = path.extname(args.htmlPath);
        if (!extname || extname != '.html') {
            throw 'the extname file is not html';
        };
        args.htmlPath = path.join(globalObject.ROOT_ROUTE, args.htmlPath);
        if (!fs.existsSync(args.htmlPath)) {
            throw 'the file noesn\'t exists';
        };
        args.body = fs.readFileSync(args.htmlPath).toString();
    } else if (args.type == 'string') {
        args.body = args.stringBody;
    } else {
        throw 'the type was not provided or is invalid'
    }
    const principalWindow = fs.readFileSync(path.join(globalObject.ROOT_ROUTE, '/system/windows/principal.hbs')).toString();
    if (args.icon) args.icon = path.join(globalObject.ROOT_ROUTE, args.icon);
    globalObject.OPEN_WINDOWS.push({
        id: `${globalObject.OPEN_WINDOWS.length + 1}-window`,
    })
    divDesktop.insertAdjacentHTML('afterbegin', hbs.compile(principalWindow)({
        body: args.body,
        width: args.width || 720,
        height: args.height || 480,
        appName: args.title || 'app',
        iconPath: args.icon,
        id: globalObject.OPEN_WINDOWS.length
    }));
    return document.getElementById(`${globalObject.OPEN_WINDOWS.length}-window`);
}
