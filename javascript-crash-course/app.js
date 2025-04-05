// DATA TYPES
/*
    Data Type - String
    Can be declared with single quotes '', double quotes "", or back ticks ``
    0 based indexing
    Grab individual characters by using [] like arrays
*/
let username = "Joshua";
console.log('Hello World');
console.log("ASAP Frontend"[3]);
console.log(`Hello, ${username}!`);

/*
    Data Type - Numbers
    Can be Integers (negative/positive), or double(decimal)
    Perform arithmetic(+, -, *, /) 
    Follows PEMDAS
    Remainder (% - modulus)
*/
console.log(4 * 5 + (5 * 2)); 

/*
    Data Type - Booleans
    True(1) or False(0) values
    Conditional statements
    Comparison operators
*/
let value = 1;

if (value) {
    console.log('This is a true statement and the value or 1 is TRUE');
} else {
    console.log('This is a false statement and the value of 0 is FALSE');
}

let values = '1';

// Will return true because num gets raised to be a string and results will be true
if (values == 1) {
    console.log('True for value');
} else {
    console.log('False for value');
}

// Will return false because values is a string of the character 1 and the number value of 1 are not the same type 
if (values === 1) {
    console.log('True type and value');
} else {
    console.log('False for value or type');
}

/*
    Data Type - Null and Undefined
    Both mean the value of nothing
    When Null is used, someone intentionally stored the value as nothing/null (Ex. let string = null;)
    When Undefined is used, it means a variable has been declared but has not been assigned a value (it doesn't exist)
*/

// Purposely ASSIGNING the value of string to be null/nothing
let string = null;
console.log(string); // returns null

// Declared a variable but have not assigned it a value
let undefinedString;
console.log(undefinedString) // returns undefined since there is no value associated with the variable

/*
  Data Type - NaN (Not a Number)
  Trying to perform arithmetic with values that are not numbers   
 */
console.log(0 / 0);
console.log('Joshua' * 2);

// VARIABLES
/*
    3 ways to create a variable
        1. let - blocked scoped, can update values within scope but CANNOT re-declare within scope
        2. const - blocked scoped, the value remains the same within its scope, CANNOT be updated or re-declared
        3. var(outdated) - globally scoped, issues happen when variable outside of a function can be changed within a function
    Camel Case (userEmail)
*/
// Let variable declaration
let userEmail = 'madeupemail@yahoo.com';
let age = 29;
let userName = 'Joshua';
console.log(`${userEmail}, ${age}, ${userName}`);

userEmail = 'newEmail@yahoo.com';
age = 50;
userName = 'Hunter';
console.log(`${userEmail}, ${age}, ${userName}`);

// Const variable declaration
const points = 50;
console.log(points);

// ERROR EXAMPLE
// points = 100;
// console.log(points)

// ERROR EXAMPLE
// const points = 150;
// console.log(points);

// EXERCISE - Currency Converter
// $AUD to $USD Formula: AUD = USD * 1.5 (Estimate)

let USD = 1200;
let AUD = USD * 1.5; // Convert USD to AUD

console.log(`$${USD} US Dollars to Australian dollars will be $${AUD}`);

// Comparison Operators
/*
    Compare two values and return true or false
    >, <, >=, <=, ===(equal value and equal type), ==(equal to), !=(not equal), !==(not equal value or not equal type)
*/
console.log(10 > 5); // True
console.log(10 < 5); // False
console.log(10 >= 5); // True
console.log(10 <= 5); // False
console.log(10 === 5); // False
console.log('10' === 10); // False
console.log(10 === 10); // True
console.log('10' !== 10) // True
console.log(10 !== 10); // False
console.log('10' == 10); // True
console.log('10' == 5); // False
console.log(10 != '10'); // False
console.log(10 != '5'); // True

// Conditionals
let hasMembership = true;
let signedIn = true;

// If/else exercise - if user has a membership show welcome message, else if the user is signed in but not a member instruct to upgrade memebership, else show log in or upgrade membership
if (hasMembership && signedIn) {
    console.log("You're a member, Welcome Back!");
} else if (signedIn) {
    console.log('Upgrade Membership!');
} else {
    console.log("Please become a member or log in to view this page!");
}

// Logical Operators (&& - AND  || - OR)
/*
    Logical AND (both conditionals must be true to return true)
    ((true) && (true)) - return true
    ((true) && (false)) - return false
    ((false) && (true)) - return false
    ((false) && (false)) - return false

    Logical OR (one or both conditionals must be true to return true)
    ((true) || (true)) - return true
    ((true) || (false)) - return true
    ((false) || (true)) - return true
    ((false) || (false)) - return false
*/

