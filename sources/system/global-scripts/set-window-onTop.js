/**
 * @param {HTMLElement} that 
 * @param {MouseEvent} event 
 */
function setWindowOnTop(that, event) {
    let allWindows = that.parentElement.getElementsByClassName("window");
    for (const currentWindow of allWindows) {
        currentWindow.style.zIndex = 0;
    }
    that.style.zIndex = 10;
};
