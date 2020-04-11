'use strict'

/*
Program to find largest, smallest number 
and if two numbers are equal validating
if they are positive and numbers
*/

// Algorithm
do {
    // Request data and convert it to Int
    var number1 = parseInt(prompt("Enter the first number", 0));
    var number2 = parseInt(prompt("Enter the second number", 0));

    if (number1 < 0 || number2 < 0 || isNaN(number1) || isNaN(number2)) {
        alert("Numbers are negative or they are not numbers");

    } else if (number1 == number2) {
        alert("Both numbers are equals");

    } else if (number1 > number2) {
        alert(number1 + " is the largest number");
        alert(number2 + " is the smallest number");

    } else if (number2 > number1) {
        alert(number2 + " is the largest number");
        alert(number1 + " is the smallest number");

    }
} while (number1 < 0 || number2 < 0 || isNaN(number1) || isNaN(number2));

