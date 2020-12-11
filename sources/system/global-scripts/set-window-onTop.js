function setWindowOnTop(that, event) {
    let table = document.getElementById('desktop-for-windows');
    let copy = that;
    that.remove();
    table.insertAdjacentElement('beforeend', copy);
    hideinitMenu();
};
