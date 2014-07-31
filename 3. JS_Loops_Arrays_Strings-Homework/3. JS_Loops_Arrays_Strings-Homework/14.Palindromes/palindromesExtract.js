


function findPalindromes(value) {
    function reverseString(str) {
        var reversedArray = str.split(""); // maka an array
        reversedArray = reversedArray.reverse();// reverse the array
        var reversedString = reversedArray.join("");//make the reversed array string

        return reversedString;
    }

    var newString = value.replace(/\W+/g, ' ');
    var words = newString.toLocaleLowerCase().split(' ');
    var result = [];

    for (var i = 0; i < words.length; i++) {
        var straight = words[i];
        if (straight === '') {
            continue;
        }
        var reversed = reverseString(straight);

        if (straight === reversed) {
            result.push(straight);
        }
    }

    return result.join(', ');
}

console.log(findPalindromes('There is a man, his name was Bob.'));
