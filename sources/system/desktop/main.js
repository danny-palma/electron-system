function startButton(params) {
    let taskbar = document.getElementById('init-menu')
    if (globalObject.TASKBAR_IS_OPEN) {
        taskbar.style.display = ('none');
        globalObject.TASKBAR_IS_OPEN = false;
    } else {
        taskbar.style.display = ('unset');
        globalObject.TASKBAR_IS_OPEN = true;
    }
}

function hideinitMenu() {
    let taskbar = document.getElementById('init-menu');
    taskbar.style.display = ('none');
    globalObject.TASKBAR_IS_OPEN = false;
}

function initApp(id, ...args) {
    let intalledApps = require('../../registry/installed-apps.json').apps;
    intalledApps.forEach((value) => {
        if (value.id == id){
            try{
                require(path.join(globalObject.ROOT_ROUTE, value.main_route)).main(args);
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
            <img src="${path.join(globalObject.ROOT_ROUTE, value.icon_route)}" alt="${value.name}"
                onclick="initApp('${value.id}', 1,2,3,4,5)" title="${value.name}">
        </a>
        `)
    });
})();
