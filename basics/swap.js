//Swap two numbers - 3 methods

//Method 1 ---> Using extra variable
let a = 10;
let b = 20;
let c;

console.log("Before swapping:");
console.log("a =", a); // 5
console.log("b =", b);

// c = a; // c= 10, a = 10;
// a = b; //a=20, b=20;
// b = c; //b=10

// console.log("After swapping value of a: ", a);
// console.log("After swapping value of b: ", b);

//Method 2 ---> Using Mathematics --> no need to use extra variable
//a = a + b; // 10+20=30 new value of a = 30
//b = a - b; //30-20=10 new value of b = 10
//a = a - b; //a-b --> 30-10 = 20 new value of a = 20

//console.log("After swapping value of a: ", a);
//console.log("After swapping value of b: ", b);

//Method 3 ---> Using Array destructuring method
[a, b] = [b, a]; //Swap using array destructuring
//Print after swapping
console.log("After swapping:");
console.log("a =", a); // 10
console.log("b =", b); // 5
