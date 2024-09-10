let age = 30;
age = 31; //Mutated variable

const birthYear = 1991; //Cannot be mutated

// const name; //Uncaught SyntaxError: Missing initializer in const declaration

// Try to have as little mutations in your code as possible - they create bugs

var job = 'programmer'; //Old way of defining variables prior to ES6 
job = 'teacher';

lastName = 'Smith';

//Arithmetic
multiplication = 2 ** 3; // 2 to the power of 3
x = 3; // 3
x += 4; // 3 + 4 = 7
x -= 4; // 7 - 4 = 3
x++; // 3 + 1 = 4


console.log(x); // Doesn't create a variable on the scope - JS creates a property on the global object (not a good idea)