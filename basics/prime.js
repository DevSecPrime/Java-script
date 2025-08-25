const prompt = require("prompt-sync")();
const input = prompt("Please enter the number: ");

console.log(input);

if ([null, "null", "", "undefined"].includes(input)) {
  console.log("Cancelled...");
} else {
  let n = Number(input);
  if (isNaN(input)) {
    console.log("Invalid input");
  } else {
    let isPrime = true;
    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
      if (n % i === 0) {
        isPrime = false;
        break;
      }
    }
    console.log(isPrime);
  }
}
