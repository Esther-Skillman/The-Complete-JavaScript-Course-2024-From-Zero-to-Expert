const birthYear = 2004;
const currentYear = 2024;
const age = currentYear - birthYear;
const isOldEnough = age >= 18;

if (isOldEnough){
    console.log(`Sarah can start to drive`)
}
else{
    const yearsLeft = 18 - age;
    console.log(`Sarah is only ${age}! she can't drive yet. She needs to wait ${yearsLeft} more years until she can`)
}
// called an 'if' 'else' control structure

let century; //needs to be defined outside if and else code blocks to be accessible outside of them

if (birthYear <= 2000){
    century = 20;
} else {
    century = 21
}
console.log(`Birth Century: ${century}`)