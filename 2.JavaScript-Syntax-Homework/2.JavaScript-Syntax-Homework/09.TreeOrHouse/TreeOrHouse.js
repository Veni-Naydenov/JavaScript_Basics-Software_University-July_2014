/*Write a JavaScript function treeHouseCompare(value) that accepts the following 
parameters: integers a and b. The function compares the area of the house 
and the area of the tree (Figure 1) and returns the name of the figure 
with bigger area (house or tree) and the value of the area. 
Write JS program treehouse.js that compares a few houses and trees. 
The result should be printed on the console. Run the program through Node.js*/

function treeHouseCompare(a, b) {
    var houseTriangle = a * (a * (2 / 3)) / 2;
    var houseSquare = a * a;
    var houseArea = houseSquare + houseTriangle;

    var treeTop = Math.PI * (b * 2 / 3) * (b * 2 / 3);
    var treeBottom = b * b / 3;
    var treeArea = treeTop + treeBottom;

    if (treeArea > houseArea) {
        return "tree/" + myRound(treeArea, 2);
    } else {
        return "house/" + myRound(houseArea, 2);
    }
}

function myRound(value, places) {
    var multiplier = Math.pow(10, places);
    return (Math.round(value * multiplier) / multiplier);
}

console.log(treeHouseCompare(3, 2));
console.log(treeHouseCompare(3, 3));
console.log(treeHouseCompare(4, 5));