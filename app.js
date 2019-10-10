// module_1: (single statement)

// importing a modules by requiring it's name (file name)
const module_1 = require('./module_1');

console.log(module_1); // [Function: name]

// using a module with a single function and passing parameters to it
console.log(module_1('Micheal', ' Jackson')); // Micheal Jackson

// ------------------------------------------------------------------------------------------------------- //

// module_2: (two statements and more)

const module_2 = require('./module_2');
console.log(module_2); // {sum: [Function: sum], PI: 3.14, Employee: [Function: Employee]}

// using the module's statements
console.log(module_2.sum(1, 2)); // 3
console.log(module_2.PI); // 3.14
console.log(new module_2.Employee()); // Employee {}

// ------------------------------------------------------------------------------------------------------- //

// EventEmitter:

// EventEmitter is a class from the event built in module
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
    constructor(name) {
        super(),
            this._name = name;
    }

    get name() {
        return this._name;
    }
}

// creating instance of the Person class, then attaching 'on' method and emitting it
let micheal = new Person('Micheal');
micheal.on('name', () => {
    console.log('my name is ' + micheal.name)
});

micheal.emit('name'); // my name is Micheal

// ------------------------------------------------------------------------------------------------------- //

// readline module:

// readline module allows to prompt the user and get the user input
const readline = require('readline');

// create instance of the readline interface by using createInterface method
// this method takes an object as an argument with two properties as configuration file
// first property is the input, given to it the 'stdin' (input screen) key from the 'process' global object
// second property is the output, given to it the 'stdout' (output screen) key from the 'process' global object
const myReadline = readline.createInterface({ input: process.stdin, output: process.stdout });

// creating 2 random numbers and the answer of their sum in order to use the readline interface
let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let answer = num1 + num2;

// 'question' is a readline method that takes 2 arguments:
// 1st param: the question to ask the user
// 2nd param: function to be executed when the answer is submitted, it takes the userInput as a built in parameter
myReadline.question(`What is ${num1} + ${num2}? \n`, (userInput) => {
    if (userInput.trim() == answer) { // reacting to right answer
        myReadline.close(); // emitting the close event
    }
    else { // reacting to wrong answer
        myReadline.setPrompt('Incorrect! please try again \n'); // setting a prompt
        myReadline.prompt(); // calling the prompt method

        // listening to the userInput again after the prompt, using 'line' event
        // this will cause a loop since the 'line' event will keep executing till the user enter the right input
        myReadline.on('line', (userInput) => {
            if (userInput.trim() == answer) {
                myReadline.close();
            }
            else {
                myReadline.setPrompt(`${ userInput } is incorrect!! \n`);
                myReadline.prompt();
            }

        })
    }

});

// since the readline is an instance of the EventEmitter class, we can control it's events
myReadline.on('close', () => {
    console.log('Correct!!!!');
});