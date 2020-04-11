'use strict'

// Variables

/*
Using a Loop, request numbers
until enter a negative number 
to show the sum and average of entered data
*/

var sum = 0;
var cont = 0;

do {
    var number = parseInt(prompt("Enter a number (negative to exit)", 0));

    if (isNaN(number)) {
        number = 0;

    } else if (number >= 0) {
        sum += number;
        cont++;
    }

} while (number >= 0);

if (cont != 0) {
    alert("Sum: " + sum + "  Average: " + (sum / cont));
    
} else {
    alert("You did not enter a valid number");
}

