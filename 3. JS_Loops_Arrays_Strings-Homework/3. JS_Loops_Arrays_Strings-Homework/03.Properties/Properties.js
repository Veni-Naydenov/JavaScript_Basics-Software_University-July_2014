/*03.Write a JavaScript function displayProperties(value) that displays 
all the properties of the "document" object in alphabetical order. 
Write a JS program docProperties.js that invokes your function with the sample
input data below and prints the output at the console. */

function displayProperties(value) {
    var array = [];

    for (var i in value) {
        array.push(i.toLocaleLowerCase());
    }

    array.sort();

    return array.join("\n");
}

console.log(displayProperties(document));
