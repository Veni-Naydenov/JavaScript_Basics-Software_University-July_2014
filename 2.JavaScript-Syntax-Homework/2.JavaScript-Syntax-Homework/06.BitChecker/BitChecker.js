/*Write a JavaScript function bitChecker(value) that finds
if the bit 3 an integer number (counting from 0) is 1.
Write JS program checkingBits.js to check a few numbers.
The result (true or false) should be printed on the console. 
Run the program through Node.js*/

function solve(item) {
    return bitChecker(item);

    function bitChecker(value) {
        return result = (((value >> 3) & 1) === 1);
    }
}

console.log(solve(333));
console.log(solve(425));
console.log(solve(2567564754));