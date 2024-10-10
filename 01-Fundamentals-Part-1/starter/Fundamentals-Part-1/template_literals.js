//Strings
const firstName = "Esther";
const job = "Student";
const birthYear = 2004
const year = 2024

// Not fun string:
const esther = "Normal String: I'm " + firstName + ", a " + (year - birthYear) + ' year old ' + job + "!";

console.log(esther);

// //TEMPLATE LITERALS (`): much more fun
const newEsther = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`

console.log(newEsther);

console.log("Which speech marks should I use?")

console.log(`Use backticks! It's standard and you don't have to decide :)`)
//Incase you need to add a variable aswell, you don't need to go back and change the regular quotes to ` !

console.log('String with \n\
multiple \n\
lines \n\ ');
//Before ESXi (Definition: https://www.youtube.com/watch?v=-Hltydu9PXk&ab_channel=RobWillis)

console.log(`String also with
multiple
lines`);
//After ESXi - a lot cleaner

