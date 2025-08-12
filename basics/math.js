// math.js
// =====================================
// JAVASCRIPT MATH OBJECT FUNCTIONS
// =====================================
// The Math object in JavaScript provides properties and methods for mathematical constants and calculations.
// All Math methods are static (use Math.methodName()) — you do not create a Math object.

// ------------------------
// MATH CONSTANTS
// ------------------------
console.log("Math.PI =", Math.PI); // 3.141592653589793 → Pi constant
console.log("Math.E =", Math.E); // 2.718281828459045 → Euler's number
console.log("Math.SQRT2 =", Math.SQRT2); // 1.4142135623730951 → Square root of 2
console.log("Math.SQRT1_2 =", Math.SQRT1_2); // 0.7071067811865476 → Square root of 1/2
console.log("Math.LN2 =", Math.LN2); // 0.6931471805599453 → Natural log of 2
console.log("Math.LN10 =", Math.LN10); // 2.302585092994046 → Natural log of 10
console.log("Math.LOG2E =", Math.LOG2E); // 1.4426950408889634 → log2(e)
console.log("Math.LOG10E =", Math.LOG10E); // 0.4342944819032518 → log10(e)

// ------------------------
// BASIC ROUNDING METHODS
// ------------------------
console.log("Math.round(4.5) =", Math.round(4.5)); // → 5 (rounds to nearest integer)
console.log("Math.floor(4.9) =", Math.floor(4.9)); // → 4 (rounds DOWN to nearest integer)
console.log("Math.ceil(4.1) =", Math.ceil(4.1)); // → 5 (rounds UP to nearest integer)
console.log("Math.trunc(4.9) =", Math.trunc(4.9)); // → 4 (removes decimal part without rounding)

// ------------------------
// MAXIMUM & MINIMUM
// ------------------------
console.log("Math.max(10, 20, 5) =", Math.max(10, 20, 5)); // → 20
console.log("Math.min(10, 20, 5) =", Math.min(10, 20, 5)); // → 5

// ------------------------
// POWER & ROOTS
// ------------------------
console.log("Math.sqrt(16) =", Math.sqrt(16)); // → 4
console.log("Math.cbrt(27) =", Math.cbrt(27)); // → 3 (cube root)
console.log("Math.pow(2, 3) =", Math.pow(2, 3)); // → 8 (2³)
console.log("2 ** 3 =", 2 ** 3); // Alternative → 8

// ------------------------
// RANDOM NUMBER GENERATION
// ------------------------
// Math.random() → generates a floating-point number between 0 (inclusive) and 1 (exclusive)
console.log("Math.random() =", Math.random());
// Example: random integer between 1 and 10
console.log("Random int 1-10 =", Math.floor(Math.random() * 10) + 1);

// ------------------------
// ABSOLUTE VALUE & SIGN
// ------------------------
console.log("Math.abs(-5) =", Math.abs(-5)); // → 5 (removes sign)
console.log("Math.sign(-5) =", Math.sign(-5)); // → -1 (negative)
console.log("Math.sign(0) =", Math.sign(0)); // → 0
console.log("Math.sign(5) =", Math.sign(5)); // → 1 (positive)

// ------------------------
// TRIGONOMETRIC FUNCTIONS (angles in radians)
// ------------------------
console.log("Math.sin(Math.PI / 2) =", Math.sin(Math.PI / 2)); // → 1
console.log("Math.cos(Math.PI) =", Math.cos(Math.PI)); // → -1
console.log("Math.tan(Math.PI / 4) =", Math.tan(Math.PI / 4)); // → 1
console.log("Math.asin(1) =", Math.asin(1)); // → 1.5707963267948966 (π/2)
console.log("Math.acos(0) =", Math.acos(0)); // → 1.5707963267948966 (π/2)
console.log("Math.atan(1) =", Math.atan(1)); // → 0.7853981633974483 (π/4)
console.log("Math.atan2(1, 1) =", Math.atan2(1, 1)); // → 0.7853981633974483

// ------------------------
// EXPONENTIAL & LOGARITHMIC
// ------------------------
console.log("Math.exp(1) =", Math.exp(1)); // → e^1 ≈ 2.718
console.log("Math.log(1) =", Math.log(1)); // → 0 (natural log)
console.log("Math.log10(100) =", Math.log10(100)); // → 2 (base-10 log)
console.log("Math.log2(8) =", Math.log2(8)); // → 3 (base-2 log)

// ------------------------
// HYPERBOLIC FUNCTIONS
// ------------------------
console.log("Math.sinh(1) =", Math.sinh(1)); // hyperbolic sine
console.log("Math.cosh(1) =", Math.cosh(1)); // hyperbolic cosine
console.log("Math.tanh(1) =", Math.tanh(1)); // hyperbolic tangent

// ------------------------
// CLAMPING & MISC
// ------------------------
console.log("Math.hypot(3, 4) =", Math.hypot(3, 4)); // → 5 (Pythagorean theorem)
console.log("Math.clz32(1) =", Math.clz32(1)); // Count leading zeros in 32-bit binary
console.log("Math.fround(5.5) =", Math.fround(5.5)); // Nearest 32-bit float representation
console.log("Math.imul(2, 4) =", Math.imul(2, 4)); // Integer multiplication (32-bit safe)

// ------------------------
// DEGREE ↔ RADIAN CONVERSION HELPERS
// ------------------------
function degToRad(deg) {
  return deg * (Math.PI / 180);
}
function radToDeg(rad) {
  return rad * (180 / Math.PI);
}
console.log("90° in radians =", degToRad(90));
console.log("π/2 in degrees =", radToDeg(Math.PI / 2));
