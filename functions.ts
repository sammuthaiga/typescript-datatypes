// name function

function add(num1: number, num2: number, num3?: number): number {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(20,30));

console.log(add(20,30,40));


// arrow function

const sub = (num1: number, num2: number): number => num1 - num2;

console.log(sub(15,7));

// function expression

const mult = function(num1: number, num2: number): number {
    return num1 * num2;
}

console.log(mult(33,10));