// Simple Ternary Example
// ----------------------
// Syntax: condition ? value_if_true : value_if_false
// It is a shorter way to write if-else conditions.

let age = 20;
let result = age >= 18 ? "You are an adult" : "You are a minor";

console.log("Simple Ternary Result:", result);
// Here:
// age >= 18 → true
// So, result = "You are an adult"

// Nested Ternary Example
// ----------------------
// Syntax: condition1 ? value_if_true
//         : condition2 ? value_if_true
//         : condition3 ? value_if_true : value_if_false
//
// It allows checking multiple conditions in a single line.

let marks = 75;
let grade = marks >= 90 ? "A+" : marks >= 75 ? "A" : marks >= 50 ? "B" : "Fail";

console.log("Nested Ternary Result:", grade);
// Here:
// marks = 75
// (marks >= 90) → false
// (marks >= 75) → true → grade = "A"
