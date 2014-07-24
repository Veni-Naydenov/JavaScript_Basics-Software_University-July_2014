/*12.Write a JavaScript function variablesTypes(value) that accepts 
the following parameters: name, age, isMale (true or false), 
array of your favorite foods. The function must return the values 
of the variables and their types*/

function variablesTypes(array) {
    var name = array[0];
    var age = array[1];
    var isMale = array[2];
    var foodArr = array[3];
    var foodStr = foodArr.join(',');

    var result = {
        "name": "My name: " + name + "//type is " + typeof (name),
        "age": "My age: " + age + "//type is " + typeof (age),
        "isMale": "I am male: " + isMale + "//type is " + typeof (isMale),
        "food": "My favorite foods are " + foodStr + "//type is " + typeof (foodArr)
    }
    return result.name + "\n"
            + result.age + "\n"
            + result.isMale + "\n"
            + result.food + "\n";
}

console.log(variablesTypes(['Pesho', 22, true, ['fries', 'banana', 'cake']]));
console.log(variablesTypes(['Trichko', 102, true, ['cabage', 'banana', 'apples']]));
console.log(variablesTypes(['Petia', 33, false, ['carrot', 'banana', 'cucumber']]));
