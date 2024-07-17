// Day 2: Operators Tasks/Activities:
// Activity 1: Arithmetic Operations

// • Task 1: Write a program to add two numbers and log the result to the console.

let runsScoredByRohit = 125;
let runsScoredByVirat = 78;
let totalRuns = runsScoredByRohit + runsScoredByVirat;
console.log("Total runs scored by Rohit Sharma and Virat Kohli:", totalRuns);

// • Task 2: Write a program to subtract two numbers and log the result to the console.

let totalOvers = 50;
let oversBowledByAshwin = 10;
let oversRemaining = totalOvers - oversBowledByAshwin;
console.log("Overs remaining after Ashwin's spell:", oversRemaining);

// • Task 3: Write a program to multiply two numbers and log the result to the console.

let strikeRate = 140;
let ballsFaced = 60;
let runsScored = (strikeRate * ballsFaced) / 100;
console.log("Total runs scored based on strike rate:", runsScored.toFixed(2));

// • Task 4: Write a program to divide two numbers and log the result to the console.

let totalWickets = 10;
let bowlersUsed = 5;
let wicketsPerBowler = totalWickets / bowlersUsed;
console.log("Average wickets taken per bowler:", wicketsPerBowler.toFixed(2));

// • Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.

let totalMatchesPlayed = 32;
let matchesPerSeries = 3;
let remainingMatches = totalMatchesPlayed % matchesPerSeries;
console.log(
  "Number of remaining matches after completing a series:",
  remainingMatches
);

// Activity 2: Assignment Operators
// • Task 6: Use the += operator to add a number to a variable and log the result to the console.

let totalSixesHit = 18;
totalSixesHit += 2; // Imagine Rohit Sharma hits 2 more sixes
console.log("Total sixes hit by Rohit Sharma:", totalSixesHit);

// • Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.

let totalEconomyRate = 3.2; // Assuming a bowler's economy rate
totalEconomyRate -= 0.1; // Imagine the bowler improves their economy
console.log(
  "Improved economy rate of the bowler:",
  totalEconomyRate.toFixed(2)
);

// Activity 3: Comparison Operators
// • Task 8: Write a program to compare two numbers using > and < and log the result to the console.

let currentYear = 2024;
let worldCupYear = 2023;
console.log(
  "Is the current year greater than the last World Cup year?",
  currentYear > worldCupYear
);
console.log(
  "Is the current year less than the last World Cup year?",
  currentYear < worldCupYear
);

// • Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.

let teamIndiaRank = 1;
let teamAustraliaRank = 2;
console.log(
  "Is India ranked higher than or equal to Australia?",
  teamIndiaRank >= teamAustraliaRank
);
console.log(
  "Is India ranked lower than or equal to Australia?",
  teamIndiaRank <= teamAustraliaRank
);

// • Task 10: Write a program to compare two numbers using == and === and log the result to the console.

let jerseyNum1 = "07";
let actualJerseyNum = 7;
console.log("jerseyNum1 == actualJerseyNum:", jerseyNum1 == actualJerseyNum);
console.log("jerseyNum1 === actualJerseyNum:", jerseyNum1 === actualJerseyNum);

// Activity 4: Logical Operators
// • Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.

let playerInForm = true;
let hasEnoughExperience = true;
console.log(
  "Is the player selected for the team (both conditions true)?",
  playerInForm && hasEnoughExperience
);

//  • Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.

let isBatsman = false;
let isBowler = true;
console.log(
  "Is the player selected for the team (at least one condition true)?",
  isBatsman || isBowler
);

// • Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.

let isDayMatch = false;
console.log("Is it a night match?", !isDayMatch);

// Activity 5: Ternary Operator
// • Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

let score = -42;
let scoreStatus = score > 0 ? "Positive" : "Non-Positive";
console.log("Score status:", scoreStatus);

// Feature Request:
// 1. Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.

let num1 = 100;
let num2 = 50;
console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);
console.log("Remainder:", num1 % num2);

// 2. Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.

let runScored = 84;
let requiredScore = 120;
console.log(
  "Is the score higher than required (>)?",
  runScored > requiredScore
);
console.log("Is the score lower than required (<)?", runScored < requiredScore);
console.log("Is the score enough to win (>=)?", runScored >= requiredScore);

let isWicketKeeper = false;
let canBowlSeam = true;
console.log(
  "Can the player play as wicket-keeper OR bowler (||)?",
  isWicketKeeper || canBowlSeam
);
console.log("Is the player NOT a wicket-keeper (!)?", !isWicketKeeper);

// 3. Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.

let totalDots = 15;
let dotBallComment =
  totalDots > 10 ? "Too many dot balls!" : "Decent scoring rate.";
console.log("Comment on dot balls:", dotBallComment);

