function startButton(params) {
    let taskbar = document.getElementById('init-menu')
    if (globalInfoSystemObject.TASKBAR_IS_OPEN) {
        taskbar.style.display = ('none');
        globalInfoSystemObject.TASKBAR_IS_OPEN = false;
    } else {
        taskbar.style.display = ('unset');
        globalInfoSystemObject.TASKBAR_IS_OPEN = true;
    }
}

function hideinitMenu() {
    let taskbar = document.getElementById('init-menu');
    taskbar.style.display = ('none');
    globalInfoSystemObject.TASKBAR_IS_OPEN = false;
}

function initFileExplorer() {
    require('../../FileExplorer/index')
        .default.main(document.getElementById('desktop-for-windows'));
}
