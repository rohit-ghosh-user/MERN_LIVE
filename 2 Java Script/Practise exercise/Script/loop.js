console.log("Practise Exercise");

//let tableNum = prompt("Enter table number what you want to print : ");
//printMultiplicationTable(tableNum);

function printMultiplicationTable(num){
console.log("Multiplication Table");
    let i=1;
    let Table;
    while(i<=10){
        Table = num*i;
        console.log(`${num} * ${i} = ${Table}`);
    i++;
}  
}


let num = prompt("Enter the number you want to factorial : ");
console.log(Getfactorial(num));
function Getfactorial(num){
    let i = 2;
    let fac = 1;
    while(i<= num){
        fac *= i;
        i++;
    }
    return fac;
}
