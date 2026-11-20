let obj = {
    a : 45,
    b : 65,
    c : 'Hello',
    d : {
        x : 69,
        y : 96,
    },
}

console.log('Obj',JSON.stringify(obj));
let objCopy = copyMyObj(obj);
console.log('ObjCopy',JSON.stringify(objCopy));

objCopy.a = 100;
objCopy.d.x = 45; 

console.log('Obj',JSON.stringify(obj));
console.log('objCopy',JSON.stringify(objCopy));

function copyMyObj(){
    // let obj2 = obj;
    // return obj2;

    let objStr = JSON.stringify(obj);
    let obj2 = JSON.parse(objStr);
    return obj2;
}
