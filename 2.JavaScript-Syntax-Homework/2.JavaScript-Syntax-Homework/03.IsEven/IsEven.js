/*Write a JavaScript function evenNumber(value) that checks 
if an integer number is even. Write JS program evenChecker.js to check if 
a few numbers are even. The result should be printed on 
the console (true or false). */

function solve(item) {
    var number = item-0;
    return checkForEven(number);

    function checkForEven(number) {
        return (number % 2 === 0);   
    }
}

console.log(solve(3));
console.log(solve(127));
console.log(solve(588));


