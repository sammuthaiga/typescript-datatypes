// name function

function add(num1: number, num2: number, num3?: number): number {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(20,30));

console.log(add(20,30,40));


// arrow function

const sub = (num1: number, num2: number, num3 = 10): number => num1 - num2-num3;

console.log(sub(15,7));
console.log(sub(15,7,5));

// function expression

const mult = function(num1: number, num2: number): number {
    return num1 * num2;
}

console.log(mult(33,10));

// rest parameters

function add2(num1: number, num2: number, ...num3: number[]): number {
    return num1 + num2 + num3.reduce((a,b) => a + b,0)
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(add2(2,3, ...numbers))

// generic functions

function getItems<T>(items: T[]): T[] {
    return new Array<T>().concat(items)
}

let concatResults = getItems<number>([2,3,4,5,6,7])
let concatStrings = getItems<string>(['a', 'b', 'c', 'd', 'e',])
console.log(concatResults)
console.log(concatStrings)