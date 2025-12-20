// *add this folder in github repo and practice the typescript basics
console.log('Hello, Typescript!');
//*Basic types in TypeScript
console.log('---Basic types in Typescript---');
var username = 'Nikhil';
var age = 20;
var isActive = true;
console.log("Username:".concat(username, ",Age:").concat(age, ",Active:").concat(isActive));
//*Infernce types
console.log('---Inference types---');
var city = 'New York';
var population = 100000000;
console.log(typeof city);
console.log(typeof population);
//*Union Types
console.log('--Union Types---');
var userId;
userId = 'Alex123';
console.log("UserId as a string:".concat(userId));
userId = 12345;
console.log("UserId as a number:".concat(userId));
//*Type Aliases;
console.log('---Type Aliases---');
var employee = {
    name: 'Nikhil',
    age: 20,
    position: 'Developer',
    salary: 500000
};
console.log('Employee Details:', employee);
