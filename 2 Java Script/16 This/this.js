let container = document.getElementById('container');
let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');


function clickHandeler(){
    console.log(this);
   this.style.backgroundColor = "red";
}


// clickHandeler();
button1.addEventListener('click',clickHandeler);
button2.addEventListener('click',clickHandeler);
button3.addEventListener('click',clickHandeler);
// container.addEventListener('click',clickHandeler);