function loadFileFromRoute(route) {
    if (!route) return null;
    return fs.readFileSync(`${globalObject.ROOT_ROUTE}${path.sep}${route}`);
}

function readDirFromRoute(route = '') {
    return fs.readdirSync(`${globalObject.ROOT_ROUTE}${path.sep}${route}`);
}
