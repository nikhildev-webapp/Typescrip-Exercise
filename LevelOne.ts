export {}; //for module scope for avoiding global scope issues
//*Level:Basic Types & Varibales in TypeScript
//*Exercise 1
console.log('Exercise1:Declare variable with correct types');
let name: string = 'Nikhil';
let age: number = 20;
let isStudent: boolean = true;
console.log(`Name: ${name}, Age: ${age}, Is Student: ${isStudent}`);
console.log('Types of variables:', typeof name, typeof age, typeof isStudent);

//*Exercise 2
console.log('Exercise2: create a varibale that store either a string or number, Assign both values one by one');
let userId: string | number;
userId = 'User1';
console.log(`UserId as string: ${userId}`);
userId = 101;
console.log(`UserId as number: ${userId}`); 