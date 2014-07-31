function detectInput() {
    var name = document.getElementById("insert");
    var value = name.value;

    if (!isFinite(value)) {
        document.getElementById('detect').style.backgroundColor = 'red';
        var sound = new Audio("sound/button-18.wav"); // buffers automatically when created
        sound.play();
    } else {
        document.getElementById('detect').value = value;
    }
}


