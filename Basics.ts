// *add this folder in github repo and practice the typescript basics
console.log('Hello, Typescript!')

//*Basic types in TypeScript
console.log('---Basic types in Typescript---');
let username: string = 'Nikhil';
let age: number = 20;
let isActive: boolean = true;
console.log(`Username:${username},Age:${age},Active:${isActive}`);

//*Infernce types
console.log('---Inference types---');
let city: string = 'New York';
let population: number = 100000000;
console.log(typeof city);
console.log(typeof population);

//*Union Types
console.log('--Union Types---');
let userId: string | number;
userId = 'Alex123';
console.log(`UserId as a string:${userId}`);
userId = 12345;
console.log(`UserId as a number:${userId}`);

//*Type Aliases;
console.log('---Type Aliases---');
type Employee = {
    name: string,
    age: number,
    position: string,
    salary: number,
}

let employee: Employee = {
    name: 'Nikhil',
    age: 20,
    position: 'Developer',
    salary:500000
}

console.log('Employee Details:', employee);
