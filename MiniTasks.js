//*Real world Mini Tasks
console.log("Mini Tasks");
//*Task-1-Create a todo type and Add todos mark them complete and filter out the completed todos
console.log("Task-1-Create a todo type and Add todos mark them complete and filter out the completed todos");
var todos = [
    { title: "Learn TypeScript", body: "Understand the basics of TypeScript", complete: true },
    { title: "Build a project", body: "Create a small project using TypeScript", complete: false },
    { title: "Review code", body: "Go through the code and optimize it", complete: true },
    { title: "Write tests", body: "Write unit tests for the project", complete: false }
];
console.log('All todos:', todos);
var completedTodos = todos.filter(function (todo) { return todo.complete; });
console.log('Completed todos:', completedTodos);
//*Task-2- create an Expense type: amount ,categgory, date, calculate total expenses
console.log("Task-2- create an Expense type: amount ,categgory, date, calculate total expenses");
var expenses = [
    { amount: 50, category: "Food", date: new Date("2024-01-10") },
    { amount: 20, category: "Transport", date: new Date("2024-01-11") },
    { amount: 100, category: "Shopping", date: new Date("2024-01-12") }
];
console.log('Expenses:', expenses);
var totalExpenses = expenses.reduce(function (total, expense) { return total + expense.amount; }, 0);
console.log('Total expenses:', totalExpenses);
//*Task-3-Create a Student grading system: calculate grades based on marks
console.log("Task-3-Create a Student grading system: calculate grades based on marks");
var students = [
    { name: "Alice", marks: 85 },
    { name: "Bob", marks: 72 },
    { name: "Charlie", marks: 90 }
];
console.log('Students:', students);
var getGrade = function (marks) {
    if (marks >= 90)
        return 'A';
    else if (marks >= 80)
        return 'B';
    else if (marks >= 70)
        return 'C';
    else if (marks >= 60)
        return 'D';
    else
        return 'F';
};
console.log('Student Grades:');
students.forEach(function (student) {
    console.log("".concat(student.name, ": ").concat(getGrade(student.marks)));
});
//*Task-4-Create a Bank Account object:deposit, withdraw, check balance
console.log("Task-3-Create a Bank Account object:deposit, withdraw, check balance");
var BankAccount = /** @class */ (function () {
    function BankAccount(initialBalance) {
        this.balance = initialBalance;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
        console.log("Deposited: $".concat(amount, ". New balance: $").concat(this.balance));
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        }
        else {
            this.balance -= amount;
            console.log("Withdrew: $".concat(amount, ". New balance: $").concat(this.balance));
        }
    };
    BankAccount.prototype.checkBalance = function () {
        return this.balance;
    };
    return BankAccount;
}());
var myAccount = new BankAccount(100);
myAccount.deposit(50);
myAccount.withdraw(30);
console.log("Current balance: $".concat(myAccount.checkBalance()));
//*Task-5-Create a Login function: Accepts username and password. retrurns success or error using union types
console.log("Task-5-Create a Login function: Accepts username and password. retrurns success or error using union types");
function login(username, password) {
    var validUsername = "user";
    var validPassword = "pass123";
    if (username === validUsername && password === validPassword) {
        return { success: true, message: "Login successful" };
    }
    else {
        return { success: false, error: "Invalid username or password" };
    }
}
var result = login("user1", "pass123");
if (result.success) {
    console.log(result.message);
}
else {
    console.log(result.error);
}
