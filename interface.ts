// constructing a user interface with some requried and optional properties
interface user {
    name: string;
    // make age an optional property by adding a ? at the end.
    age?: number;
    id:number;
    email: string;
}

let { name: username, email }: user = {
    name: 'John',
    id: 234567,
    email: 'john@example.com'

    
}
console.log(username, email)
// Accessing specific objects use the dot notation
// user.name;
// user.email;

// console.log(user);

// Extending an interface and adding some extra properties

interface Employee extends user {
    // Add the salary property to the inherited properties from user interface
    salary: number
}

let emp1: Employee = {
    name: 'Sam',
    age: 36,
    id: 215432674,
    email: 'sam@example.com',
    salary: 100000
}

console.log(emp1)

// Array destructuring
// Access user1 and user2 only through array destructuring
let [user1, user2]: user[] = [{
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
]
console.log(user1)
console.log(user2)