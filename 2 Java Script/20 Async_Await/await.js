function fetchUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error))
}

async function getUser() {

    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let json = await response.json();
        console.log(json);
    }catch(error){
        console.log(error);
    }

}

getUser();