let userAge = 20;
let hasID = false;

// AND logical operators both have to be true
if (userAge >= 21 && hasID) {
    console.log('You may enter the bar');
} else {
    console.log('You need to be older than 20 and have an ID to enter');
}

// OR logical operators one have to be true
if (userAge >= 21 || hasID) {
    console.log("I'm feeling nice, I only need one of these to enter");
} else {
    console.log("You're under 21 and don't have an ID, I cannot let you in");
}

// FALSY VALUES - considered false when converted into a boolean
/*
    1. undefined
    2. null 
    3. NaN
    4. 0
    5. "" (empty string)
    6. false
*/

if (undefined) {
    console.log('wait, its true??');
} else {
    console.log('undefined is false');
}

if (null) {
    console.log('wait, its true??');
} else {
    
    console.log('null is false');
}

if (NaN) {
    console.log('wait, its true??');
} else {
    console.log('Nan is false');
}

if (0) {
    console.log('wait, its true??');
} else {
    console.log('0 is false');
}

if ("") {
    console.log('wait, its true??');
} else {
    console.log('"" is false');
}

// TERNARY OPERATOR - a shortcut to write and if/else statement
// EXAMPLE - hasMembership ? "show video" : "hide video";
// condition ? true : false;

let salary = 100000;
salary > 50000 ? console.log("Nice! You make over $50k a year") : console.log("Keep working hard to earn more money!");

let isRaining = true;
isRaining ? console.log("No tee times today, it's raining") : console.log("Weather looks great, book a tee time!");

// Ternary operator exercise - if user is logged in and is a member -> show video, if user is logged out or not a member -> hide video
let loggedIn = true;
let isMember = true;

loggedIn && isMember ? console.log('Show video') : console.log('Hide video');

let holeInOne = true;
let str = holeInOne ? "Congrats you have a hole in one!" : "Keep playing, you will get one eventually!";
console.log(str);

// DRY - Don't Repeat Yourself
// LOOPS - Repeat the same block of code over and over until condition is false
/*
    For loops - use when iterations is known
    While loops - use when iterations is unknown and you want a block of code to run until the condition is eventually false
    Do While loops - use when you want the block of code to run ATLEAST once and while the condition is still true, keep running
*/
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

let golfHoles = 18;
while (golfHoles > 0) {
    console.log(`You still have ${golfHoles} holes to play!`);
    golfHoles -= 1;
}

let number = 4;
do {
    number -= 1;
    console.log(number);
} while (number > 0);

// For loop exercise - that loops through 1 to 15, if the number is odd (print "ASAP"), if the number is even (print "Frontend"), if the number is divisible by 5 (print "ASAP Frontend")
for (let i = 1; i <= 15; i++) {
    // divisble by 5 condition
    if (i % 5 === 0) {
        console.log("ASAP Frontend " + i);
    } else if (i % 2 !== 0) { // odd condition
        console.log("ASAP " + i);
    } else {
        console.log("Frontend " + i); // even condition
    }
}

// For loop exercise #2 - Print out all the characters from the string : "ASAP Frontend"
let loopString = "ASAP Frontend";

for (let i = 0; i < loopString.length; i++) {
    console.log(loopString[i]);
}

// Functions - reuseable blocks of code that perform a specific task
/*
    1. Function Declarations - starts with function keyword, name of the function, any parameters, and block of reuseable code
        EX. function greet(name) {
            return `Hello, ${name}`
        }
        console.log(greet('Josh')); // prints Hello, Josh

    2. Function Expressions - Can be named or annonymous, assigned to variables
        EX. const add = function(a, b) {
            return a + b;
        }
        console.log(add(5, 10)); // prints 15

    3. Arrow Functions - More concise way of writing JavaScript functions (zero parameters = (), one parameter doesn't need (), two+ parameters = ())
        EX. const multiply = (a, b) => {
            return a * b;    
        }
        console.log(multiply(5, 4)); // prints 20
*/

// Function Declaration
function greetUser(name) {
    console.log(`Hello, ${name}!`);
}

// Calling Function
greetUser('Joshua');

// Function Expression
const add = function(num1, num2) {
    return num1 + num2;
}
console.log(add(5, 10));

// Arrow Function
const multiply = (num1, num2) => {
    return num1 * num2;
}
console.log(multiply(5, 10));