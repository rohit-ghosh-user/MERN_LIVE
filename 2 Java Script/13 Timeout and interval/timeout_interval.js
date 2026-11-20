(() =>{
let counter = 0;
let Increment = (head)=> console.log(head , ++counter);
console.log('Start');

Increment('first');

let timerId = setTimeout(() => {Increment('timer')},5000);
console.log('timerId',timerId);

setTimeout(() => {clearTimeout(timerId)},1000);

let intervalId = setInterval(() => {Increment('Interval')}, 1000);
setTimeout(() => {clearTimeout(intervalId)},10000);

console.log('End');
})();