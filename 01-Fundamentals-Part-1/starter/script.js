let population = 11;
const country = "Portugal";
const continent = "Europe";
const language = "Spanish";

console.log(population / 2);

population++;

console.log(population);
console.log(population > 6);
console.log(population < 33);

const description1 =
    country +
    ' is in ' +
    continent +
    ', and its ' +
    population +
    ' million people speak ' +
    language;

console.log(description1);

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

console.log(description); 