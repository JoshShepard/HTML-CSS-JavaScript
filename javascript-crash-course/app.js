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
    Can be Integers, negative/positive, or double(decimal)
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

// If/else if/else - if user has a membership show welcome message, else if the user is signed in but not a member instruct to upgrade memebership, else show log in or upgrade membership
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