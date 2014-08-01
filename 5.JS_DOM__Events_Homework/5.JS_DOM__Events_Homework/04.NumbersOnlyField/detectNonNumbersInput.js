function detectInput() {
    var input = document.getElementById("insert");
    var inputVal = input.value;
   
    if (!isFinite(inputVal)) {
        var regex = /\D/g;
        input.value = inputVal.replace(regex, '');

        document.getElementById('detect').style.backgroundColor = 'red';
        document.getElementById('insert').style.backgroundColor = 'red';
        var sound = new Audio("sound/button-18.wav"); // buffers automatically when created
        sound.play();
    } else {
        document.getElementById('detect').value = inputVal;
        document.getElementById('insert').style.backgroundColor = '#00ff21';
        document.getElementById('detect').style.backgroundColor = '#00ff21';
    }
}


