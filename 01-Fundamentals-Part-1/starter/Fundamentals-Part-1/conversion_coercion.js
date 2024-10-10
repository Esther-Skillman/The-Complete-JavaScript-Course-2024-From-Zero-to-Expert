// TYPE CONVERSION AND COERCION

// Conversion:
const inputYear = '2004';
console.log(inputYear + 18); //Prints 200418
console.log(Number(inputYear) + 18); // Prints 2022

console.log(Number('Esther')); // Prints NaN (not a number - an invalid number)
console.log(typeof NaN); // Proof Nan is an invalid number (result = number)

// Other two conversions
console.log(String(24));
console.log(Boolean(1));

// Coercion
console.log(`I am ` + 20 + ` years old`); // + triggers coercion from numbers to string
console.log(`23` - `10` - 3) // Prints 10 because - triggers REVERSE (applies for * / also): coercion from string to numbers
console.log(`23` + `10` + 3) // Prints 23103

let n = '1' + 1; // 11
n = n - 1; // 11 -1
console.log(n) // 10

let m = 2 + 3 + 4 + '5';
console.log(m); // Prints 95