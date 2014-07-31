/*15.Write a JavaScript function findMostFreqWord(value) that finds the most 
frequent word in a text and prints it, as well as how many times it appears 
in format "word -> count". Consider any non-letter character as a word separator. 
Ignore the character casing. If several words have the same maximal frequency,
print all of them in alphabetical order. Write JS program frequentWord.js that 
invokes your function with the sample input data below and prints the output 
at the console*/

function findMostFreqWord(value) {
    var newString = value.replace(/\W+/g, ' ');
    var words = newString.toLocaleLowerCase().split(' ').sort();
    var wordCountObj = {};

    for (var i = 0; i < words.length; i++) {
        if (words[i] === '') {
            continue;
        }
        if (wordCountObj.hasOwnProperty(words[i])) {
            wordCountObj[words[i]] += 1
        } else {
            wordCountObj[words[i]] = 1
        }
    }
    var sortedArrayKeyValue = sortAssociativeArray(wordCountObj);
    var length = sortedArrayKeyValue.length;
    var maxCount = sortedArrayKeyValue[length - 1][1];
    var uniqueWords = words.filter(removeDuplicated);

    for (var i = 0; i < uniqueWords.length; i++) {
        var word = uniqueWords[i];

        for (var j = length - 1 ; j >= 0; j--) {
            if (word === sortedArrayKeyValue[j][0]
                && maxCount === sortedArrayKeyValue[j][1]) {
                console.log(sortedArrayKeyValue[j][0] + ' -> ' + maxCount + ' times');
            }
        }
    }

    function removeDuplicated(item, index, inputArray) {
        return inputArray.indexOf(item) === index;
    }

    function sortAssociativeArray(obj) {
        var newArray = [];

        for (var key in obj) {
            newArray.push([key, obj[key]]);
        }
        newArray.sort(function (a, b) {
            a = a[1];
            b = b[1];

            return a - b;
            //return a < b ? -1 : (a > b ? 1 : 0);
        });

        return newArray;
    }
}

findMostFreqWord('in the middle of the night');
findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.');
findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.');