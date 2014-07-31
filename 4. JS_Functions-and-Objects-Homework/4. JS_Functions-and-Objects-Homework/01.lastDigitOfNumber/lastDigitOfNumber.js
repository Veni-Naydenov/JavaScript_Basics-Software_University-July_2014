/*1.Write a JavaScript function lastDigitAsText(number) that returns 
the last digit of given integer as an English word. Write a JS 
program lastDigitOfNumber.js that invokes your function with the 
sample input data below and prints the output at the console. */
function lastDigitAsText(number) {
    var digit = number % 10;
    if (digit<0) {
        digit *= -1;
    }
    var numberObj = {
        0: 'Zero',
        1: 'One',
        2: 'Two',
        3: 'Three',
        4: 'Four',
        5: 'Five',
        6: 'Six',
        7: 'Seven',
        8: 'Eight',
        9: 'Nine'
    };
    console.log('input='+number);
    console.log(digit+': '+numberObj[digit]);
}

lastDigitAsText(6);
lastDigitAsText(-55);
lastDigitAsText(133);
lastDigitAsText(14567);
