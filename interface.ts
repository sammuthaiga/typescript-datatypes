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