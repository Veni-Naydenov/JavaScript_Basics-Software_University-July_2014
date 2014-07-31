/*4.Write a HTML page holding a form and a text field. Using JavaScript make the 
text field to accept numbers only. When a non-number character is entered through 
the keyboard (or by any other way), make the field red for a while and do not accept 
the change (preserve the previous value of the field).*/

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


