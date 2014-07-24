/*05.Write a JavaScript function divisionBy3(value) 
that finds the sum of digits of integer number n (n > 9)
and checks if the sum is divided by 3 without remainder. 
Write JS program divisionChecker.js to check a few numbers. 
The result should be printed on the console 
(“the number is divided by 3 without remainder” or “
the number is not divided by 3 without remainder”). 
Run the program through Node.js*/

function solve(item) {
    var numberStr = item + "";
    var sum = sumDigits(numberStr);
    return isDividedBy3(sum);

    function sumDigits(numberStr) {
        var sum = 0;
        for (var i = 0; i < numberStr.length; i++) {
            sum += numberStr[i] - 0;
        }
        return sum;
    }

    function isDividedBy3(number) {
        if (number % 3 === 0) {
            return "the number is divided by 3 without remainder";
        } else {
            return "the number is Not divided by 3 without remainder";
        }
    }
}

console.log(solve(12));
console.log(solve(188));
console.log(solve(591));