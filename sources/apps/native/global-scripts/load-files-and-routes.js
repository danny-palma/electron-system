function loadFileFromRoute(route) {
    if (!route) return null;
    return fs.readFileSync(`${globalInfoSystemObject.ROOT_ROUTE}${path.sep}${route}`);
}

function readDirFromRoute(route = '') {
    return fs.readdirSync(`${globalInfoSystemObject.ROOT_ROUTE}${path.sep}${route}`);
}
