/*Write a JavaScript function calcCylinderVol(value) 
that accepts the following parameters: radius and the height
of a straight circular cylinder. The function calculates the
volume of the cylinder. Write JS program cylinderVol.js 
that calculates the volume of a few cylinders. 
The result should be printed on the console. 
Run the program through Node.js*/

function solve(radius, height) {
    function calcCylinderVol(r, h) {
        var volume = Math.PI * (r * r) * h;
        return volume;
    }

    var volumeStr = calcCylinderVol(radius, height) + "";
    //take only three digits after the decimal dot.
    var volume= volumeStr.substr(0,(volumeStr.indexOf('.')+4)) - 0;//-0 to become number!

    return volume;
}

console.log(solve(2,4));
console.log(solve(5,8));
console.log(solve(12,3));