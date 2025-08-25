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
    //Correct but not efficient
    // let isPrime = true;
    // for (let i = 2; i <= Math.floor(n / 2); i++) {
    //   if (n % i === 0) {
    //     isPrime = false;
    //     break;
    //   }
    // }
    // console.log(isPrime);

    console.log(checkPrime(n));
  }
}

//Special method --- time complexity o(n/2)
function checkPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
