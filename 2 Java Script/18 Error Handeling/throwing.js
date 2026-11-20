function devide(a,b){

    if(b===0){
       throw new Error('Devide by zero');
    }
    return a/b;
}

console.log(devide(6,3));
console.log(devide(3,6));
try{
console.log(devide(3 , 0));
} catch(Error){
    console.log('Error occured');
    console.log(Error.message);
}