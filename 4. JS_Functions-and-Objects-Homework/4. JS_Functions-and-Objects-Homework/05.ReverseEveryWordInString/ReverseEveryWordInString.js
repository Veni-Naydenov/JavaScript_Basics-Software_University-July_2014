/*5.Write a JavaScript function reverseWordsInString(str) 
to reverse the characters of every word in the string 
but leaves the words in the same order. Words are considered 
to be sequences of characters separated by spaces. 
Write a JavaScript program reverseWords.js */

function reverseWordsInString(str) {
    var array = str.split(' ');
    var newArray = [];
    var newString = '';

    for (var i = 0; i < array.length; i++) {
        newArray.push(reverseString(array[i]));
    }
    newString = newArray.join(' ');

    return newString;

    function reverseString(str) {
        var reversedArray = str.split(""); // maka an array
        reversedArray = reversedArray.reverse();// reverse the array
        var reversedString = reversedArray.join("");//make the reversed array string

        return reversedString;
    }
}

var str = 'Hello, how are you.';
console.log(reverseWordsInString(str));

var str = 'Life is pretty good, isn’t it?';
console.log(reverseWordsInString(str));