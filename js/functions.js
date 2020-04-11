'use strict'

// Functions

// Function to simulate a basic calculator
// Optional params (show)
function byConsole(number1, number2) {
    console.log("Sum: " + number1 + " + " + number2 + " = " + (number1 + number2));
    console.log("Subtraction: " + number1 + " - " + number2 + " = " + (number1 - number2));
    console.log("Multiplication: " + number1 + " * " + number2 + " = " + (number1 * number2));
    console.log("Division: " + number1 + " / " + number2 + " = " + (number1 / number2));
}

function byDocumentWrite(number1, number2) {
    document.write("Sum: " + number1 + " + " + number2 + " = " + (number1 + number2) + "<br/>");
    document.write("Subtraction: " + number1 + " - " + number2 + " = " + (number1 - number2) + "<br/>");
    document.write("Multiplication: " + number1 + " * " + number2 + " = " + (number1 * number2) + "<br/>");
    document.write("Division: " + number1 + " / " + number2 + " = " + (number1 / number2) + "<br/>");
}

function calculator(number1, number2, show = false) {
    if (show == false) {
        byConsole(number1, number2);
    } else {
        byDocumentWrite(number1, number2);
    }

}

// Ask for data
var number1 = parseInt(prompt("Enter the first number"));
var number2 = parseInt(prompt("Enter the second number"));

// Call the function
calculator(number1, number2);
calculator(number1, number2, true);

