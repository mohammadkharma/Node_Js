// EventEmitter:
// ------------ //

// EventEmitter is a class from the event built in module
const EventEmitter = require('events');

// creating an instance of EventEmitter class
const myEventEmitter = new EventEmitter();

// attaching methods to the EventEmitter
// the method 'on' takes 2 arguments: name of the event, function to be executed when the event occurs
myEventEmitter.on('add', (num1, num2) => {
    console.log('add event has occurred');
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