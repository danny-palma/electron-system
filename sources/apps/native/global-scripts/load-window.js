function loadWindow(htmlPath, width, heigth) {
    let extname = path.extname(htmlPath);
    if (!extname || extname != '.html') {
        throw 'the extname file is not html';
    };
    console.log(htmlPath, width, heigth);
}
