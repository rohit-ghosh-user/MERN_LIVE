// function getDataFromInternet(successCallback){
//     console.log('Getting data from internet');
//         successCallback('Kg Coding');
// }

// getDataFromInternet((data) =>{
//     console.log(`${data} data id fetched`);
// })

function getDataFromInternetUsingPromise(){
    return new Promise((resolve,reject) =>{
    console.log('Getting data from internet using promise');
        // for(let i = 0; i<= 10000; i++) console.log(i);
        // resolve('Kg Coding');
        reject('Internet down');
    });
}

getDataFromInternetUsingPromise()
.then((data) =>{
    console.log(`data is fetched ${data}`);
})
.catch((error) =>{
    console.log(error.message);
})
.finally(() =>{
    console.log('Finally block');
});