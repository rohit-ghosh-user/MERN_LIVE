let first = 56;

const outer = (outerArg) =>{
const outerConst = 3.14;

let inner = (innerArg) =>{
const innerConst = 2.71;

console.log (`first ${first}`);
console.log (`outer ${outerArg}`);
console.log (`outerConst ${outerConst}`);
console.log (`innerConst ${innerArg}`);
console.log (`innercons ${innerConst}`);

};

console.log (`outer first ${first}`);
console.log (`outer outer ${outerArg}`);
console.log (`outer outerConst ${outerConst}`);

return inner;

}

// const inner = outer(78);
// inner (90);

//  outer(78)(90);

let createCounter = () =>{
    let count = 0;
    return () => ++count;
}

let count = createCounter();
console.log(count());
console.log(count());
console.log(count());

let count2 = createCounter();
console.log(count2());