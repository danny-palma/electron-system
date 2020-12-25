function startButton(params) {
    let taskbar = document.getElementById('init-menu')
    if (globalObject.TASKBAR_IS_OPEN) {
        taskbar.animate([
            // keyframes
            { bottom: 'var(--height-taskbar)' },
            { bottom: '-350px' },
        ], {
            // timing options
            duration: 200,
        }).onfinish = () => {
            taskbar.style.display = ('none');
            globalObject.TASKBAR_IS_OPEN = false;
        }
    } else {
        taskbar.style.display = ('unset');
        globalObject.TASKBAR_IS_OPEN = true;
        taskbar.animate([
            // keyframes
            { bottom: '-350px' },
            { bottom: 'var(--height-taskbar)' }
        ], {
            // timing options
            duration: 200,
        })
    }
}

function hideinitMenu() {
    let taskbar = document.getElementById('init-menu');
    taskbar.animate([
        // keyframes
        { bottom: 'var(--height-taskbar)' },
        { bottom: '-350px' },
    ], {
        // timing options
        duration: 200,
    }).onfinish = () => {
        taskbar.style.display = ('none');
        globalObject.TASKBAR_IS_OPEN = false;
    }
}

/**
 * initialization of the desktop
 */
(function () {
    let intalledApps = require('../../registry/installed-apps.json').apps
    let initButton = document.getElementById('start-button')
    intalledApps.forEach((value) => {
        initButton.insertAdjacentHTML("afterend", `
        <a class="icon" id="icon-app-${value.id}">
            <img src="${path.join(globalObject.ROOT_ROUTE, value.icon_route)}" alt="${value.name}"
                onclick="globalObject.initApp('${value.id}')" title="${value.name}">
        </a>
        `)
    });
})();
