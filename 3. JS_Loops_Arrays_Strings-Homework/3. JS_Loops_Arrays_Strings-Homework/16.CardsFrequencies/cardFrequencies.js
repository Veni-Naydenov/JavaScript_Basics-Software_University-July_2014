/*16.Write a JavaScript function findCardFrequency(value) that that accepts 
the following parameters: array of several cards (face + suit), 
separated by a space. The function calculates and prints at 
the console the frequency of each card face in format "card_face -> frequency". 
The frequency is calculated by the formula appearances / N and is expressed 
in percentages with exactly 2 digits after the decimal point. The card faces 
with their frequency should be printed in the order of the card face's first 
appearance in the input. The same card can appear multiple times in the input, 
but its face should be listed only once in the output. Write JS program 
cardFrequencies.js that invokes your function with the sample input data 
below and prints the output at the console*/

function findCardFrequency(value) {
    var newString = value.replace(/\W+/g, ' ');
    var cards = newString.toLocaleLowerCase().split(' ');
    
    var cardCountObj = {};
    var uniqueCards = cards.filter(removeDuplicated);
    var length = cards.length;

    for (var i = 0; i < cards.length; i++) {
        if (cards[i] === '') {
            length -= 1;
            continue;
        }
        if (cardCountObj.hasOwnProperty(cards[i])) {
            cardCountObj[cards[i]] += 1
        } else {
            cardCountObj[cards[i]] = 1
        }
    }

    for (var i = 0; i < uniqueCards.length; i++) {
        var card = uniqueCards[i];
        for (var key in cardCountObj) {
            if (card === key) {
                var frequency = ((parseFloat(cardCountObj[key]) / length) * 100).toFixed(2);
                console.log(key + " -> " + frequency + '%');
            }
        }
    }

    function removeDuplicated(item, index, inputArray) {
        return inputArray.indexOf(item) === index;
    }
}

findCardFrequency('8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦');
console.log('-----------------------------');
findCardFrequency('J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠');
console.log('-----------------------------');
findCardFrequency('10♣ 10♥');