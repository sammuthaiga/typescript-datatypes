"use strict";
// name function
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(20, 30));
console.log(add(20, 30, 40));
// arrow function
const sub = (num1, num2, num3 = 10) => num1 - num2 - num3;
console.log(sub(15, 7));
console.log(sub(15, 7, 5));
// function expression
const mult = function (num1, num2) {
    return num1 * num2;
};
console.log(mult(33, 10));
// rest parameters
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(add2(2, 3, ...numbers));
// generic functions
// NB: <T> acts as a placeholder.
function getItems(items) {
    return new Array().concat(items);
}
let concatResults = getItems([2, 3, 4, 5, 6, 7]);
let concatStrings = getItems(['a', 'b', 'c', 'd', 'e',]);
console.log(concatResults);
console.log(concatStrings);
