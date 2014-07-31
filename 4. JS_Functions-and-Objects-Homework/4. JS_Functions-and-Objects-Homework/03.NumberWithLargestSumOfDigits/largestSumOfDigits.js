/*3.Write a JavaScript function findLargestBySumOfDigits(nums) 
that takes as an input a sequence of positive integer numbers 
and returns the element with the largest sum of its digits. 
The function should take a variable number of arguments. 
It should return undefined when 0 arguments are passed or 
when some of the arguments is not an integer number. 
Write a JS program largestSumOfDigits.js that invokes 
your function with the sample input data below and prints 
its output at the console. */
function findLargestBySumOfDigits() {
    var maxSum = Number.MIN_VALUE;
    var currentSum = 0;
    var biggestNum = 0;
    for (var i in arguments) {

        if (!isFinite(arguments[i]) || !isInt(arguments[i])) {
            return undefined;
        }
        currentSum = sumDigits(arguments[i] + '');

        if (currentSum > maxSum) {
            maxSum = currentSum;
            biggestNum = arguments[i];
        }
    }

    return biggestNum;

    function sumDigits(str) {
        var sum = 0;
        for (var i = 0; i < str.length; i++) {
            if (isFinite(str[i])) {
                sum += Number(str[i]);
            }
        }

        return sum;
    }

    function isInt(n) {
        return n % 1 === 0;
    }
}
console.log(findLargestBySumOfDigits(5, 10, 15, 111));
console.log(findLargestBySumOfDigits(33, 44, -99, 0, 20));
console.log(findLargestBySumOfDigits('hello'));
console.log(findLargestBySumOfDigits(5, 3.3));
