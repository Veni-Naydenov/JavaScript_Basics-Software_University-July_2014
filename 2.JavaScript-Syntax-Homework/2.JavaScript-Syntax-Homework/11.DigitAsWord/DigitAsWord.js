/*11.Write a JavaScript function convertDigitToWord(value) that prints the name of
an integer number n (0<n<10) in English using switch statement. 
Write JS program digitAsWord.js that prints a few digits on the console.
Run the program through Node.js*/

function convertDigitToWord(value) {
    var digitName = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    }

    return digitName[value];
}

console.log(convertDigitToWord(5));
console.log(convertDigitToWord(6));
console.log(convertDigitToWord(3));
console.log(convertDigitToWord(9));
console.log(convertDigitToWord(0));
console.log(convertDigitToWord(8));