console.log('Object Equality');

let a = {firstName: 'Raju'};
let b = a;
let c = {firstName: 'Raju'};

console.log(a==b);//true
console.log(a===b);//true

console.log(a==c);//false
console.log(a===c);//false

let student = {
    firstName : 'Rohit',
    lastName : 'Ghosh',
    age : 22,
    address : {
        houseNo : 6,
        road : 'Bokultola Street',
        city : 'Khirpai',
        state: 'West Midnapur',
    },
    course : 'ECE',
    feesPaid : 'True',
};

console.log(Object.keys(student))

let student2 = {
    firstName : 'Akash',
    lastName : 'Nag',
    age : 22,
    address : {
        houseNo : 12,
        road : 'Kachari Bazar Street',
        city : 'Khirpai',
        state: 'West Midnapur',
    },
    course : 'CSE',
    feesPaid : 'FALSE',
};

student.friends = [student2];
console.log(JSON.stringify(student));