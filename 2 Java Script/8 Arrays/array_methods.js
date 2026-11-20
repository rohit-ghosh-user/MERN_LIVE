console.log(`Array Methods`);

let arr = [1,3,2,5,9,8];

console.log(`is array`,Array.isArray(arr));

let obj = {};

console.log(`is array`,Array.isArray(obj));

console.log(arr);

arr.push(10);
console.log(arr);

arr.pop(9);
console.log(arr);

arr.sort();
console.log(arr);

arr.forEach(function(num,i){
    if(i === 2) return;
    console.log(`item :`,num);
})

let newArr = arr.map(function(item){
    return item*item;
})

let thirdArr =newArr.filter(function(item){
    return item % 2 === 0;
})

console.log(arr);
console.log(newArr);
console.log(thirdArr);