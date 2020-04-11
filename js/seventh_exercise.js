'use strict'

/*
Program to show the multiplication table
of a number entered 
*/

// Variables
var number = parseInt(prompt("Enter a number"));

// Algorithm
document.write("<br/>" + "Multiplication table of number " + number + " <br/> <br/>");
for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= 10; j++) {
        document.write(i + " x " + j + " = " + (i * j) + "<br/>");
    }
    document.write("<br/>");
}