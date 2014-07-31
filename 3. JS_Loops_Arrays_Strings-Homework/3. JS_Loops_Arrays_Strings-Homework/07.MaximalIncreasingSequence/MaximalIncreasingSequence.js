/*07.Write a JavaScript function findMaxIncreasingSequence(value) that finds the maximal
increasing sequence in an array of numbers and returns the result as an array. 
If there is no increasing sequence the function returns 'no'.
Write JS program maxSequenceFinder.js that invokes your function 
with the sample input data below and prints the output at the console
 */

function findMaxIncreasingSequence(array) {
    var maxCount = 1;
    var lastIndex = -1;
    var counter = 1;

    for (var i = 0, length = array.length - 1; i < length; i++) {
        if (array[i] < array[i + 1]) {
            counter++;
            if (maxCount <= counter) {
                maxCount = counter;
                lastIndex = i + 1;
            }
        } else {
            counter = 1;
        }
    }

    if (lastIndex < 0) {
        return "no";
    }

    var result = [];
    for (var i = (lastIndex - maxCount) + 1, len = lastIndex; i <= len; i++) {
        result.push(array[i]);
    }

    return result;
}

console.log(findMaxIncreasingSequence([3, 2, 3, 4, 2, 2, 4]));
console.log(findMaxIncreasingSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]));
console.log(findMaxIncreasingSequence([3, 2, 1]));
