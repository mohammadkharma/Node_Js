// importing a modules by requiring it's name (file name)
const module_1 = require ('./module_1');
const module_2 = require ('./module_2');

// ------------------------------------------------------------------------------------------------------- //

// module_1 (single statement)
console.log(module_1); // [Function: name]

// using a module with a single function and passing parameters to it
console.log(module_1('Micheal', ' Jackson')); // Micheal Jackson

// ------------------------------------------------------------------------------------------------------- //

// module_2 (two statements and more)
console.log(module_2); // {sum: [Function: sum], PI: 3.14, Employee: [Function: Employee]}

// using the module's statements
console.log(module_2.sum(1, 2)); // 3
console.log(module_2.PI); // 3.14
console.log(new module_2.Employee()); // Employee {}

// ------------------------------------------------------------------------------------------------------- //


