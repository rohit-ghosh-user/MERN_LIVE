console.log("Using Local Storage");

// localStorage.setItem('name', 'Rohit');

// let user = {
//     firstName : 'Rohit',
//     lastName : 'Ghosh',
//     age : 21,
//     hobbies : 'Game',
//     email : 'rohit@ghosh.com',
// }

// localStorage.setItem('UserInfo', JSON.stringify(user));

let UserInfoStr = localStorage.getItem('UserInfo');
console.log(UserInfoStr);
console.log(typeof UserInfoStr);
let UserInfo = JSON.parse(UserInfoStr);
console.log(UserInfo);