'use strict'

// Rest and Spread params
// Rest is an array that contains the rest
// of params in a function ---> (...[name])
function fruitList(fruit1, fruit2, ...restFruits) {
    let result = "";
    result += fruit1;
    result += "\n" + fruit2;

    restFruits.forEach(element => {
        result += "\n" + element;
    });
    return result;
}

// Using Rest
console.log(fruitList("Orange", "Apple", "Watermelon", "Cantaloupe", "Coconut"));

// Spread is an array that contains a certain number
// of values at the start separated by commas (...[name])

// Using Spread
var fruits = ["Orange, Apple, Lettuce"];
console.log(fruitList(...fruits, "Watermelon", "Cantaloupe", "Coconut"));