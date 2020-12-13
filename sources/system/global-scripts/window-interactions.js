/**
 * @param {Element} that 
 * @param {string} appID 
 */
function minimizeWindow(that, appID) {
    that.parentElement.parentElement.parentElement.style.display = 'none';
};

/**
 * @param {Element} that 
 */
function maximizeWindow(that) {
    let currentWindow = that.parentElement.parentElement.parentElement;
    let dragger = that.parentElement.parentElement.firstElementChild;
    let image = that.firstElementChild;
    let copyWidth = currentWindow.style.width;
    let copyHeigth = currentWindow.style.height;
    let copyTop = currentWindow.style.top;
    let copyLeft = currentWindow.style.left;
    // set on window & move the window
    dragger.onmousedown = () => {
        dragger.onmouseup = () => {
            dragger.onmousemove = null;
            that.onmouseup = () => {
                maximizeWindow(that);
            };
        };
        dragger.onmouseleave = () => {
            dragger.onmouseup = null;
            dragger.onmousemove = null;
            that.onmouseup = () => {
                maximizeWindow(that);
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
    that.onmouseup = () => {
        image.src = "../windows/sprite-maximize-window.png";
        image.title = "maximize";
        currentWindow.style.width = copyWidth;
        currentWindow.style.height = copyHeigth;
        currentWindow.style.top = copyTop;
        currentWindow.style.left = copyLeft;
        that.onmouseup = () => {
            maximizeWindow(that);
        };
    };
    currentWindow.style.width = '100%';
    currentWindow.style.height = '100%';
    currentWindow.style.top = '0px';
    currentWindow.style.left = '0px';
    image.src = "../windows/sprite-onwindow-window.png";
    image.title = "on window";
};
