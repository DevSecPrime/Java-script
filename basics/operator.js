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
let x = 7;
let y = 10;
console.log("Absolute difference:", Math.abs(x - y)); // → 3

// ===============================
// 7. Math.ceil()
// ===============================
// Rounds UP to the nearest integer (no matter what decimal is)
console.log("Math.ceil(4.1) =", Math.ceil(4.1)); // → 5
console.log("Math.ceil(4.9) =", Math.ceil(4.9)); // → 5
console.log("Math.ceil(-4.1) =", Math.ceil(-4.1)); // → -4 (less negative)
console.log("Math.ceil(-4.9) =", Math.ceil(-4.9)); // → -4 (moves towards zero)

// RELATIONAL OPERATORS IN JAVASCRIPT
// These operators compare values and return a boolean (true/false).

x = 10;
y = 20;
let z = "10"; // z is a string, not a number

// ------------------------
// Greater than ( > )
// ------------------------
console.log("x > y:", x > y);
// false → 10 is NOT greater than 20

// ------------------------
// Less than ( < )
// ------------------------
console.log("x < y:", x < y);
// true → 10 is less than 20

// ------------------------
// Greater than or equal to ( >= )
// ------------------------
console.log("x >= 10:", x >= 10);
// true → 10 is equal to 10, so condition is satisfied

// ------------------------
// Less than or equal to ( <= )
// ------------------------
console.log("y <= 15:", y <= 15);
// false → 20 is NOT less than or equal to 15

// ------------------------
// Equal (loose) ==
// ------------------------
// Performs type conversion if needed ('10' → 10 before comparing)
console.log("x == z:", x == z);
// true → '10' (string) is converted to 10 (number)

// ------------------------
// Equal (strict) ===
// ------------------------
// Checks BOTH value and type — no type conversion
console.log("x === z:", x === z);
// false → 10 (number) is NOT the same type as '10' (string)

// ------------------------
// Not equal (loose) !=
// ------------------------
// Performs type conversion before comparing
console.log("x != z:", x != z);
// false → After converting '10' to number, 10 == 10

// ------------------------
// Not equal (strict) !==
// ------------------------
// Checks BOTH value and type without type conversion
console.log("x !== z:", x !== z);
// true → Values are equal but types are different (number vs string)

console.log("\n===== LOGICAL OPERATORS =====");
// Logical operators work with boolean values (true/false)

// Example booleans
let a = true;
let b = false;

// ------------------------
// Logical AND (&&)
// ------------------------
// true only if BOTH are true
console.log("a && b =", a && b);
// false → one is false
console.log("x > 5 && y > 15 =", x > 5 && y > 15);
// true → both conditions true

// ------------------------
// Logical OR (||)
// ------------------------
// true if AT LEAST one is true
console.log("a || b =", a || b);
// true → one is true
console.log("x > 15 || y > 15 =", x > 15 || y > 15);
// true → second condition is true

// ------------------------
// Logical NOT (!)
// ------------------------
// Flips true → false, false → true
console.log("!a =", !a);
// false → a was true
console.log("!(x > y) =", !(x > y));
// true → x > y was false, so negating gives true

//Unary operator
console.log("-----Unary operator------");
a = 11;
b = 22;

c = a + b + a++ + b++ + ++a + ++b;
console.log("a = ", a);
console.log("b = ", b);
console.log("c = ", c);
