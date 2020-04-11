'use strict'

/*
Program to create a calculator of 2 numbers entered
*/

// Variables
var number1 = parseInt(prompt("Enter the first number"));
var number2 = parseInt(prompt("Enter the second number"));

// Algorithm
while (isNaN(number1) || isNaN(number2)) {
    number1 = parseInt(prompt("Enter the first number"));
    number2 = parseInt(prompt("Enter the second number"))
}

var resultado = "Sum result is: " + (number1 + number2) + ("<br/>") +
    "Subtraction result is: " + (number1 - number2) + ("<br/>") +
    "Multiplication result is: " + (number1 * number2) + ("<br/>") +
    "Division result is: " + (number1 / number2) + ("<br/>");

document.write(resultado);