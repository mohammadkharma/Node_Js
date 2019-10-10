// importing from: exporting_single.js
const eSingle = require('./modules/exporting_single');

// a module with a single exported statement return the statement itself
console.log(eSingle); // [Function: name]

// using a module's function and passing params to it
console.log(eSingle('Micheal', ' Jackson')); // Micheal Jackson

// ------------------------------------------------------------------------------------------------------- //

// importing from: exporting_multiple.js
const eMultiple = require('./exporting_multiple');

// a module with a multiple statements return an object with all the exported statements
console.log(eMultiple); // {sum: [Function: sum], PI: 3.14, Employee: [Function: Employee]}

// using the module's statements
console.log(eMultiple.sum(1, 2)); // 3
console.log(eMultiple.PI); // 3.14
console.log(new eMultiple.Employee()); // Employee {}

// ------------------------------------------------------------------------------------------------------- //