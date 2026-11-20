let num =5;

let result = num%2 == 0 ? 'even':'odd';
console.log(`The num is ${result}`);

let userName = 0;
let fallbackValue = 'Guest';
let Greeting = `Welcome ${ userName||fallbackValue}`;
console.log(Greeting)

let userName1 =0;
let fallbackValue1 = 'Guest';
let Greeting1 = `Welcome ${ userName1 ?? fallbackValue1}`;
console.log(Greeting1)