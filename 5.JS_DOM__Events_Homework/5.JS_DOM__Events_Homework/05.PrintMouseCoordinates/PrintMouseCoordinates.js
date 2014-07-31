(function getMouseCoordinates() {
    var mousePos;
    var date = window.Date();
    window.onmousemove = handleMouseMove;
    setInterval(getMousePosition, 100); // setInterval repeats every X ms

    function handleMouseMove(event) {
        event = event || window.event; // IE-ism
        mousePos = {
            x: event.clientX,
            y: event.clientY
        };
        var coordinates = document.getElementById('coordinates').cloneNode(true);
        document.body.appendChild(coordinates);
    }

    function getMousePosition() {
        var pos = mousePos;
        if (pos) {
            document.getElementById('coordinates').innerText = 'X:' + pos.x
                + '; Y:' + pos.y + ' Time: ' + date;
        }
    }
})();
