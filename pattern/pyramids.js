// pyramids

// Enter the value of n: 5.
// n:  5
// *
// * *
// * * *
// * * * *
// * * * * *

const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the value of n: "));
console.log("n: ", n);

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log();
}

console.log();
console.log();
console.log("reflected pyramid");

// * * * * *
// * * * *
// * * *
// * *
// *
for (let i = 1; i <= n; i++) {
  for (let j = 5; j >= i; j--) {
    process.stdout.write("* ");
  }
  console.log();
}
