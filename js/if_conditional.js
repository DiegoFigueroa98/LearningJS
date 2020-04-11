'use strict'

// Variables
var age1 = 10;
var age2 = 10;

// If conditional
if (age1 > age2) {
    console.log(age1 + " is older than " + age2);
} else if (age1 < age2) {
    console.log(age1 + " is younger than " + age2)
} else {
    console.log(age1 + " and " + age2 + " are equals")
}

// Real data
var name = "Diego Aaron";
var age = 77;

// Evaluate if you are of legal age
if (age >= 18) {
    console.log(name + " is an adult");
    if (age >= 77) {
        console.log(name + " is an old man");
    }
    if (age <= 33) {
        console.log(name + " is not a millennial yet");
    } else {
        console.log(name + " is not a millennial");
    }
} else {
    console.log(name + " is not an adult");
}

// Variables
// Get the current year
var year = new Date().getFullYear();
// Logical operators
// NOT ---> !
if (year != 2020) {
    console.log("The current year is not 2020");
} else {
    console.log("The current year is 2020");
}
// AND ---> &&
if (year >= 2000 && year <= 2020 && year) {
    console.log("We are in the current era!");
} else {
    console.log("We are in the postmodern era!");
}
// OR  ---> ||
if (year == 1020 || year == 2020) {
    console.log("The current year ends in 20");
} else {
    console.log("The current year doesn't end in 20");
}