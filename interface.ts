// constructing a user interface with some requried and optional properties
interface user {
    name: string;
    // make age an optional property by adding a ? at the end.
    age?: number;
    id:number;
    email: string;
}

let user: user = {
    name: 'John',
    id: 234567,
    email: 'john@example.com'

}

console.log(user);

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