'use strict'

/*
Show all the odd numbers between 2 numbers entered 
*/

//Variables
var number1 = parseInt(prompt("Enter a number"));
var number2 = parseInt(prompt("Enter another number"));
var flag = false;

// Algorithm to secure that there are numbers between them
if (isNaN(number1) || isNaN(number2)) {
    alert("Error, you entered an invalid value");
    
} else if (number1 > number2 + 1) {
    var largestNumber = number1;
    var smallestNumber = number2;

} else if (number2 > number1 + 1) {
    var largestNumber = number2;
    var smallestNumber = number1;

} else {
    // There are not numbers beetwen them
    flag = true;
}

if (flag) {
    alert("Given numbers don't have numbers between them");
} else {
    // Control variable
    var intermediateNumber = smallestNumber+1;

    while (intermediateNumber < largestNumber) {

        if (intermediateNumber % 2 != 0) {
            document.write(intermediateNumber+"<br/>");
        }

        intermediateNumber++;
    }

}

// Variables
