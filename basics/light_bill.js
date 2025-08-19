const prompt = require("prompt-sync")();
let unit = Number(prompt("What is you unit?")); //700
let amount = 0;

if (isNaN(unit)) {
  console.log("Please, enter valid input");
}

if (unit > 400) {
  amount = (unit - 400) * 13; //300*13 --> 3900
  unit = 400;
} //400 -- unit

if (unit > 200 && unit <= 400) {
  amount += (unit - 200) * 8; //400-200 ---> 200*8--->1600
  unit = 200;
} //200

if (unit > 100 && unit <= 200) {
  amount += (unit - 100) * 6; //200-100 --> 100*6---->600
  unit = 100;
} //100

amount += unit * 4; /// 100*4 --> 400 --> 400

//amount ---> 3900+1600+600+400 = 6500

console.log("light bill amount: ", amount);
