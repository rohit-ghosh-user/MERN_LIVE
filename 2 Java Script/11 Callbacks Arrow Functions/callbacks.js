function hello(name){
    console.log(name);
}

// let hello = function(name){
//     console.log(name);
// }

function capitalize(name){
    let upper = name.toUpperCase();
    console.log(upper);
}

function processUserInput(process){

let studentName = prompt('Enter your name : ');
process(studentName);

}

processUserInput(hello);
processUserInput(capitalize);