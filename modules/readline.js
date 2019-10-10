// readline module:
// --------------- //

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
                myReadline.setPrompt(`${userInput} is incorrect!! \n`);
                myReadline.prompt();
            }

        })
    }

});

// since the readline is an instance of the EventEmitter class, we can control it's events
myReadline.on('close', () => {
    console.log('Correct!!!!');
});