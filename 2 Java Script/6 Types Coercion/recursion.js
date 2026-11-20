function Getfactorial(num){
    let i = 2;
    let fac = 1;
    while(i<= num){
        fac *= i;
        i++;
    }
    return fac;
}

console.log(Getfactorial(5));

function getFactorialRecursion(num){
    if (num === 1) return 1;

    let fact = getFactorialRecursion(num - 1);
    return num * fact;
}
