// exporting multiple statements from a module
// ------------------------------------------- //

const sum = (num1, num2) => num1 + num2;
const PI = 3.14;
class Employee {
    constructor(){
        console.log('object created');
    }
}

// exporting statements as an object
module.exports = {sum: sum, PI: PI, Employee: Employee};