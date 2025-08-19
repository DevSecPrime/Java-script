const prompt = require("prompt-sync")();

let discount = 0;
const amount = Number(prompt("What is your amount? "));
if (isNaN(amount)) console.log("Please enter valid input");
else if (amount > 0 && amount <= 5000) discount = 0;
else if (amount > 5000 && amount <= 7000) discount = 5;
else if (amount > 7000 && amount <= 9000) discount = 10;
else if (amount > 9000) discount = 20;
else console.log("Don't enter negative input");

console.log("Total amount is: ", amount);
console.log("Discount you got: " + discount + "%");

const discountAmount = Math.floor((discount * amount) / 100);

console.log("Discount amount: ", discountAmount);
const payableAmount = amount - discountAmount;
console.log("Payable amount is: ", payableAmount);
