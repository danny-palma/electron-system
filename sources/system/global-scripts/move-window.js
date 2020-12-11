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
        that.parentElement.style.top = `${event.y - 10}px`;
        that.parentElement.style.left = `${event.x - 100}px`;
    };
}
