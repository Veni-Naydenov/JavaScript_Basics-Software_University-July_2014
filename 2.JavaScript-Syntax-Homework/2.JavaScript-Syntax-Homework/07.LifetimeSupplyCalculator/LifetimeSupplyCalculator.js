/*07.Write a JavaScript function calcSupply(value) that accepts the following parameters:
your age, your maximum age, estimate amount of your favorite food per day (as a number).
The function calculates how many of the food you will eat for the rest of your life. 
Write JS program lifetimeSupplyCalc.js that calculates the amount of a few foods that you will eat.
The result should be printed on the console. Run the program through Node.js.
Note: we assume that there are no leap years*/

function solve(array) {
    var age = array[0];
    var maxAge = array[1];
    var foodPerDay = array[2];

    var foods = ["carrots", "chocolate ", "cucumbers", "honey", "ham", "tomatoes"];
    var randomIndex = Math.floor((Math.random() * 6) + 0);
    var choice = foods[randomIndex];

    return calculateEatenFood(age, maxAge, foodPerDay);

    function calculateEatenFood(age, maxAge, daylyFood) {
        var lifeSupply = (maxAge - age) * 365 * daylyFood;
        return lifeSupply
                + "kg of "
                + choice + " would be enough until I am "
                + maxAge + " years old.";
    }
}

console.log(solve([38, 118, 0.5]));
console.log(solve([20, 87, 2]));
console.log(solve([16, 102, 1.1]));

