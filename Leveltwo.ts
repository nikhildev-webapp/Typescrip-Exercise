//*Level2:Functions & Parameters
console.log("Level 2: Functions & Parameters");

//*Exercise 1:Create a function that take two paramter and return their sum
console.log('Exercise 1:create a function that take two paramter and return their sum');
function sum(numX: number, numY: number): number{
    return numX + numY;
}
let sumResult = sum(10, 222);
console.log('The sum of two number is:', sumResult);

//*Exercise 2:create a function that takes a string parameter and returns greeting message
console.log('Exercise 2:create a function that takes a string parameter and returns greeting message');
function greet(Name:string): string{
    return `Hello,Mr:'${Name}', Welcom to VertiConnect!We are glad to have you are here.`
}
let greetMessage = greet('Nikhil');
console.log(greetMessage);

//*Exercise3:Create a function with one defaul parameter and one optional parameter
console.log('Exercise3:Create a function with one defaul parameter and one optional parameter');
function intro(firstName: string, lastName?:string): string{
    return `Hello mr:${firstName} ${lastName ? lastName : ''}`;
}
let introMessage1 = intro('Nikhil','Kumar');
console.log(introMessage1);
let introMessage2 = intro('Nikhil');
console.log(introMessage2);

//*Exercise4:Create a function with A default parameter value
console.log('Exercise4:Create a function with A default parameter value');
function defaultParam(name: string, age: number = 25): string{
    return `Hello mr:${name}, you are ${age} years old.`;
}
let defaultParamMessage = defaultParam('Nikhil');
console.log(defaultParamMessage);

//*Exercise5: Create a function that accepts a number or string return the length (for string) or square(for number)
console.log('Exercise5: Create a function that accepts a number or string return the length (for string) or square(for number)');
function processValue(value: number | string): number {
    if (typeof value === "string") {
        return value.length;
    } else {
        return value * value;
    }
}
let processValueResult = processValue(5);
console.log('Square of number:',processValueResult);
let processValueResult2 = processValue("The quick brown fox jumps over the lazy dog");
console.log('Lenght of string:',processValueResult2);