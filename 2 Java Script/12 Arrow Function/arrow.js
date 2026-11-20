// Normal Function 
function add1(first,second){
    return (first + second);
}
console.log(add1(4,6));


// Anonomous Function
const add2 = function(first,second){
    return (first+second);
}
console.log(add2(4,9));

//Arrow Function 
let add3 = (first,second) =>{
    return first + second;
}
console.log(add3(9,10));


// Short cut 1
const square = num =>{
    return num*num;
}
console.log(square(5));

//short cut 2 
const square1 = num => num*num;
console.log(square1(6));

// Application with array
const numbers = [1,2,3,4,5,6];

let squares = numbers.map(function (num){
    return num*num;
})

// in short

let squares1 = numbers.map(num =>num*num);

console.log(squares);