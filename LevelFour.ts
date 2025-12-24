//*Level4:Objects,Arrays & Loops
console.log("Level 4: Objects, Arrays & Loops");

//*Exercise 1: Create an Array of user and loop through them and print their names
console.log("Exercise 1: Create an Array of user and loop through them and print their names");
let userArray: string[] = ["Nikhil", "jhon", "smith", "david"];
for (let i = 0;i < userArray.length; i++) {
    console.log(userArray[i]);
}

//*Exercise 2:Create a function that  takes an array of number and return the highest number
console.log("Exercise 2:Create a function that  takes an array of number and return the highest number");
function getHighestNumber(values:number[]):number {
    return Math.max(...values);
}
let numbersArray: number[] = [10, 25, 5, 78, 45, 99, 23];
let highestNumber: number = getHighestNumber(numbersArray);
console.log("The highest number is: " + highestNumber);

//*Exercise 3:create a function that filter even number from an array
console.log("Exercise 3:create a function that filter even number from an array");
function filterEvenNumbers(values:number[]):number[] {
    return values.filter(num => num % 2 === 0);
}
let mixedNumbersArray: number[] = [10, 25, 5, 78, 45, 99, 23, 64, 82];
let evenNumbersArray: number[] = filterEvenNumbers(mixedNumbersArray);
console.log("Even numbers are: " + evenNumbersArray);

//*Exercise 4:Create a interface with readonly properties
console.log("Exercise 4:Create a interface with readonly properties");
interface Person {
    readonly name: string;
    readonly age: number;
}
let person1: Person = { name: "Nikhil", age: 25 };
console.log("Person Name: " + person1.name + ", Age: " + person1.age);

//*Exercise 5:Create a tuple that store id(number, username(string)
console.log("Exercise 5:Create a tuple that store id(number, username(string)");
let userTuple: [number, string] = [1, "Nikhil"];
console.log("User ID: " + userTuple[0] + ", Username: " + userTuple[1]);