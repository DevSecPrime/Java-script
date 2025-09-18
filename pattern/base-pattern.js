const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the value of n: "));
console.log("n: ", n);

//Base star pattern
// Enter the value of n: 5
// n:  5
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= n; j++) {
    process.stdout.write("* ");
  }
  console.log();
}
