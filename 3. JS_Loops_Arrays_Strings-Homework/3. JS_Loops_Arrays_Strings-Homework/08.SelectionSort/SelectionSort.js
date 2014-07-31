/*08.Sorting an array means to arrange its elements in increasing order. 
Write a JavaScript function sortArray(value) to sort an array.
Use the "selection sort" algorithm: find the smallest element, 
move it at the first position, find the smallest from the rest, 
move it at the second position, etc. Write JS program arraySorter.js 
that invokes your function with the sample input data below and prints
the output at the console*/

function sortArray(array) {
    var min = 0;
    var temp = 0;
    var length = array.length;

    for (currentIndex = 0; currentIndex < length - 1; currentIndex++) {
        min = currentIndex;
        for (nextIndex = currentIndex + 1; nextIndex < length; nextIndex++) {
            if (array[nextIndex]  < array[min] ) {
                min = nextIndex;
            }
        }
        temp = array[currentIndex] ;
        array[currentIndex] = array[min] ;
        array[min] = temp;
    }

    return array.join(', ');
}

console.log(sortArray([5, 4, 3, 2, 1]));
console.log(sortArray([12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]));
