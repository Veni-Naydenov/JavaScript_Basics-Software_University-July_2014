/*4.Write a JavaScript function biggerThanNeighbors(index,  arr) 
that accept a number and an integer array as parameters. 
The function should return a Boolean number: whether the element 
at the given position in the array is bigger than its two neighbors 
(when such exist). It should return undefined when the index doesn't
exist. */

function biggerThanNeighbors(index, arr) {
    if (index < arr.length && index >= 0) {
        var leftNum = arr[index - 1];
        var rightNum = arr[index + 1];

        if (leftNum !== undefined && rightNum !== undefined) {
            if (arr[index] > leftNum && arr[index] > rightNum) {
                return 'bigger'
            } else {
                return 'not bigger'
            }

        } else {
            return 'only one neighbor';
        }
    } else {
        return undefined;
    }
}

var result = biggerThanNeighbors(2, [1, 2, 3, 3, 5]);
if (result === undefined) {
    console.log('invalid index');
} else {
    console.log(result);
}

var result = biggerThanNeighbors(2, [1, 2, 5, 3, 4])
if (result === undefined) {
    console.log('invalid index');
} else {
    console.log(result);
}

var result = biggerThanNeighbors(5, [1, 2, 5, 3, 4])
if (result === undefined) {
    console.log('invalid index');
} else {
    console.log(result);
}

var result = biggerThanNeighbors(0, [1, 2, 5, 3, 4])
if (result === undefined) {
    console.log('invalid index');
} else {
    console.log(result);
}