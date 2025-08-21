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
      //Right but not optimized --- n = 1000 loop will run 1000times
      //   for (let i = 1; i <= n; i++) {
      //     if (n % i === 0) {
      //       console.log("ans: ", i);
      //     }
      //   }

      //Right & optimized --- n = 1000 loop will run 1000/2 --> 500 times ---> Enhance the performance
      for (let i = 1; i <= Math.floor(n / 2); i++) {
        if (n % i === 0) {
          console.log("ans: ", i);
        }
        console.log("ans: ", n);
      }
    } else {
      console.log("Number must be more than 0 and +VE");
    }
  }
}
