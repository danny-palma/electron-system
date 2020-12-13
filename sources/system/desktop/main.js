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

function initApp(id) {
    let intalledApps = require('../../registry/installed-apps.json').apps;
    intalledApps.forEach((value) => {
        if (value.id == id){
            try{
                require(path.join(globalInfoSystemObject.ROOT_ROUTE, value.main_route)).main();
            }catch(err){
                alert(`${err}`);
            };
        };
    });
}

(function () {
    let intalledApps = require('../../registry/installed-apps.json').apps
    let initButton = document.getElementById('start-button')
    intalledApps.forEach((value) => {
        initButton.insertAdjacentHTML("afterend",`
        <a class="icon" id="icon-app-${value.id}">
            <img src="${path.join(globalInfoSystemObject.ROOT_ROUTE, value.icon_route)}" alt="${value.name}"
                onclick="initApp('${value.id}')" title="${value.name}">
        </a>
        `)
    });
})();
