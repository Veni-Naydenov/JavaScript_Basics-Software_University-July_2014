/*02.Write a JavaScript function roundNumber(value) that rounds floating-point 
number using Math.round(), Math.floor().
Write a JS program roundingNumbers.js that rounds a few sample values.
Run the program through Node.js. */

function solve(item) {
    var floatNum = item;
    return roundNumber(floatNum);

    function roundNumber(value) {
        var floor = Math.floor(floatNum);
        var round = Math.round(floatNum);

        return floor + "\n" + round;
    };
}

console.log(solve(22.7));
console.log(solve(12.3));
console.log(solve(58.7));