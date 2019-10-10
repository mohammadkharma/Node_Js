// importing a modules by requiring it's name (file name)
const module_1 = require ('./module_1');
const module_2 = require ('./module_2');

// ------------------------------------------------------------------------------------------------------- //

// module_1: (single statement)
console.log(module_1); // [Function: name]

// using a module with a single function and passing parameters to it
console.log(module_1('Micheal', ' Jackson')); // Micheal Jackson

// ------------------------------------------------------------------------------------------------------- //

// module_2: (two statements and more)
console.log(module_2); // {sum: [Function: sum], PI: 3.14, Employee: [Function: Employee]}

// using the module's statements
console.log(module_2.sum(1, 2)); // 3
console.log(module_2.PI); // 3.14
console.log(new module_2.Employee()); // Employee {}

// ------------------------------------------------------------------------------------------------------- //

// EventEmitter:
// EventEmitter is a class from the event built in  module
const EventEmitter = require('events');

// creating an instance of EventEmitter class
const myEventEmitter = new EventEmitter();

// attaching methods to the EventEmitter
// the method 'on' takes 2 arguments: name of the event, function to be executed when the event occurs
myEventEmitter.on('add', (num1, num2) => {
    console.log('add even has occurred');
    console.log(num1 + num2);
});

// emitting the event by passing the event name as first argument, and the value of the event function
myEventEmitter.emit('add', 1, 2); // myEvent has occurred, 3

// creating classes by inheriting from the EventEmitter
class Person extends EventEmitter {
    constructor(name){
        super(),
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

// creating instance of the Person class, then attaching 'on' method and emitting it
let micheal = new Person('Micheal');
micheal.on('name', ()=>{
    console.log('my name is ' + micheal.name)
});

micheal.emit('name'); // my name is Micheal

// ------------------------------------------------------------------------------------------------------- //
