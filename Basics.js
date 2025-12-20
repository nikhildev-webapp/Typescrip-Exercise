var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
var car = {
    name: 'BMW',
    modelNumber: 'BMWX5',
    color: 'Black',
    price: 60000000,
    isAvailable: true
};
console.log('Car interface details:', car);
//*Function with Type Annoations
console.log('--Function with Type Annoations---');
console.log(' Function1-Create a function add two numbers with type annoations');
function add(x, y) {
    return x + y;
}
var sum = add(1000, 1000);
console.log("Sum:".concat(sum));
console.log('Function2-Create a function multiply two number with type annoatitons');
function multiply(a, b) {
    return a * b;
}
var multiplication = multiply(10, 20);
console.log("Multiplication:".concat(multiplication));
console.log('Function3-create a function to greet a user with optional parameter');
function greet(name, greeting) {
    return "Hello mr".concat(name, ",").concat(greeting ? greeting : 'Welcome to TypeScript!');
}
var greetMessage1 = greet('Nikhil', 'Good Morning!');
console.log(greetMessage1);
var greetMessage2 = greet('Alex');
console.log(greetMessage2);
//*Enums in Typescript
console.log('---Enums in Typescript---');
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["South"] = 1] = "South";
    Direction[Direction["East"] = 2] = "East";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
var myDirection = Direction.South;
console.log("My Direction is".concat(myDirection));
//*Generics in TypeScript
console.log('---Generics in TypeScript---');
console.log('Create a generic funtion to retrun any type of array');
function getArray(items) {
    return new (Array.bind.apply(Array, __spreadArray([void 0], items, false)))();
}
var numberArray = getArray([1, 2, 3, 4]);
console.log('Number Array:', numberArray);
var strArray = getArray(['Nikhil', 'Alex', 'John']);
console.log('String Array:', strArray);
//*Type Assertions in TypeScript
console.log('---Type Assertions in TypeScript---');
var someValue = 'This is a string';
var strLength = someValue.length;
console.log("String Length:".concat(strLength));
