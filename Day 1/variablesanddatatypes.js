// Day 1: Variables and Data Types
// Tasks/Activities:
// Activity 1: Variable Declaration
// • Task 1: Declare a variable using var, assign it a number, and log the value to the console.

var assignedNumber = 27;
console.log(assignedNumber);

// • Task 2: Declare a variable using let, assign it a string, and log the value to the console.

let assignedString = `Hell Yes JS!!`;
console.log(assignedString);

// Activity 2: Constant Declaration
// • Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.

const assignedBoolean = true;
console.log(assignedBoolean);

// Activity 3: Data Types
// • Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.

let numberVariable = 13;
let stringVariable = "Hello, JS world!";
let booleanVariable = true;
let objectVariable = { name: "Sahil", age: 22 };
let arrayVariable = [1, 2, 3, 4, 5];

console.log("Number:", numberVariable, typeof numberVariable);
console.log("String:", stringVariable, typeof stringVariable);
console.log("Boolean:", booleanVariable, typeof booleanVariable);
console.log("Object:", objectVariable, typeof objectVariable);
console.log("Array:", arrayVariable, typeof arrayVariable);

// Activity 4: Reassigning Variables
// • Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.

let captainName = "Virat";
captainName = "Rohit";
console.log(captainName);

// Activity 5: Understanding const
// • Task 6: Try reassigning a variable declared with const and observe the error.
const bestBowler = "Bumrah";
// bestBowler = 'Shaheen'
console.log(bestBowler);
// Attempting to reassign a constant will result in a TypeError. Uncomment the line above to see the error.

// Feature Request:
// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

let numberVar = 42;
let stringVar = "This is a string";
let booleanVar = true;
let objectVar = {
  name: "Surya",
  jerseyNumber: 63,
};
let arrayVar = [1, "DeGea", true];

console.log("Number:", numberVar, typeof numberVar);
console.log("String:", stringVar, typeof stringVar);
console.log("Boolean:", booleanVar, typeof booleanVar);
console.log("Object:", objectVar, typeof objectVar);
console.log("Array:", arrayVar, typeof arrayVar);

// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.

let bestIndianBatsman = "Sachin";
// Reassign a new value to the same variable
bestIndianBatsman = "Virat"; // This is allowed with let
console.log("After reassignment with let:", bestIndianBatsman);

const bestCoverDrive = "Virat Kohli";
// bestCoverDrive = 'Babar Azam';  // This will cause an error

console.log("Constant value (cannot be reassigned):", bestCoverDrive);
// Attempting to reassign a constant will result in a TypeError. Uncomment the line above to see the error.
