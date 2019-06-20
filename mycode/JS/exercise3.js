// change everything below to the newer Javascript!

// let + const
let a = 'test';
let b = true;
let c = 789;
a = 'test2';


// Destructuring
let person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

let {firstName, lastName, age, eyeColor} = person;

// Object properties
var a1 = 'test';
var b1 = true;
var c1 = 789;

var okObj = {
  a1, b1, c1
};

const city = "Wenzhou";

// Template strings
var message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;


// default arguments
// default age to 10;
function isValidAge(age=10) {
    return age;
}

// Symbol
// Create a symbol: "This is my first Symbol"
const sym1 = Symbol("This is my first Symbol");

// Arrow functions
let whereAmI = (username, location) =>
 (username && location) ? "I am not lost" : "I am totally lost!";