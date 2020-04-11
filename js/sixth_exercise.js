'use strict'

/*
Program to say if a number is odd or pair 
*/

// Variables
var number = 0;

// Algorithm
do {
    number = parseInt(prompt("Enter a number"));
    if (isNaN(number)) {
        alerta("Error, invalid data");
    }
    else if (number % 2 == 0) {
        document.write(number+ " is pair");
    } else {
        document.write(number+ " is odd");
    }
} while (isNaN(number));