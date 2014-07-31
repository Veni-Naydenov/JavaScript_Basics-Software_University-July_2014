/*10.Write a JavaScript function reverseString(value) that reverses string and returns it.
Write JS program stringReverser.js that invokes your function with the
sample input data below and prints the output at the console. */

function reverseString(value) {
    var reversedArray = value.split(""); // maka an array
    reversedArray = reversedArray.reverse();// reverse the array
    var reversedString = reversedArray.join("");//make the reversed array string

    return reversedString;
}

console.log(reverseString('sample'));
console.log(reverseString('softUni'));
console.log(reverseString('java script'));