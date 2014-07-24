/*04.Write a JavaScript function isPrime(value) that checks if an
integer number is prime. Write JS program primeChecker.js 
that checks if a few numbers are prime. The result should 
be printed on the console (true or false) on the console. 
Run the program through Node.js*/

function solve(item) {
    var number = item - 0;
    return isPrime(number);

    function isPrime(number) {
        if (number > 1) {
            var count = 0;
            for (var i = 2 ; i <= Math.sqrt(number) ; i++) {
                if (number % i === 0) {
                    return "false";
                }
            }
            return "true";
        }
        else if ((number === 0) || (number === 1)) {
            return "It is either simple or compound number !";
        }
    }
}

console.log(solve(7));
console.log(solve(254));
console.log(solve(587));

