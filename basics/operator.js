// ===============================
// 1. Ternary Operator (?:)
// ===============================
// Syntax: condition ? valueIfTrue : valueIfFalse
let age = 18;
let canVote = age >= 18 ? "Yes, you can vote" : "No, you cannot vote yet";
console.log("Ternary Example:", canVote);
// If age >= 18 → "Yes, you can vote", else "No, you cannot vote yet"

// ===============================
// 2. Modulus Operator (%)
// ===============================
// It gives the remainder after division.
console.log("10 % 3 =", 10 % 3); // 3*3=9, remainder = 1
console.log("15 % 5 =", 15 % 5); // 5*3=15, remainder = 0
console.log("7 % 4 =", 7 % 4); // 4*1=4, remainder = 3

// Common use: Check even/odd
let num = 7;
console.log(num % 2 === 0 ? "Even" : "Odd"); // Odd

// ===============================
// 3. Math.random()
// ===============================
// Returns a random decimal number between 0 (inclusive) and 1 (exclusive)
let randomDecimal = Math.random();
console.log("Random decimal between 0 and 1:", randomDecimal);

// Example: Generate random number between 1 and 10
let random1to10 = Math.floor(Math.random() * 10) + 1;
console.log("Random integer between 1 and 10:", random1to10);

// ===============================
// 4. Math.floor()
// ===============================
// Rounds DOWN to the nearest integer (ignores decimal part)
console.log("Math.floor(4.9) =", Math.floor(4.9)); // → 4
console.log("Math.floor(4.1) =", Math.floor(4.1)); // → 4
console.log("Math.floor(-4.1) =", Math.floor(-4.1)); // → -5 (more negative)

// ===============================
// 5. Math.round()
// ===============================
// Rounds to the nearest integer
console.log("Math.round(4.4) =", Math.round(4.4)); // → 4 (less than .5 → down)
console.log("Math.round(4.5) =", Math.round(4.5)); // → 5 (.5 or more → up)
console.log("Math.round(-4.5) =", Math.round(-4.5)); // → -4 (towards zero)

// ===============================
// 6. Math.abs()
// ===============================
// Returns the absolute value (distance from 0, removes negative sign)
console.log("Math.abs(5) =", Math.abs(5)); // → 5
console.log("Math.abs(-5) =", Math.abs(-5)); // → 5
console.log("Math.abs(0) =", Math.abs(0)); // → 0

// Example: Difference between two numbers (always positive)
let x = 7,
  y = 10;
console.log("Absolute difference:", Math.abs(x - y)); // → 3

// ===============================
// 7. Math.ceil()
// ===============================
// Rounds UP to the nearest integer (no matter what decimal is)
console.log("Math.ceil(4.1) =", Math.ceil(4.1)); // → 5
console.log("Math.ceil(4.9) =", Math.ceil(4.9)); // → 5
console.log("Math.ceil(-4.1) =", Math.ceil(-4.1)); // → -4 (less negative)
console.log("Math.ceil(-4.9) =", Math.ceil(-4.9)); // → -4 (moves towards zero)
