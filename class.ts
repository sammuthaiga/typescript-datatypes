

class employee {
    id!: number;
    name!: string;
    address!: string;
}
 let John = new employee();

 John.id = 1;
 John.name = "John";
 John.address = "23, Nairobi";

console.log(John);

class Customer {
    id: number;
    name: string;
    address: string;

    constructor(id: number, name: string, address: string) {
        this.id = id;
        this.name = name;
        this.address = address;
        }
        getNameWithAddress() : string {
            return `${this.name} stays at ${this.address}`;
    }
}


let Sam = new Customer(1, "Sam", "333 Nairobi");
let address = Sam.getNameWithAddress();

console.log(Sam);
console.log(address);