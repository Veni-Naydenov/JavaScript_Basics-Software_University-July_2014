/*10.Write a JavaScript function checkDigit(value) that finds if the third digit
(right-to-left) of an integer number n (n>1000) is 3. Write JS program digitChecker.js 
that checks a few numbers. The result (true or false) should be printed on the console.
Run the program through Node.js*/

function checkDigit(value) {
    var digit = parseInt((value / 100) % 10);

    return digit === 3;
}

console.log(checkDigit(1234));
console.log(checkDigit(15369));
console.log(checkDigit(123491));