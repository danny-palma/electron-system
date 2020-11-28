function moveWindow(that, event) {
    console.log(event)
    that.style.top = event.screenY;
    that.style.right = event.screenX;
}
