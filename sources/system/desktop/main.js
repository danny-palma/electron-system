import { system } from "../lib/system.js";

const path = require("path");

document.getElementById("start-button").onclick = () => {
    startButton();
}

function startButton(params) {
    let taskbar = document.getElementById('start-menu');
    if (system.TASKBAR_IS_OPEN) {
        taskbar.animate([
            // keyframes
            { bottom: 'var(--height-taskbar)' },
            { bottom: '-350px' },
        ], {
            // timing options
            duration: 200,
        }).onfinish = () => {
            taskbar.style.display = ('none');
            system.TASKBAR_IS_OPEN = false;
        }
    } else {
        taskbar.style.display = ('unset');
        system.TASKBAR_IS_OPEN = true;
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
    let taskbar = document.getElementById('start-menu');
    taskbar.animate([
        // keyframes
        { bottom: 'var(--height-taskbar)' },
        { bottom: '-350px' },
    ], {
        // timing options
        duration: 200,
    }).onfinish = () => {
        taskbar.style.display = ('none');
        system.TASKBAR_IS_OPEN = false;
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
            <img src="${path.join(system.ROOT_ROUTE, value.icon_route)}" alt="${value.name}"|
                onclick="global.system.initApp('${value.id}')" title="${value.name}">
        </a>
        `)
    });
})();
