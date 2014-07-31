function createArray(lenght) {
    var array = Array(lenght);

    for (var i = 0,len=array.length; i < len; i++) {
        array[i] = i * 5;
    }

    return array.join(", ");
}

console.log("Test1_lenght=20: \n" + createArray(20));
console.log("Test2_lenght=15: \n" + createArray(15));
console.log("Test3_lenght=101: \n" + createArray(101));