/*11.Write a JavaScript function checkBrackets(value) to check if in a given 
expression the brackets are put correctly. Write JS program bracketsChecker.js 
that invokes your function with the sample input data below and prints the output 
at the console*/

function checkBrackets(value) {
    var leftCount = 0;
    var leftBracket = '(';
    var rightBracket = ')';

    for (var i = 0; i < value.length; i++) {
        if (value[i] === leftBracket) {
            leftCount++;
        }

        if (value[i] === rightBracket) {
            leftCount--;
        }
    }

    if (leftCount === 0) {
        console.log('correct');
    } else {
        console.log('incorrect');
    }
}

checkBrackets('( ( a + b ) / 5 – d )');
checkBrackets(') ( a + b ) )');
checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )');