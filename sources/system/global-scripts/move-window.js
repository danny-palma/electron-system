function moveWindow(that = document.getElementById("asd"), event1) {
    console.log(event1)
    that.addEventListener("mousemove", (event) => {
        event.preventDefault();
        that.parentElement.style.top = `${event.y - 10}px`;
        that.parentElement.style.left = `${event.x - 100}px`;
   });
}
