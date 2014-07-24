/*14.Write a HTML page (with text field, button, and paragraph).
Write JS program calcExpression.js that calculates any expression put
in the text field and prints it in the paragraph. 
Link the JS file to the HTML file. (100% accuracy is not required). */

function Global() {

    (function evaluate() {
        var inputStr = document.getElementById("expression").value || "";
        var operator = "";
        var values = [];
        var valueStr = "";

        for (var i = 0; i < inputStr.length; i++) {

            if (inputStr[i] == "+" || inputStr[i] == "-"
                || inputStr[i] == "*" || inputStr[i] == "/") {
                operator = inputStr[i];

                if (valueStr !== "") {
                    values.push(valueStr);
                    valueStr = "";
                    values.push(operator);
                    continue;
                } else {
                    valueStr += inputStr[i];
                }
            } else {
                valueStr += inputStr[i];

                if (i === inputStr.length - 1) {
                    values.push(valueStr);
                }
            }
        }
        //console.log(values);
        var result = 0;

        for (var i = 0; i < values.length; i++) {

            for (var j = i; j < values.length; j++) {
                if (values[j] === "*" || values[j] === "/") {
                    var midValue = calculate(values[j - 1], values[j], values[j + 1]);
                    values.splice(j - 1, 3, midValue);
                }
            }
        }
        //console.log(values);
        if (values.length > 1) {
            for (var i = 0; i < values.length;) {
                if (i === 0) {
                    var arr = values.slice(i, i + 3);
                    result = calculate(arr[0] - 0, arr[1], arr[2] - 0);
                    i += 3
                } else {
                    var arr = values.slice(i, i + 2);
                    result = calculate(result, arr[0], arr[1] - 0);
                    i += 2
                }
                //console.log(result);
            }
        } else {
            result = values[0];
        }

        document.getElementById("result").innerHTML = result;

        function calculate(a, operator, b) {
            var result = {
                "+": a + b,
                "-": a - b,
                "*": a * b,
                "/": a / b,
            };

            return result[operator];
        }
    })();
}