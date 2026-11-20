// const createDouble = () =>{
//     function double(num){
//         return num*num;
//     }
//     return double;
// }

const createDouble = () =>{
    return num => num*num;
}

let twice = createDouble();
console.log(twice(5));

console.log(createDouble()(8));