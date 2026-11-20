function getDataFromInternet(successCallback){
    console.log('Getting data from internet');
    setTimeout(() =>{
        successCallback('Kg Coding');
    },3000);
}

function setDataToDB(successCallback){
    console.log('Sending data to db');
    setTimeout(() =>{
        successCallback('db_row_25');
    },2000);
}

function sendResponseToUser(successCallback){
    console.log('Sending response to user');
    setTimeout(() =>{
        successCallback();
    },5000);
}

getDataFromInternet((data) =>{console.log(`Data is fetched ${data}`);
    setDataToDB((id) =>{console.log(`Data is saved in db with id ${id}`);
    sendResponseToUser(() =>{console.log('Response send to user')});
});
});