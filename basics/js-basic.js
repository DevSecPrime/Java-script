const prompt = require("prompt-sync")();
// Sum of two numbers
function sum(a, b) {
  return a + b;
}

let result = sum(4, 6);
console.log("sum is: ", result);

//concatenation

let a = "12";
let b = 13;
console.log("concatenation: ", a + b); // + is also used for concat
console.log("type will be : - ", typeof (a + b));

//basic understanding
a = 10;
b = 20;

console.log("Hello, Prime " + a + b); ///will print string===> Hello, Prime 1020
console.log(a + b + " Hello, Prime"); // will prime number + string = string

//Take input from user
let age = prompt("Enter your age: ");
console.log("age is ", age, typeof age);

//Type casting: converting one type to another called ad type casting
age = Number(age);
console.log("age is ", age, typeof age);
