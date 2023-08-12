"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _id;
class employee {
}
let John = new employee();
John.id = 1;
John.name = "John";
John.address = "23, Nairobi";
console.log(John);
class Customer {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    getNameWithAddress() {
        return `${this.name} stays at ${this.address}`;
    }
}
let Sam = new Customer(1, "Sam", "333 Nairobi");
let address = Sam.getNameWithAddress();
console.log(Sam);
console.log(address);
class manager {
    constructor(id, name, address) {
        _id.set(this, void 0);
        __classPrivateFieldSet(this, _id, id);
        this.name = name;
        this.address = address;
    }
    getNameWithAddress() {
        return `${this.name} stays at ${this.address}`;
    }
}
_id = new WeakMap();
class director extends manager {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getNameWithAddress() {
        return `${this.name} our director stays at ${this.address}`;
    }
}
let Mike = new director(2, "Mike", "Karen, Nairobi");
console.log(Mike.getNameWithAddress());
