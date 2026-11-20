
let even = [2,4,6,8,10];
console.log('even',even);

let newEven = [0, ...even, 14];

newEven.push(12);
console.log('even', even);
console.log('newEven',newEven);
console.log(newEven.length);

let obj = {
    x : 93,
    y : 69,
    hello : 'World',

    z : {
        name : 'Vim',
        age : 12,
    }
}

let newObj = {...obj, b : 67};
console.log('obj : ',JSON.stringify(obj));
console.log('newObj : ',JSON.stringify(newObj));

newObj.x = 100;
newObj.z.age = 21;

console.log('obj : ',JSON.stringify(obj));
console.log('newObj : ',JSON.stringify(newObj));