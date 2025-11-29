"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = require("./models/Person");
console.log("Hello from TypeScript!");
const person1 = new Person_1.Person('Alice', 30);
person1.greet();
const person2 = new Person_1.Person('Bob', 25);
person2.greet();
