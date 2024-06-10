let age = 30;
age = 31; //Mutated variable

const birthYear = 1991; //Cannot be mutated

// const name; //Uncaught SyntaxError: Missing initializer in const declaration

// Try to have as little mutations in your code as possible - they create bugs

var job = 'programmer'; //Old way of defining variables prior to ES6 
job = 'teacher';

lastName = 'Skillman';
console.log(lastName); // Doesn't creat a variable on the scope - JS creates a property on the global object (not a good idea)