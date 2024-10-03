// let age = 30;
// age = 31; //Mutated variable
//
// //const birthYear = 1991; //Cannot be mutated
//
// // const name; //Uncaught SyntaxError: Missing initializer in const declaration
//
// // Try to have as little mutations in your code as possible - they create bugs
//
// //var job = 'programmer'; //Old way of defining variables prior to ES6
// //job = 'teacher';
//
// lastName = 'Smith';
//
// //Arithmetic
// multiplication = 2 ** 3; // 2 to the power of 3
// x = 3; // 3
// x += 4; // 3 + 4 = 7
// x -= 4; // 7 - 4 = 3
// x++; // 3 + 1 = 4
//
//
// console.log(x); // Doesn't create a variable on the scope by default - JS creates a property on the global object (not a good idea)

//Strings

// const firstName = "Esther";
// const job = "Student";
// const birthYear = 2004
// const year = 2024
//
// // Not fun string:
// const esther = "I'm " + firstName + ", a " + (year - birthYear) + ' year old ' + job + "!";
//
// console.log(esther);
//
// //TEMPLATE LITERALS (`): much more fun
// const newEsther = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`
//
// console.log(newEsther);
//
// console.log("Which speech marks should I use?")
//
// console.log(`Use backticks! It's standard and you don't have to decide :)`)
// //Incase you need to add a variable aswell, you don't need to go back and change the regular quotes to ` !
//
// console.log('String with \n\
// multiple \n\
// lines \n\ ');
// //Before ESXi (Definition: https://www.youtube.com/watch?v=-Hltydu9PXk&ab_channel=RobWillis)
//
// console.log(`String also with
// multiple
// lines`);
// //After ESXi - a lot cleaner

// const birthYear = 2004;
// const currentYear = 2024;
// const age = currentYear - birthYear;
// const isOldEnough = age >= 18;
//
// if (isOldEnough){
//     console.log(`Sarah can start to drive`)
// }
// else{
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is only ${age}! she can't drive yet. She needs to wait ${yearsLeft} more years until she can`)
// }
// // called an 'if' 'else' control structure
//
// let century; //needs to be defined outside if and else code blocks to be accessible outside of them
//
// if (birthYear <= 2000){
//     century = 20;
// } else {
//     century = 21
// }
// console.log(`Birth Century: ${century}`)

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