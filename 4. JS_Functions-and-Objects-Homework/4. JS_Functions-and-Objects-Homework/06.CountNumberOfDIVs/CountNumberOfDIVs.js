(function countDivs() {
    var element = document.getElementById("outerDiv");
    var numberOfDivs = element.getElementsByTagName('div').length
    numberOfDivs += 1;

    console.log(numberOfDivs + " divs");
    alert(numberOfDivs + 'divs')
})();
