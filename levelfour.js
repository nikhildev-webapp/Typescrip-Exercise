//*Level4:Objects,Arrays & Loops
console.log("Level 4: Objects, Arrays & Loops");
//*Exercise 1: Create an Array of user and loop through them and print their names
console.log("Exercise 1: Create an Array of user and loop through them and print their names");
var userArray = ["Nikhil", "jhon", "smith", "david"];
for (var i = 0; i < userArray.length; i++) {
    console.log(userArray[i]);
}
//*Exercise 2:Create a function that  takes an array of number and return the highest number
console.log("Exercise 2:Create a function that  takes an array of number and return the highest number");
function getHighestNumber(values) {
    return Math.max.apply(Math, values);
}
var numbersArray = [10, 25, 5, 78, 45, 99, 23];
var highestNumber = getHighestNumber(numbersArray);
console.log("The highest number is: " + highestNumber);
//*Exercise 3:create a function that filter even number from an array
console.log("Exercise 3:create a function that filter even number from an array");
function filterEvenNumbers(values) {
    return values.filter(function (num) { return num % 2 === 0; });
}
var mixedNumbersArray = [10, 25, 5, 78, 45, 99, 23, 64, 82];
var evenNumbersArray = filterEvenNumbers(mixedNumbersArray);
console.log("Even numbers are: " + evenNumbersArray);
//*Exercise 4:Create a interface with readonly properties
console.log("Exercise 4:Create a interface with readonly properties");
var person1 = { name: "Nikhil", age: 25 };
console.log("Person Name: " + person1.name + ", Age: " + person1.age);
//*Exercise 5:Create a tuple that store id(number, username(string)
console.log("Exercise 5:Create a tuple that store id(number, username(string)");
var userTuple = [1, "Nikhil"];
console.log("User ID: " + userTuple[0] + ", Username: " + userTuple[1]);
