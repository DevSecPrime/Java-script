//Voting system
const prompt = require("prompt-sync")();

let age = Number(prompt("What is your age ?"));

console.log(age);

if (isNaN(age)) {
  console.log("Wrong input!!");
} else if (age >= 18) {
  console.log("You have right to vote.");
} else {
  console.log("You have no right to vote!!");
}
