"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//*Level:Basic Types & Varibales in TypeScript
//*Exercise 1
console.log('Exercise1:Declare variable with correct types');
var name = 'Nikhil';
var age = 20;
var isStudent = true;
console.log("Name: ".concat(name, ", Age: ").concat(age, ", Is Student: ").concat(isStudent));
console.log('Types of variables:', typeof name, typeof age, typeof isStudent);
//*Exercise 2
console.log('Exercise2: create a varibale that store either a string or number, Assign both values one by one');
var userId;
userId = 'User1';
console.log("UserId as string: ".concat(userId));
userId = 101;
console.log("UserId as number: ".concat(userId));
