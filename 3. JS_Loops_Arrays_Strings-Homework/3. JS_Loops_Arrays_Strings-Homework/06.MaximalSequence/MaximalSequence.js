/*06.Write a JavaScript function findMaxSequence(value) that finds the maximal
sequence of equal elements in an array and returns the result as an array. 
If there is more than one sequence with the same maximal length, print the rightmost one.
Write JS program sequenceFinder.js that invokes your function with the sample input data below 
and prints the output at the console. */

function findMaxSequence(array) {
    var maxCount = 1;
    var maxValue;

    if (array.length === 1) {
        return array;
    }

    var counter = 1;
    for (var i = 0, length = array.length; i < length; i++) {
        if (array[i] === array[i + 1]) {
            counter++;
            if (maxCount <= counter) {
                maxCount = counter;
                maxValue = array[i];
            }
        } else {
            counter = 1;
        }
    }

    var resultStr = new Array(maxCount + 1).join(maxValue);

    if (isFinite(maxValue)) {
        var resultArray = resultStr.split('').map(function (value) {

            return parseInt(value);
        });
    } else {
        resultArray = [];
        for (var i = 0; i < maxCount; i++) {
            resultArray[i] = maxValue;
        }
    }

    return resultArray;
}

console.log(findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]));
console.log(findMaxSequence([2, 2, 2, 2, 2, 2, 1, 1, 2, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1]));
console.log(findMaxSequence(['happy']));
console.log(findMaxSequence([2, 'qwe', 'qwe', 3, 3, 3, '3']));
console.log(findMaxSequence([2, 'qwe', 'qwe', 'qwe', 'qwe', 3, 3, 3, '3']));