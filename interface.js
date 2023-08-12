"use strict";
let { name: username, email } = {
    name: 'John',
    id: 234567,
    email: 'john@example.com'
};
console.log(username, email);
let emp1 = {
    name: 'Sam',
    age: 36,
    id: 215432674,
    email: 'sam@example.com',
    salary: 100000
};
console.log(emp1);
// Array destructuring
// Access user1 and user2 only through array destructuring
let [user1, user2, ...restusers] = [{
        name: 'Dave',
        age: 36,
        id: 1,
        email: 'sam@example.com',
    },
    {
        name: 'Jose',
        age: 36,
        id: 2,
        email: 'sam@example.com',
    },
    {
        name: 'Lucy',
        age: 36,
        id: 3,
        email: 'sam@example.com',
    },
];
// console.log(user1)
// console.log(user2)
// console.log(restusers)
// Using the filter function
let results = restusers.filter(user => user.id > 2);
console.log(results);
