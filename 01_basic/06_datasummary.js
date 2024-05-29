//-------------Two Types of Data Types------------------------

//--------------1. Primitive Datatypes(value type)-------------------------
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt 

const score = 100;
const scoreValue = 100.3

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
const Id = Symbol('123');
const anotherId = Symbol('123');

const bigNumber = 565375364784552587907985765n

//---------------2. Non-Primitive Dataypes(reference type)--------------------
// Array, Ojects, Functions

const flowers = ["Rose", "Lily", "Daffodils", "Champa"];

let user ={
    name : "Farhat",
    age : 27

};

const myFunction = function() {
    console.log("hello");
}

console.log(typeof(varName));

//JS is dynamically typed language 