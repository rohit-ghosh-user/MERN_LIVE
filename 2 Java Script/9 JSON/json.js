let user = {
    firstName : 'Rohit',
    lastName : 'Ghosh',
    age : 21,
    hobbies : 'Game',
    email : 'rohit@ghosh.com',
}

console.log(user);

let userStr = JSON.stringify(user);

console.log(userStr);
console.log(typeof userStr);

let newUser = JSON.parse(userStr);
console.log(newUser);