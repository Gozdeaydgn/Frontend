import { addNumbers, sayHelloTo } from "./Practice11_Methods.js";

import chalk from 'chalk';

import Person from "./Practice12_Person.js";

sayHelloTo('John');
sayHelloTo('Marina');

console.log( addNumbers(100,200));

console.log(chalk.blue('Hello world!'));

const p1 = new Person ("Dua", "D");
p1.printFullName();
// p1.age = 17;
// console.log(p1); //Person {firstName: 'Dua', lastName: 'D', age: 17}


