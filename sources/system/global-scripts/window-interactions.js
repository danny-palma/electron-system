/**
 * minimize the actualy window
 * @param {Element} that 
 * @param {string} appID 
 */
function minimizeWindow(that, appID) {
    that.parentElement.parentElement.parentElement.style.display = 'none';
    let button = document.getElementById(`icon-app-${appID}`)
    if (!button) throw new Error('cannot find the specified button');
    button.onclick = () => {
        that.parentElement.parentElement.parentElement.style.display = 'unset';
    }
};

/**
 * maximize the actualy window
 * @param {HTMLElement} that
 * @param {boolean} isFromTheButton
 */
function maximizeWindow(that, isFromTheButton) {
    let currentWindow;
    let dragger = that;
    let image;
    let copyWidth;
    let copyHeigth;
    let copyTop;
    let copyLeft;
    let button;
    if (isFromTheButton == false) {
        currentWindow = that.parentElement.parentElement;
        dragger = that;
        image = that.parentElement.lastElementChild.getElementsByTagName('a')[1].firstElementChild;
        button = that.parentElement.lastElementChild.getElementsByTagName('a')[1]
        copyWidth = currentWindow.style.width;
        copyHeigth = currentWindow.style.height;
        copyTop = currentWindow.style.top;
        copyLeft = currentWindow.style.left;
    } else {
        button = that
        currentWindow = that.parentElement.parentElement.parentElement;
        dragger = that.parentElement.parentElement.firstElementChild;
        image = that.firstElementChild;
        copyWidth = currentWindow.style.width;
        copyHeigth = currentWindow.style.height;
        copyTop = currentWindow.style.top;
        copyLeft = currentWindow.style.left;
    }

    // set on window & move the window
    dragger.onmousedown = () => {
        dragger.onmouseup = () => {
            dragger.onmousemove = null;
            button.onmouseup = () => {
                maximizeWindow(that, isFromTheButton ? true : false);
            };
        };
        dragger.onmouseleave = () => {
            dragger.onmouseup = null;
            dragger.onmousemove = null;
            button.onmouseup = () => {
                maximizeWindow(that, isFromTheButton ? true : false);
            };
        };
        dragger.onmousemove = (event) => {
            event.preventDefault();
            image.src = "../windows/sprite-maximize-window.png";
            image.title = "maximize";
            currentWindow.style.width = copyWidth;
            currentWindow.style.height = copyHeigth;
            currentWindow.style.top = `${event.y - 10}px`;
            currentWindow.style.left = `${event.x - 100}px`;
        };
    };
    // only set on window window
    button.onmouseup = () => {
        image.src = "../windows/sprite-maximize-window.png";
        image.title = "maximize";
        currentWindow.style.width = copyWidth;
        currentWindow.style.height = copyHeigth;
        currentWindow.style.top = copyTop;
        currentWindow.style.left = copyLeft;
        button.onmouseup = () => {
            maximizeWindow(that, isFromTheButton ? true : false);
        };
        dragger.ondblclick = () => {
            maximizeWindow(that, isFromTheButton ? true : false)
        }
    };

    dragger.ondblclick = () => {
        image.src = "../windows/sprite-maximize-window.png";
        image.title = "maximize";
        currentWindow.style.width = copyWidth;
        currentWindow.style.height = copyHeigth;
        currentWindow.style.top = copyTop;
        currentWindow.style.left = copyLeft;
        button.onmouseup = () => {
            maximizeWindow(that, isFromTheButton ? true : false);
        };
    }

    currentWindow.style.width = '100%';
    currentWindow.style.height = 'var(--fill-window)';
    currentWindow.style.top = '0px';
    currentWindow.style.left = '0px';
    image.src = "../windows/sprite-onwindow-window.png";
    image.title = "on window";
};

/**
 * set window on the top of the all windows
 * @param {HTMLElement} that 
 * @param {MouseEvent} event 
 */
function setWindowOnTop(that, event) {
    let allWindows = globalObject.OPEN_WINDOWS;
    let maxIndex = 0;
    for (const currentWindow of allWindows) {
        let CWindow = document.getElementById(currentWindow.id);
        if (maxIndex <= parseInt(CWindow.style.zIndex)) maxIndex = parseInt(CWindow.style.zIndex);
        if (parseInt(CWindow.style.zIndex) >= 100000) CWindow.style.zIndex = 0;
    }
    that.style.zIndex = maxIndex + 1;
};

/**
 * move the windows
 * @param {HTMLElement} that 
 * @param {MouseEvent} event 
 */
function moveWindow(that, event1) {
    that.onmouseup = () => {
        that.onmousemove = null;
    };
    that.onmouseleave = () => {
        that.onmouseup = null;
        that.onmousemove = null;
    }
    that.onmousemove = (event) => {
        event.preventDefault();
        that.parentElement.parentElement.style.top = `${event.y - 10}px`;
        that.parentElement.parentElement.style.left = `${event.x - 100}px`;
    };
};
