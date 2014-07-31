/*5.Write a JavaScript code that prints the mouse coordinates in a text area 
when we move the mouse over the HTML document. A sample output might be as follows:
X:123; Y:3151 Time: Tue Jul 22 2014 20:39:09 GMT+0200 (FLE Daylight Time)
X:3412; Y:567 Time: Tue Jul 21 2014 22:35:12 GMT+0300 (FLE Daylight Time)
…
*/
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
