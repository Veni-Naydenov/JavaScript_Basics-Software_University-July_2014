/*2.Write a JavaScript function findNthDigit(arr) that accepts as a parameter 
an array of two numbers num and n and returns the n-th digit of given decimal
number num counted from right to left. Return undefined when the number 
does not have n-th digit. Write a JS program nthDigitOfNumber.js 
that invokes your function with the sample input data below 
and prints the output at the console*/
function findNthDigit(arr) {
    var index = arr[0];
    var number = arr[1];
    var numStr = number + '';
    var length = 0;
    var digits = 0;
    for (var i = 0; i < numStr.length; i++) {
        if (isFinite(numStr[i])) {
            digits++;
        }
    }

    if (digits < index) {
        console.log('The number doesn’t have ' + index + ' digits');
    } else {
        for (var i = numStr.length; i >= 0; i--) {
            if (isFinite(numStr[i])) {
                length++;
            }
            if (length === index) {
                console.log(Number(numStr[i]));
                break;
            }
        }
    }
}

findNthDigit([1, 6]);
findNthDigit([2, -55]);
findNthDigit([6, 923456]);
findNthDigit([3, 1451.78]);
findNthDigit([6, 888.88]);