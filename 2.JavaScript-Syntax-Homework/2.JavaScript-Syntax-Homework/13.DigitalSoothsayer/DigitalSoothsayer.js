/*13.Write a JavaScript function soothsayer(value) that accepts the following parameters
(source arrays): array of numbers, array of programming languages, array of cities,
array of cars. Each array must consist of five elements. The function must return an
array result[] that consists of one random item from each source array. 
Write a JS program that prints on the console the following output: 
“You will work result[0] years on result[1]. You will live in result[2] 
and drive result[3].”.  Run the program through Node.js*/

function soothsayer(array) {
    var years = array[0];
    var languages = array[1];
    var cities = array[2];
    var cars = array[3];

    var randomIndex = Math.floor((Math.random() * 5) + 0);

    var year = years[randomIndex];
    var language = languages[randomIndex];
    var city = cities[randomIndex];
    var car = cars[randomIndex];

    return "You will work " + year + " on " + language + ".\n"
          + "You will live in " + city + " and drive " + car + ".";
}

console.log(soothsayer([[3, 5, 2, 7, 9],
    ['Java', 'Python', 'C#', 'JavaScript', 'Ruby'],
    ['Silicon Valley', 'London', 'Las Vegas', 'Paris', 'Sofia'],
    ['BMW', 'Audi', 'Lada', 'Skoda', 'Opel']]));