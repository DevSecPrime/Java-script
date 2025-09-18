
//Inverted right aligned pattern
// Enter the value of n: 5
// n:  5

// * * * * *
//   * * * *
//     * * *
//       * *
//         * 
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the value of n: "));
console.log("n: ", n);

for (let i = n; i >= 1; i--) {
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write("  ");
  }

  for (j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log();
}
