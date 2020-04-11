'use strict'

// Variables
var age = 0;
var show = "";

// Switch conditional
switch (age) {
    case 18:
        show = "You are of legal age";
        break;

    case 25:
        show = "You are an adult";
        break;

    case 40:
        show = "You are in 40 crisis";
        break;

    case 75:
        show = "You are an old man";
        break;

    default:
        show = "Your age is neutral";
        break;
}

// Show results
console.log(show);