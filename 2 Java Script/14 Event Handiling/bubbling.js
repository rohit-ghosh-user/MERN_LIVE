let outer = document.querySelector('.outer');
let inner = document.querySelector('.inner');

outer.addEventListener('click',() => {
    console.log('outer');},/*true*/);// enable true for capturing phase

    inner.addEventListener('click',(event) => {console.log('inner');
    event.stopPropagation();
});