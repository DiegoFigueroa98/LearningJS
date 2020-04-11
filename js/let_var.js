'use strict'
// Tests with let and var
var number = 40;
console.log(number);

if (true) {
    var number = 50;
    console.log(number);
}

// Test with let
// var variable works in a global way
var text = "My second activity in JavaScript";
console.log(text);

// let variable text just works inside this block
if (true) {
    let text = "Mastery Course of JavaScript"
    console.log(text);
}

console.log(text);
