/*01.Write a JavaScript function printNumbers(n) that accepts 
as parameter integer n. The function finds all integer numbers
from 1 to n that are not divisible by 4 or by 5. 
Write a JS program numberChecker.js that invokes your function
with the sample input data below and prints the output at 
the console. */

function printNumbers(value) {
    var numArray = [];
    if (value < 0) {
        if (!(value % 4 === 0 || value % 5 === 0)) {
            numArray.push(value);
        }

        if (numArray.length === 0) {
            return "no";
        }
        return numArray.join(', ');
    }

    for (var i = 0; i <= value; i++) {
        if (!(i % 4 === 0 || i % 5 === 0)) {
            numArray.push(i);
        }
    }

    return numArray.join(', ');
}

console.log(printNumbers(20));
console.log(printNumbers(-5));
console.log(printNumbers(13));
console.log(printNumbers(-6));
console.log(printNumbers(-10));