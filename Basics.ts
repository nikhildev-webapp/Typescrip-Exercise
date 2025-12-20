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

//*Interfaces in typescript
interface Car{
    name: string,
    modelNumber: number|string,
    color: string,
    price: number,
    isAvailable:boolean,
}

let car: Car = {
    name: 'BMW',
    modelNumber: 'BMWX5',
    color: 'Black',
    price: 60000000,
    isAvailable:true
}

console.log('Car interface details:', car);

//*Function with Type Annoations
console.log('--Function with Type Annoations---');
console.log(' Function1-Create a function add two numbers with type annoations');
function add(x: number, y: number): number{
    return x + y;
}
let sum: number = add(1000, 1000);
console.log(`Sum:${sum}`)

console.log('Function2-Create a function multiply two number with type annoatitons');
function multiply(a:number,b:number): number{
    return a * b;
}
let multiplication: number = multiply(10, 20);
console.log(`Multiplication:${multiplication}`)

console.log('Function3-create a function to greet a user with optional parameter');
function greet(name: string, greeting?: string): string{
    return `Hello mr${name},${greeting ? greeting : 'Welcome to TypeScript!'}`;
}
let greetMessage1: string = greet('Nikhil', 'Good Morning!');
console.log(greetMessage1);
let greetMessage2: string = greet('Alex');
console.log(greetMessage2);

//*Enums in Typescript
console.log('---Enums in Typescript---');
enum Direction{
    North,
    South,
    East,
    West
}
let myDirection= Direction.South
console.log(`My Direction is${myDirection}`)

//*Generics in TypeScript
console.log('---Generics in TypeScript---');
console.log('Create a generic funtion to retrun any type of array');
function getArray<T>(items: T[]): T[]{
    return new Array(...items); 
}
let numberArray = getArray<number>([1, 2, 3, 4]);
console.log('Number Array:',numberArray)
let strArray=getArray<string>(['Nikhil','Alex','John']);
console.log('String Array:', strArray);

//*Type Assertions in TypeScript
console.log('---Type Assertions in TypeScript---');
let someValue: any = 'This is a string';
let strLength: number = (someValue as string).length;
console.log(`String Length:${strLength}`);