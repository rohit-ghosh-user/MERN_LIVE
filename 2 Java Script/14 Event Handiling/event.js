let clickHandeler = () =>{
    console.log('button clicked');
}

let buttonClickHandeler = () =>{
   for( let i = 0; i<5; i++){
    console.log(i);
   }
}

let button = document.getElementById("myButton");
// Using Event Handeler
// button.onclick = clickHandeler;
// button.onclick = buttonClickHandeler;

// Using Event Listener

button.addEventListener('click',clickHandeler);
button.addEventListener('click',buttonClickHandeler);
button.addEventListener('click',buttonClickHandeler);
button.removeEventListener('click',clickHandeler);
