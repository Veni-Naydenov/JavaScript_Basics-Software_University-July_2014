function findMostFreqNum(array) {
    var valueCount = {};
    var counter = 1;

    for (var i = 0, length = array.length; i < length; i++) {
        if (valueCount.hasOwnProperty(array[i])) {
            valueCount[array[i]] += 1;
        } else {
            valueCount[array[i]] = 1;
        }
    }
    var sortedArray = sortAssociativeArray(valueCount);
    var elementCount = sortedArray[sortedArray.length - 1][1];
    var value = sortedArray[sortedArray.length - 1][0];

    if (elementCount === 1) {
        value = array[0];
        elementCount = 1;
    }

    return value + " ("
            + elementCount + " times)";

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

console.log(findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]));
console.log(findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]));
console.log(findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]));