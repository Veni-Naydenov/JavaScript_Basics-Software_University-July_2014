/*Write a JavaScript function compareChars(value) that compares 
two arrays of chars lexicographically (letter by letter). 
Write JS program charComparer.js that invokes your function with the sample 
input data below and prints the output at the console*/

function compareChars(array) {
    var firstArr = array[0];
    var secondArr = array[1];

    if (firstArr.length !== secondArr.length) {
        return "Not Equal"
    } else {
        for (var i = 0, len = firstArr.length; i < len; i++) {
            if (firstArr[i]!==secondArr[i]) {
                return "Not Equal";
            }
        }

        return "Equal"
    }
}

console.log(compareChars([['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'],
           ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']]));
console.log(compareChars([['3', '5', 'g', 'd'],
             ['5', '3', 'g', 'd']]));
console.log(compareChars([['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'],
            ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']]));