//*Level2:Functions & Parameters
console.log("Level 2: Functions & Parameters");
//*Exercise 1:Create a function that take two paramter and return their sum
console.log('Exercise 1:create a function that take two paramter and return their sum');
function sum(numX, numY) {
    return numX + numY;
}
var sumResult = sum(10, 222);
console.log('The sum of two number is:', sumResult);
//*Exercise 2:create a function that takes a string parameter and returns greeting message
console.log('Exercise 2:create a function that takes a string parameter and returns greeting message');
function greet(Name) {
    return "Hello,Mr:'".concat(Name, "', Welcom to VertiConnect!We are glad to have you are here.");
}
var greetMessage = greet('Nikhil');
console.log(greetMessage);
//*Exercise3:Create a function with one defaul parameter and one optional parameter
console.log('Exercise3:Create a function with one defaul parameter and one optional parameter');
function intro(firstName, lastName) {
    return "Hello mr:".concat(firstName, " ").concat(lastName ? lastName : '');
}
var introMessage1 = intro('Nikhil', 'Kumar');
console.log(introMessage1);
var introMessage2 = intro('Nikhil');
console.log(introMessage2);
//*Exercise4:Create a function with A default parameter value
console.log('Exercise4:Create a function with A default parameter value');
function defaultParam(name, age) {
    if (age === void 0) { age = 25; }
    return "Hello mr:".concat(name, ", you are ").concat(age, " years old.");
}
var defaultParamMessage = defaultParam('Nikhil');
console.log(defaultParamMessage);
//*Exercise5: Create a function that accepts a number or string return the length (for string) or square(for number)
console.log('Exercise5: Create a function that accepts a number or string return the length (for string) or square(for number)');
function processValue(value) {
    if (typeof value === "string") {
        return value.length;
    }
    else {
        return value * value;
    }
}
var processValueResult = processValue(5);
console.log('Square of number:', processValueResult);
var processValueResult2 = processValue("The quick brown fox jumps over the lazy dog");
console.log('Lenght of string:', processValueResult2);
console.log("End of Level 2: Functions & Parameters");
