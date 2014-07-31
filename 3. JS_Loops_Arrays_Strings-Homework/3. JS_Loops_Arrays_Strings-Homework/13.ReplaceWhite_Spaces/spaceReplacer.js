/*13.Write a JavaScript function replaceSpaces(value) that replaces 
the white-space characters in a text with &nbsp;. 
Write JS program spaceReplacer.js that invokes your function with the 
sample input data below and prints the output at the console.*/

function replaceSpaces(value) {
    console.log(replaceWhiteSpace(value, "&nbsp"));
    //--------------Variant 1--------
    //function replaceWhiteSpace(text, newSign) {
    //    var result = "";

    //    for (var i = 0; i < text.length; i++) {
    //        if (text[i] == " ") {
    //            result += newSign;
    //        }
    //        else {
    //            result += text[i];
    //        }
    //    }
    //    return result;
    //}

    //--------------Variant 2--------
    function replaceWhiteSpace(text, newSign) {
        var resultArr = text.split(' ');
        var result = resultArr.join(newSign);

        return result;
    }
}

replaceSpaces('But you were living in another world tryin\' to get your message through');
