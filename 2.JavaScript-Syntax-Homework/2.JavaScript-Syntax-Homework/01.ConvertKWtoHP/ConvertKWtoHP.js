function solve(item) {
    var kw = item;
    var hp = kw / 0.745699872;
    return myRound(hp,2);

    function myRound(value, places) {
        var multiplier = Math.pow(10, places);
        return (Math.round(value * multiplier) / multiplier);
    }
}

console.log(solve(75));
console.log(solve(150));
console.log(solve(1000));