let student1 ={
    name : 'Ram',
    age : 21,
    course: 'IT',
    roll : 1,

    printName(){
        console.log(this.name);
    }
}

let student2 ={
    name : 'Shyam',
    age : 20,
    course: 'ECE',
    roll : 2,
}

// function Student(name,age,course,roll){
//     this.name = name;
//     this.age = age;
//     this.course = course;
//     this.roll = roll;

//     this.printName = function(){
//         console.log(this.name);
//     }
// }

class Student{
    constructor(name,age,course,roll){
    this.name = name;
    this.age = age;
    this.course = course;
    this.roll = roll;

    this.printName = function(){
        console.log(this.name);
    }
  }
}

let student3 = new Student('Rohit',21,'ECE',63);
console.log(student1);
console.log(student2);
console.log(student3);

let student4 = new Student('Shankar',20,'Law',97);
console.log(student4);

console.log(student1.printName());
console.log(student3.printName());
console.log(student4.printName());
