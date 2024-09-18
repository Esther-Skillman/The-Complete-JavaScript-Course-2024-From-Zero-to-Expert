// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:
//
// 1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:
//
//     "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".
//
// 2. Modify the outputs above to use template literals to include the BMI values in the outputs.
//
//     Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".
//
//     Note: Don't round the BMI values. Leave them as they are.

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

/* Write your code below. Good luck! 🙂 */

// Task 1

// 1st approach
// Pros: higher and lower variables can be re-used improving flexibility, dynamic use of console.log,
//  separation of logic and output, adopts DRY principle (avoids repeating similar strings)
// Cons: More lines of code, extra variables could increase memory usage i.e. slower, unnecessary for MVP of challenge

let higher;
let lower;

if (BMIMark > BMIJohn){
    higher = 'Mark'
    lower = 'John'
}
else {
    higher = 'John'
    lower = 'Mark'
}
console.log(`${higher}'s BMI is higher than ${lower}'s!`)

// 2nd approach
// Pros: simple, more readable
// Cons: less flexible (logic and output are not seperated), repetitive (all console.log's would need to be changed)

if (BMIMark > BMIJohn){
    console.log(`Mark's BMI is higher than John's!`)
}
else {
    console.log(`John's BMI is higher than Mark's!`)
}