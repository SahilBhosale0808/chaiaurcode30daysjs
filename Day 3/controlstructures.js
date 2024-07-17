// Day 3: Control Structures
// Tasks/Activities:
// Activity 1: If-Else Statements
// • Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

let number = -12;
if (number > 0) {
  console.log(number, "is positive.");
} else if (number < 0) {
  console.log(number, "is negative.");
} else {
  console.log(number, "is zero.");
}

// • Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

let age = 22;
if (age >= 18) {
  console.log("The person is eligible to vote.");
} else {
  console.log("The person is not eligible to vote.");
}

// Activity 2: Nested If-Else Statements
// • Task 3: Write a program to find the largest of three numbers using nested if-else statements.

let num1 = 10;
let num2 = 25;
let num3 = 7;
let largestNumber;
if (num1 >= num2 && num1 >= num3) {
  largestNumber = num1;
} else if (num2 >= num1 && num2 >= num3) {
  largestNumber = num2;
} else {
  largestNumber = num3;
}
console.log("The largest number is:", largestNumber);

// Activity 3: Switch Case
// • Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

let dayNumber = 3;
switch (dayNumber) {
  case 1:
    console.log("Day of the week:", "Monday");
    break;
  case 2:
    console.log("Day of the week:", "Tuesday");
    break;
  case 3:
    console.log("Day of the week:", "Wednesday");
    break;
  case 4:
    console.log("Day of the week:", "Thursday");
    break;
  case 5:
    console.log("Day of the week:", "Friday");
    break;
  case 6:
    console.log("Day of the week:", "Saturday");
    break;
  case 7:
    console.log("Day of the week:", "Sunday");
    break;
  default:
    console.log("Invalid day number (1-7)");
}

// • Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

let score = 85;
switch (true) {
  case score >= 90:
    console.log("Grade:", "A");
    break;
  case score >= 80:
    console.log("Grade:", "B");
    break;
  case score >= 70:
    console.log("Grade:", "C");
    break;
  case score >= 60:
    console.log("Grade:", "D");
    break;
  default:
    console.log("Grade:", "F");
}

// Activity 4: Conditional (Ternary) Operator
// • Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

let numberEvenOrOdd = 12; 
let evenOdd = numberEvenOrOdd % 2 === 0 ? "Even" : "Odd";
console.log("The number is:", evenOdd);

// Activity 5: Combining Conditions
// • Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let year = 2028;
let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
console.log("Is", year, "a leap year?", isLeapYear);

// Feature Request:
// 1. Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.

function checkNumber(number) {
  if (number > 0) {
    console.log("The number is positive.");
  } else if (number < 0) {
    console.log("The number is negative.");
  } else {
    console.log("The number is zero.");
  }
}
let num = 12;
checkNumber(num);


// 2. Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result.

function checkVotingEligibility(age) {
  if (age >= 18) {
    console.log("The person is eligible to vote.");
  } else {
    console.log("The person is not eligible to vote.");
  }
}
let personAge = 15;
checkVotingEligibility(personAge);


// 3. Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.

function getDayName(dayNumber) {
  switch (dayNumber) {
    case 1:
      console.log("Day of the week:", "Monday");
      break;
    case 2:
      console.log("Day of the week:", "Tuesday");
      break;
    case 3:
      console.log("Day of the week:", "Wednesday");
      break;
    case 4:
      console.log("Day of the week:", "Thursday");
      break;
    case 5:
      console.log("Day of the week:", "Friday");
      break;
    case 6:
      console.log("Day of the week:", "Saturday");
      break;
    case 7:
      console.log("Day of the week:", "Sunday");
      break;
    default:
      console.log("Invalid day number (1-7)");
  }
}
let today = 3;
getDayName(today);


// 4. Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade.

function assignGrade(score) {
  switch (
    true // Using a truthy expression for flexibility
  ) {
    case score >= 90:
      console.log("Grade:", "A");
      break;
    case score >= 80:
      console.log("Grade:", "B");
      break;
    case score >= 70:
      console.log("Grade:", "C");
      break;
    case score >= 60:
      console.log("Grade:", "D");
      break;
    default:
      console.log("Grade:", "F");
  }
}

let studentScore = 95;
assignGrade(studentScore);

// 5. Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and logs the result.

function isLeapYearCheck(year) {
  let isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  console.log("Is", year, "a leap year?", isLeap);
}
let currentYear = 2024;
isLeapYearCheck(currentYear);
