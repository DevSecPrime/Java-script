const prompt = require("prompt-sync")();
const input = prompt("Please, enter the value of n: ");

console.log(input);

if ([null, "null", "", "undefined"].includes(input)) {
  console.log("Cancelled");
} else {
  let n = Number(input);
  if (isNaN(n)) {
    console.log("Invalid input");
  } else {
    if (n > 0) {
      let sum = 0;
      for (let i = 1; i <= n; i++) {
        sum = sum + i;
      }
      console.log("Result: ", sum);
    } else {
      console.log("Number must be more than 0 and +VE");
    }
  }
}
