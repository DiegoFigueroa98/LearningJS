'use strict'

// Variables

/*
Show all dividing numbers of an entered number
*/

// Variables
var number = parseInt(prompt("Enter a number"));

for (let i = 1; i <= number; i++) {
    // Evaluate if is a dividing number
    if (number % i == 0) {
        document.write(i+"<br/>");
    }
    
}

