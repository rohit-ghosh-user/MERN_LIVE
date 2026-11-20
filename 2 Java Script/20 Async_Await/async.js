function hlo(){
    return 'hello';
}

let str = hlo();
console.log(str);
console.log(typeof str);

function Namaste(){
    return new Promise((resolve,reject) =>{
        resolve('Namaste');
    })
}

let str3 = Namaste();
console.log(str3);
console.log(typeof str3);

async function ola() {
    return 'ola Munda';
}

let str2 = ola();
console.log(str2);
console.log(typeof str2);
str2.then(data => console.log(data));