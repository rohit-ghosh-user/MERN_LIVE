function swap(a,b){
    console.log(`In Function: Before Swap a = ${a}, b = ${b}`);
    var temp = a;
    a = b;
    b = temp;
    console.log(`In Function: After Swap a = ${a}, b = ${b}`);
}
function swapObject(p,q){
    console.log(`In Function: Before Swap p = ${p.myValue}, q = ${q.myValue}`);
    var temp = p.myValue;
    p.myValue = q.myValue;
    q.myValue = temp;
    console.log(`In Function: After Swap p = ${p.myValue}, q = ${q.myValue}`);
}

// let x = 10;
// let y = 20;
// console.log(`Before Swap x = ${x}, y = ${y}`);
// swap(x,y);
// console.log(`After Swap x = ${x}, y = ${y}`);

let object1 = {myValue:10};
let object2 = {myValue:20};
console.log(`Before Swap object1 = ${object1.myValue}, object2 = ${object2.myValue}`);
swapObject(object1,object2);
console.log(`After Swap object1 = ${object1.myValue}, object2 = ${object2.myValue}`);