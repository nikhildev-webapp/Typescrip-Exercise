
//*Level:Basic Types & Varibales in TypeScript
//*Exercise 1
console.log('Exercise1:Declare variable with correct types');
let Name: string = 'Nikhil';
let age: number = 20;
let isStudent: boolean = true;
console.log(`Name: ${Name}, Age: ${age}, Is Student: ${isStudent}`);
console.log('Types of variables:', typeof Name, typeof age, typeof isStudent);

//*Exercise 2
console.log('Exercise2: create a varibale that store either a string or number, Assign both values one by one');
let userId: string | number;
userId = 'User1';
console.log(`UserId as string: ${userId}`);
userId = 101;
console.log(`UserId as number: ${userId}`); 

//Exercise 3
console.log('Exercise3:Create a array that stores only numbers, Add 5 number to it');
let numberArray: number[] = [1, 2, 3, 4];
console.log('Initial number array:', numberArray);
numberArray.push(5);
console.log('Number array after adding number', numberArray);

//Exercise 4
console.log('Exercise4:create an array that can store string or number values');
let mixedArray: (string | number)[] = ['Nikhil', 25, 'Developer', 500000];
console.log('Mixed array:', mixedArray);

//*Exercise 5
console.log('Exercise5:Use type interface, Declare a variable and assign a value,');
type Student = {
    name: string,
    age: number,
    Class: string | number,
    ispresent:boolean,
}

let Student: Student = {
    name: 'Nikhil',
    age: 20,
    Class: 'Final Year',
    ispresent:true,
}

console.log('Student Details:', Student);